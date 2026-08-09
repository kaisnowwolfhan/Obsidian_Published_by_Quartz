---
publish: true
---
主要服務官網: [fast-note-sync-service(以下皆稱 FNS or FNS service)](https://github.com/haierkeys/fast-note-sync-service), [Docker](https://www.docker.com), [Tailscale](https://tailscale.com)
# 前置步驟
## 抉擇
1. FNS service 部署 device: 個人用筆電
2. FNS service 安裝方式: Docker
3. 同步連線方式: Tailscale P2P內網穿透工具

## 服務端電腦配置
System: Windows 11 25H2
CPU: 11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz

# 主要步驟
## 安裝 WSL
首先確認已啟用: 
1. CPU 虛擬化(default: true)
2. Windows功能 → Hyper-V(default: false)

以系統管理員啟用 PowerShell
```PowerShell
wsl --install # 預設Linux發行版為Ubuntu
```
依提示填入 username, password(之後只要用 sudo 指令就必須得登入驗證)，重開機後跳出 Ubuntu shell 顯示以下內容即意味成功安裝。
```bash
Installation successful !
...
<username>@<device-name>: 
```
- - -
之後開啟 WSL 可以透過 CMD 新增索引標籤(需 PowerShell 7) or `wsl -d Ubuntu`；退出則透過 CMD 關閉索引標籤 or `wsl --shutdown`
特殊情況下，可用指令強制終止 WSL
```powershell
taskkill /F /im wslservice.exe
```
- - -
### 相關指令
```bash
# 抓取套件更新
sudo apt update
# 確認套件更新版本
sudo apt list --upgradable
# 正式更新
sudo apt upgrade
```
```powershell
# 更新WSL(需重啟windows)
wsl --update
```
Ps: 更新子系統，需要重開機的是母系統

## 安裝 Docker <u>in WSL</u>
```bash
# 抓取安裝指令集script
curl -fsSL https://get.docker.com -o install-docker.sh
# 運行指令集
sudo sh install-docker.sh

# 檢查docker版本以確認安裝成功
docker --version
# 啟動 docker
systemctl start docker.service
```
其他詳細安裝流程請參考 [get.docker.com](https://get.docker.com)
- - -
### 可選步驟 1: 確認並設置 WSL 開機自啟 docker<建議>
```bash
systemctl is-enabled docker
# 返回 enabled 則 OK
# 若是 disabled
sudo systemctl enable docker
```

### 可選步驟2: [設置 non-root user](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
for 如果不想每次使用 `docker` 指令前都要加上 `sudo`: 
```bash
# 創建群組
sudo groupadd docker
# 將user加入群組
sudo usermod -aG docker $USER
# 重啟WSL後測試
docker run hello-world
```

## 拉取(pull) FNS service <u>in Docker</u>
首先確認已啟用: 
1. WSL settings → 網路模式=Nat
2. WSL settings → 啟用 localhost 轉送(default: false)
3. <建議設置> WSL settings → VM 閒置逾時=-1，避免 bash 閒置時自動關機(資源佔用不大，請放心)

> WSL settings 可透過工作列搜尋找到，每次設定改變皆會出現彈窗提醒需要重啟

在合適的地方創建 `docker-compose.yaml`，我是選擇在預設目錄新增資料夾防止汙染，大概是 `Ubuntu\home\<username>\docker\FNS`
```yaml
services:
  fast-note-sync-service:
    image: haierkeys/fast-note-sync-service:latest
    container_name: fast-note-sync-service
    restart: always
    ports:
      - "9000:9000"  # RESTful API & WebSocket 端口 其中 /api/user/sync 为 WebSocket 接口地址
    volumes:
      - ./storage:/fast-note-sync/storage  # 数据存储
      - ./config:/fast-note-sync/config    # 配置文件
```
方法有兩種，一是直接透過 VS Code 連結 WSL 新增檔案
二是透過 bash 完成一系列操作
```bash
# 目錄在~(預設Ubuntu\home\<username>，可在終端設定裡調整)
# 新增資料夾
mkdir docker
cd docker
mkdir FNS
cd FNS
# 創建 docker-compose.yaml
nano docker-compose.yaml
# 進入寫入模式，貼上上面的yaml內容
# Ctrl+S 儲存退出
```
Docker 建構 Image 與 Container 並啟動服務，可選: 
- `docker compose up`: 監控服務運行過程，後續可按 d 鍵來停止監控但仍運行服務<建議>
- `docker compose up -d`: 背景運行服務，不佔用終端顯示

然後由於 `docker-compose.yaml` 預設 `restart: always` ，所以理論上 FNS 已在運行，可以透過指令確認
```bash
sudo docker ps
# 正常應出現'fast-note-synce-service'
# 沒有則需手動啟動
sudo docker start fast-note-synce-service
```
- - -
### Error 可能: ports 被佔用
(通常是被 windows 的其他服務佔用)
能成功建構 Image 與 Container，但會出現錯誤訊息，並在檢查 `docker ps -a` 時，Container 顯示的 Ports 資訊為空

#### 解法一: 解除佔用端口服務
不建議，可能引發更多 error

#### 解法二: FNS 對外(windows) port 轉用 9001
只需在 `docker-compose.yaml` 的 `ports:` 下面改成 `9001:9000`
只不過在後續連接 Obsidian Plugin 以及登陸 webgui 時需要跟著改
- - -
最後用瀏覽器網址輸入 `http://localhost:9000` 登錄 webgui，並註冊管理員帳戶
初次進會有彈窗提醒設該帳戶為管理員，請務必要按確定，別心急點叉叉。但不小心按掉也沒關系，進入 系統設置 → 安全與權杖 → 系統管理員用戶 ID，可查閱左側使用者管理確定 UID 然後輸入並儲存設定，再重整網頁便

然後記得要把 系統設置 → 安全與權杖 → 開放註冊 給關掉，避免其他人闖入(雖然目前尚未設置內網穿透不可能有其他非本電腦 的使用者進入，但怕忘記還是先關掉)

## 安裝 Tailscale
### in WSL
```bash
# 與安裝Docker類似，透過抓取指令集安裝
curl -fsSL https://tailscale.com/install.sh | sh
# 啟用開機自啟，並確認啟動情形
sudo systemctl enable --now tailscaled
sudo systemctl status tailscaled
# 看見 active(running) 表示成功安裝
```
接下來，去到 Tailscale 官網登入/註冊，進入主控臺 → Settings → Keys → Generate auth key
設定: 
- Description: 有沒有都沒差
- [x] Reusable
- [ ] Ephemeral (不要勾，這樣裝置離線不會被自動移除)
- Expiration: 可設 90 天（Key 本身的有效期，不影響節點的 key expiry，這只是這把「鑰匙」多久內能拿去註冊新裝置）

然後就 Generate Key，務必先複製保存產生的 Key，因為只會顯示這一次，不見了只能重新生成
回到 bash，用 Auth Key 讓 WSL 加入你帳戶的 Tailnet
```bash
sudo tailscale up --authkey=<你複製的Auth Key> --hostname=<隨你取，但不能有空格以及大寫 e.g. wsl2-server>
# status 會出現所有加入你 tailnet 的裝置虛擬IP, 名稱, 帳戶, 系統, ip -4 會出現現在bash裝置的虛擬IP
tailscale status 
tailscale ip -4
# 理論會出現 Tailscale 格式IP，大概是 100.x.y.z
```
- - -
#### 可選步驟: 關閉節點 IP 過期
回到主控臺 → Network → Machine，找到 WSL 的 hostname，點右邊三點 → Disable key expiry，重整網頁後對應裝置 hostname 下方應會出現 `Expiry disabled`，即表示成功
- - -

#### Error 可能: WSL 預設防火牆阻擋
確認防火牆開啟情形
```bash
sudo ufw status
```
出現找不到 ufw or `Status: inactive` 可不處理

> 當然如果害怕公網外洩，還是可以開啟 ufw，並繼續下面的步驟
> 下載 ufw `sudo apt install ufw`

但若是 `Status: active`，需設立放行規則
```bash
sudo ufw allow 9000/tcp
```
這裡的 9000 是對內的 port，如果不確定可以用 `docker ps -a` 確認 `0.0.0.0:<對外port>-><對內port>/tcp`
然後再次確認 `sudo ufw status`，列表出現以下內容即成功放行
```bash
To            Action   From
--            ------   ----
........      .....    ........
9000/tcp      ALLOW    Anywhere
........      .....    ........
```

### 其他裝置
在需要同步服務的裝置都可以安裝 Tailscale，或是為了方便存取，在服務架設的電腦客戶端也可以裝，但還是建議使用 `http://localhost:9000` 登陸以及連接服務，能避免 Tailscale 服務出錯而連不上服務
而安裝過程則正常用官網下載安裝並登陸即可

## Obsidian 第三方插件(以下稱 FNS plugin)連通設置
### 服務架設的電腦客戶端
回到 Obsidian，在第三方插件尋找 Fast Note Sync，下載並啟動
再回到 webgui → 左側"筆記庫"，點擊 "授權 Obsidian"，令牌備註隨便然後生成授權權杖，選擇 "一鍵自動匯入"，隨後 Obsidian 會出現彈窗，一路同意，FNS plugin 的遠端配置理論上就會出現 "服務已連接"
- - -
#### Error 可能: 彈窗無法跳出
在授權 Obsidian 時改選擇方法二 "手動複製 JSON 資訊"，然後在 FNS plugin 的遠端配置點擊 "黏貼服務端授權配置"
- - -

### 其他裝置 e.g. 手機客戶端
一樣先下載並啟動 FNS plugin，但這次瀏覽器的 webgui 網址不能用 `localhost`，必須拿 WSL server 的 Tailscale 虛擬 IP 組成 `http://<Tailscale虛擬IP>:9000`，然後照樣授權 Obsidian

### 建議可選設置
- 同步控制 → 配置項同步
- 同步控制 → 離線刪除同步

# 其他
如果完成以上步驟代表你完成了 FNS service 的部署，恭喜!!!
以下開始可以忽略，除非你需要它。
## 後續學習
參考 技術爬爬蝦的 [docker](https://youtu.be/gE2Ju2qoGbU?si=UJ5xx0epb-MNkGDX) 與 [WSL](https://youtu.be/_-IPi1a774E?si=7VB7M6p6czCq13Lh) 教程
上面所用指令完整介紹整理都在[[Linux 指令]]

## FNS service 後台日誌
```bash
# <ContainerName> 預設是 fast-note-sync-service
sudo docker logs -f <ContainerName>
```