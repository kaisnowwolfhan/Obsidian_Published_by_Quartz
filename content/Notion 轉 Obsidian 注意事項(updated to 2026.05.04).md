---
publish: true
---
# 總覧成功轉換
Hint: 很多轉換不了的格式通常透過 Dataview 即可達成，但上手難度微高
- [ ] Color Text/Color background(Obsidian 依賴 HTML)
- [x] Heading
- [x] Bulleted list
- [x] Numbered list
- [x] To-do list(Obsidian 的 Checkbox)
- [x] Toggle list(Obsidian 的 Callout+)
- [x] Page(Obsidian 的 File Link)
- [x] Callout
- [x] Quote
- [x] 巢狀 Quote/Callout
- [x] Table
- [x] Divider
- [x] Link to Page(Obsidian 的 File Link)
- [x] Image
- [ ] Audio/Video (Obsidian 依賴插件 Link Embed)
- [x] Inline Code/Code block
- [ ] File
- [ ] Web bookmark (Obsidian 依賴插件 Link Embed)
- [ ] Table view
- [x] Board view(需自行轉換視圖)
- [ ] Gallery view
- [x] List view
- [ ] Feed view
- [x] Dashboard view(Obsidian 的 Base 數據庫)
- [ ] Calender view
- [ ] Timeline view(Obsidian 依賴插件 Anyblock)
- [ ] Map view
- [ ] Vertical bar chart(Obsidian 依賴插件 Charts)
- [ ] Horizontal bar chart(Obsidian 依賴插件 Charts)
- [ ] Line chart(Obsidian 依賴插件 Charts)
- [ ] Donut chart
- [ ] Number chart
- [ ] Form
- [ ] Database - inline
- [x] Database -  full page(Obsidian 的 Base 數據庫)
- [ ] Linked view of data source
- [ ] Table of contents(Obsidian 依賴插件 Dynamic Outline)
- [ ] Button(Obsidian 依賴插件 Buttons)
- [x] Block equation
- [ ] Breadcrumb
- [ ] Tabs
- [x] Synced block(Obsidian 的 Embed File)
- [x] Toggle Heading(Obsidian 的 Callout+)
- [ ] Columns
- [ ] AI Meeting Notes
- [ ] Code - Mermaid(Obsidian 依賴插件 Anyblock)
- [ ] AI block
- [ ] Mention(Obsidian 不存在協作功能)
- [ ] Date of reminder(Obsidian 依賴插件 Natural Language Date)
- [x] Emoji
- [x] Inline equation
- [ ] Embed(Obsidian 依賴插件 Link Embed)

# 問題詳述
## 有bug
### 不支援字體/高量顏色，但Latex內建可以

### quote(非callout)內的部分格式失效，如checkbox
<u>∵Obsidian 不支援 quote 內的大部分其他格式，但 Callout 可以</u>

*Obsidian*
![358](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/有bug─Notion_轉_Obsidian_注意事項_(Update_2026.05.04).jpg)
### 不支援多column格式
<u>Solution：自行添加 HTML 顏色格式，部分插件如 Editing Toolbar 支援一鍵添加格式</u>

*Notion*
![521](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/有bug─Notion_轉_Obsidian_注意事項_(Update_2026.05.04)_1.jpg)
*Obsidian*
![463](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/有bug─Notion_轉_Obsidian_注意事項_(Update_2026.05.04).png)
### 一對中括號易被認成link格式而消失
*Notion*
![451](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/有bug─Notion_轉_Obsidian_注意事項_(Update_2026.05.04)_4.jpg)
*Obsidian*
![445](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/有bug─Notion_轉_Obsidian_注意事項_(Update_2026.05.04)_5.jpg)
### Database column 錯位
*Notion*
![](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/有bug─Notion_轉_Obsidian_注意事項_(Update_2026.05.04)_6.jpg)
*Obsidian*
![](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/有bug─Notion_轉_Obsidian_注意事項_(Update_2026.05.04)_1.png)
### Link 卡片會被轉成一般連結
*Notion*
![406](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/有bug─Notion_轉_Obsidian_注意事項_(Update_2026.05.04)_7.jpg)
*Obsidian*
![405](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/有bug─Notion_轉_Obsidian_注意事項_(Update_2026.05.04)_8.jpg)
### 底線與粗體 or 斜體格式衝突
<u>∵Obsidian 底線格式是借用 HTML， 與 Markdown 衝突，除非粗體/斜體也用 HTML</u>

_Obsidian_
![](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/底線與粗體_or_斜體格式衝突─Notion_轉_Obsidian_注意事項_(Update_2026.05.04).jpg)
## 疑義/可修復
### toggle 會轉成 callout+(可摺疊) 格式
*Notion*
![345](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/疑義_可修復─Notion_轉_Obsidian_注意事項_(Update_2026.05.04).jpg)
*Obsidian*
![367](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/疑義_可修復─Notion_轉_Obsidian_注意事項_(Update_2026.05.04)_1.jpg)
### 表格格式在 Obsidian需自行 enter 多一行才會生效
*Obsidian*
![414](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/疑義_可修復─Notion_轉_Obsidian_注意事項_(Update_2026.05.04)_2.jpg)
### 部分markdown轉換/顯示出問題
<u>∵有空格干擾</u>

*Notion*
![524](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/有bug─Notion_轉_Obsidian_注意事項_(Update_2026.05.04)_2.jpg)
*Obsidian*
![522](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/有bug─Notion_轉_Obsidian_注意事項_(Update_2026.05.04)_3.jpg)