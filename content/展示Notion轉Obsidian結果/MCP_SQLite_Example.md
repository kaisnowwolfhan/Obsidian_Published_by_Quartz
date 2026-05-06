---
notion-id: 15c588f9-cb7e-8191-af10-d4fbe3e3cf93
---
> In the [[展示Notion轉Obsidian結果]] folder
# 快速入門指南

根據提供的資源，快速入門指南旨在幫助您在 5 分鐘內快速上手 MCP。指南中您將學習以下內容：

●  **設置本地 SQLite 資料庫：** 

指南會逐步指導您建立一個用於測試的簡單 SQLite 資料庫**1**。

● **透過 MCP 將 Claude Desktop 連接到資料庫：** 

您將學習如何配置 Claude Desktop 以連接到本地執行的 SQLite MCP 伺服器**234**。

● **安全地查詢和分析您的資料：** 

一旦連接成功，您就可以使用 Claude Desktop 向資料庫發送查詢，並安全地分析結果。

---

==❗雖然本指南以 Claude Desktop 作為 MCP 主機範例，但該通訊協定本身是開放的，因此任何應用程式都可以將其整合進來。無論是整合開發環境（IDEs）、AI 工具，或其他各類軟體，都能透過 MCP 以標準化方式與本機整合進行連接。==

==⚠️ ====**請注意，Claude Desktop 的 MCP 支援目前處於開發者預覽階段，僅支援連接到您機器上執行的本地 MCP 伺服器。**====尚不支援遠端 MCP 連線。此整合功能僅在 Claude Desktop 應用程式中可用，而 Claude 網頁介面 (claude.ai) 則不支援。==

在快速入門指南中，提供了一個使用 SQLite 的重點範例：

![[image 22.png]]

1. Claude Desktop 作為 MCP 用戶端。
2. SQLite MCP Server 提供安全的資料庫訪問。
3. 本機 SQLite 資料庫儲存實際資料。

SQLite MCP 伺服器和本機 SQLite 資料庫之間的通訊完全在本機進行，SQLite 資料庫不會暴露於網際網路。模型上下文協定確保 Claude Desktop 只能透過定義明確的介面執行核准的資料庫操作，讓您可以在完全控制訪問權限的情況下，安全地讓 Claude 分析和互動您的本地資料。

# 安裝程式

## **Installing system tool**

- **uv 0.4.18 或更高版本**：
使用 `uv --version` 指令檢查安裝版本。
- **Git**：
使用 `git --version` 指令確認已安裝與版本資訊。
- **SQLite**：
使用 `sqlite3 --version` 指令確認已安裝與版本資訊。

---

## **Installing prerequisites (Windows)**

4. 開啟終端機 PowerShell

<!-- Column 1 -->
![[image 23.png]]

<!-- Column 2 -->
![[image 24.png]]

在 PowerShell 中，若要使用滑鼠右鍵來複製內容，可以依以下提示操作：

5. 用滑鼠選取想要複製的文字。
6. **直接按滑鼠右鍵**，即會將選取的內容複製到剪貼簿。


7. 安裝命令

```shell
# Using winget
winget install --id=astral-sh.uv -e
winget install git.git sqlite.sqlite

# Or download directly:
# uv: https://docs.astral.sh/uv/
# Git: https://git-scm.com
# SQLite: https://www.sqlite.org/download.html

```

![[image 25.png]]

8. 確認已安裝版本資訊
重開終端機再執行檢查命令

```shell
#檢查 uv 安裝版本
uv --version
#檢查 git 安裝版本
git --version
#檢查 SQLite 安裝版本
sqlite3 --version
#檢查完畢

```

![[image 26.png]]

## **Installation and Setup**

