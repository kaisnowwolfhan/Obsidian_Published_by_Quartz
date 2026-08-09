---
publish: true
---

# systemctl

- `systemctl enable <服務/套件>.service`：使某服務自動啟動
- `systemctl disable <服務/套件>.service`：使某服務不自動啟動
- `systemctl status <服務/套件>.service`：服務詳細信息
- `systemctl is-active <服務/套件>.service`：顯示是否啟動
- `systemctl is-enable <服務/套件>.service`：顯示是否自動啟動
- `systemctl list-units -- type =service`：顯示所有已啟動的服務
- `systemctl start <服務/套件>.service`：啟動某服務
- `systemctl stop <服務/套件>.service`：停止某服務
- `systemctl restart <服務/套件>.service`：重啟某服務

# 查找 ip

## 局域網

- `ip a`：输入 `ip addr show` 或简写 `ip a`，在输出结果中查找 `inet` 后面的数字即为局域网 IP。
- `ifconfig`：输入 `ifconfig` 查看所有网卡信息，在 `inet` 字段旁找到本地 IP（部分新系统需先安装 net-tools）。
- `hostname -i`：输入 `hostname -i` 直接显示当前主机的 IP 地址。

## 公網

- `curl ifconfig.me`：在终端输入该命令可获取本机的公网出口 IP

# 端口(port)佔用

## 查找端口佔用應用

```bash
sudo lsof -i :9000
# 或者
sudo netstat -tunlp | grep 9000
```

## 終止該佔用程序

```bash
sudo kill -9 <PID> # 通常是4~5位數
```

# Docker

## General

查看運行中的 Container: `docker ps`
查看所有 Container: `docker ps -a`
啟動 Container: `docker start <Container ID or Name>`
停止 Container: `docker stop <Container ID or Name>`
根據 Container 建新 Image: `docker commit <Container ID or Name> <Image ID>`
根據 Image 建新 Container: `docker run -it --name <Container Name> <Image ID> bash`

## compose up

- **背景執行 (`-d`)**：輸入 `docker compose up -d` 可以讓容器在背景（Background）運作，不會佔用終端機畫面。
- **指定設定檔 (`-f`)**：當檔案名稱不是預設的 `docker-compose.yml` 時，可用 `-f` 指定特定檔案（例如：`docker compose -f custom-file.yml up`）。
- **強制重建 (`--force-recreate`)**：忽略現有容器，強制停止並重新建立所有容器。
- **重新建置映像檔 (`--build`)**：在啟動前強制重新編譯本地的 `Dockerfile` 映像檔。