9. 建立一個商品範例資料庫
```shell
# Create a new SQLite database
$sql = @'
CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT,
  price REAL
);

INSERT INTO products (name, price) VALUES
  ('Widget', 19.99),
  ('Gadget', 29.99),
  ('Gizmo', 39.99),
  ('Smart Watch', 199.99),
  ('Wireless Earbuds', 89.99),
  ('Portable Charger', 24.99),
  ('Bluetooth Speaker', 79.99),
  ('Phone Stand', 15.99),
  ('Laptop Sleeve', 34.99),
  ('Mini Drone', 299.99),
  ('LED Desk Lamp', 45.99),
  ('Keyboard', 129.99),
  ('Mouse Pad', 12.99),
  ('USB Hub', 49.99),
  ('Webcam', 69.99),
  ('Screen Protector', 9.99),
  ('Travel Adapter', 27.99),
  ('Gaming Headset', 159.99),
  ('Fitness Tracker', 119.99),
  ('Portable SSD', 179.99);
'@

cd ~
& sqlite3 test.db $sql

```
10. 設定 Claude Desktop
**開啟設定檔**：
使用文字編輯器開啟 `%APPDATA%\\Claude\\claude_desktop_config.json`。
若您安裝了** **[**VS Code**](https://code.visualstudio.com/)，可在 PowerShell 中輸入：
```shell
code $env:AppData\Claude\claude_desktop_config.json

```
11. **新增設定項目並儲存(Ctl+s)**：
在設定檔中加入以下內容（請將 YOUR_USERNAME 替換為您的實際使用者名稱）：

```json
{
  "mcpServers": {
    "sqlite": {
      "command": "uvx",
      "args": [
        "mcp-server-sqlite",
        "--db-path",
        "C:\\Users\\YOUR_USERNAME\\test.db"
      ]
    }
  }
}

```

![[image 27.png]]

此設定代表：

- 存在一個名為 "sqlite" 的 MCP 伺服器。
- 使用 `uvx mcp-server-sqlite` 指令啟動此伺服器。
- 連接至 `C:\\Users\\YOUR_USERNAME\\test.db` 這個 SQLite 資料庫檔案。
12. **重啟**Claude Desktop：
刪除 Claude Desktop 

```shell
# 刪除 Claude Desktop 應用程式
taskkill /IM claude.exe /F

```

重新啟動 Claude Desktop，即可透過 MCP 與您的測試資料庫建立安全連接。

![[image 28.png]]

## 測試運作狀況

讓我們來驗證設定是否已正確生效。請嘗試在 Claude Desktop 中輸入以下提示：

```shell
您能連接到我的 SQLite 資料庫，並告訴我有哪些產品及其價格嗎？
```

允許 Claude Desktop 接受 sqlite 工具

![[image 29.png]]

Claude Desktop 將會：

13. 連接到 SQLite MCP 伺服器
14. 對您的本機資料庫執行查詢
15. 將查詢結果以整齊格式呈現，顯示可用產品與對應價格

> 查詢結果

![[image 30.png]]

```shell
我會幫您查看資料庫中的產品資訊。首先讓我們看看資料庫中有哪些表格。
好的,我看到有一個 products 表格。讓我們來看看這個表格的結構。
現在讓我們查詢所有產品的名稱和價格：
以下是所有產品及其價格的列表（按價格從低到高排序）：
1. `Screen Protector - $9.99`
2. `Mouse Pad - $12.99`
3. `Phone Stand - $15.99`
4. `Widget - $19.99`
5. `Portable Charger - $24.99`
6. `Travel Adapter - $27.99`
7. `Gadget - $29.99`
8. `Laptop Sleeve - $34.99`
9. `Gizmo - $39.99`
10. `LED Desk Lamp - $45.99`
11. `USB Hub - $49.99`
12. `Webcam - $69.99`
13. `Bluetooth Speaker - $79.99`
14. `Wireless Earbuds - $89.99`
15. `Fitness Tracker - $119.99`
16. `Keyboard - $129.99`
17. `Gaming Headset - $159.99`
18. `Portable SSD - $179.99`
19. `Smart Watch - $199.99`
20. `Mini Drone - $299.99`
您是否需要了解某些特定價格範圍的產品，或是其他相關資訊？
```

# 嘗試這些範例

現在 MCP 已經可以正常運作，您可以嘗試下列越來越進階的範例查詢與操作：

### 基本查詢

```shell
詢問資料庫中所有產品的平均價格，以了解整體定價水平。
```

### 資料分析

```shell
您能分析價格分佈並提出任何定價優化建議嗎？
```

### 複雜操作

```shell
您能協助我設計並建立一個新的資料表，用來儲存顧客訂單嗎？
```
