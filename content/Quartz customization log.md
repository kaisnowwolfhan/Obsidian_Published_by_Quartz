---
publish: true
created: 2026-07-25T17:42:34.796+08:00
modified: 2026-07-25T23:21:11.444+08:00
---

[^1]: 作為一名只會 basic Python and C++ 的菜鳥，我很多 customize 的過程都是靠 arguing with ai 產生結果的，so 希望我把這些 a bit tricky 的過程記錄下來給您參考。
推薦其他人的 customization: [Eilleen(fanteastick)](https://quartz.eilleeenz.com/Quartz-customization-log), [morrowind-modding](https://morrowind-modding.github.io/contributing/custom-formatting-features)

# 待完成

- Content folder history(卡在 Recent-notes plugin-option-title 放不了連結)
- navigation-progress on Top(css 屬性被宣告在 `base.scss`)
- [FloatingButtons](https://github.com/fanteastick/quartz-test/blob/60033035a1fb02f273502692b5c7f7084ae5cc08/quartz/components/_FloatingButtons.tsx#L15)

# 已完成

## Clickable-image

### Tried

[vazome](https://github.com/vazome)的[quartz-clickable-images-zoom-plugin](https://github.com/vazome/quartz-clickable-images-zoom-plugin)，but v4不相容v5 plugin(v4內嵌在Quartz core，v5用外置community plugin，有對應plugin structure)。

### Finally

[HappyPotatoHead](https://github.com/HappyPotatoHead)的[quartz5-clickable-images](https://github.com/HappyPotatoHead/quartz5-clickable-images)，只需要運行，無需調整參數即可安裝

```powershell
npx quartz plugin add github:HappyPotatoHead/quartz5-clickable-images
npx quartz plugin install --latest github:HappyPotatoHead/quartz5-clickable-images
```

具體如何實現誰管呢~

## Drawer(mobile-only TOC)

### Tried

Let ai cook 的結果就是 a complete mess，堅持要我用 v4 的 ts-override 真的傻眼🙄

### Finally

[HappyPotatoHead](https://github.com/HappyPotatoHead) 的 [quartz5-drawer](https://github.com/HappyPotatoHead/quartz5-drawer)，總結就是到了 v5 需要大動干戈的時候，就只能靠 Externalplugin(如果我多會點 TypeScript 也不需要和 ai '有禮貌地' 爭論😭)
That said，匯入 quartz5-drawer 後，決定好你要放的位置，然後記得在 layout 加上 `display: modile-only` 。我是選擇放在 Reader-mode button 的右邊，以下

```yaml title="quartz.congig.yaml"
- source: github:HappyPotatoHead/quartz5-drawer
    enabled: true
    options:
      collapseByDefault: false
    order: 50
    layout:
      position: left
      priority: 40  # 我的 Reader-mode 是 priority: 35，所以在它的右邊
      display: mobile-only
      group: toolbar
```

## Recent-notes only shows on the homepage

### Tried

聽從 ai 和 official v5 documentation 的建議加入 `Component.ConditionalRender()` ，結果瘋狂報錯。
一是可能官方 upgrade 時遺漏，沒把 `Component` 刪掉；二是可能 `ConditionalRenderConfig()` 就可以，但知識貧乏的我還沒捉摸出怎麼實現。

### Finally

其實官方文檔就有說到一個[更簡單的方法](https://bf60c891.quartz-1h4.pages.dev/layout-components#ts-override-2)，但我一直忽視😃。我是這樣實現的

```ts
registerCondition("index-only", (props) => props.fileData.slug === "index" )
```

對...就這麼簡單，照著格式填你想要的 ConditionName 、一個判別式，然後再把 `Condition: index-only` 放進 `quartz.congig.yaml` 裡即可。判別式裡的物件我發現有個搜尋邏輯，大概是 `./quartz/components/type.ts → 對應物件的連結檔 → ... ` 。
然後一樣不知道怎麼弄可以讓 ai 幫忙整理個列表自己選，不建議直接讓 ai 實作，除非你大概知道它在幹什麼。

## List-cards

完全抄自 [fanteastick](https://github.com/fanteastick/quartz-test/blob/v4/quartz/styles/_list-cards.scss)，只有微調圓角(圓角狂魔欣喜😍):
![List-cards─Quartz\_customization\_log](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/List-cards─Quartz_customization_log.png)

```scss
article.list-cards ul li {
	...
	border-radius: 12px;
	...
}
```

## Callouts border-radius

如上圓角狂魔，

```scss
.callout {
  border-radius: 16px;
  overflow: hidden; // 確保子元素不會超出圓角範圍
}
```

## Divider

同樣出自 [fanteastick](https://github.com/fanteastick)，但一時找不到詳細出處，就放我的在下方參考

```scss
hr {
  overflow: visible;
  padding: 0;
  height: 0;
  margin: 4em auto;
  border: none;
  text-align: center;
  width: 100%;
 
  &:after {
    content: "───── ❖ ─── ❖ ─── ❖ ─────";
    // content: "───✱*.｡:｡✱*.:｡✧*.｡✰*.:｡✧*.｡:｡*.｡✱───"; // the idea from Eilleen(fanteastick)
    display: inline-block;
    margin: -1em 0 0.5em;
    font-size: 0.9em;
    padding: 0.5em 1em;
    color: var(--gray);
  }
}
```

## Code, pre(code)

這次就真的是 ai 神力
![Code,\_pre(code)─Quartz\_customization\_log](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/Code,_pre\(code\)─Quartz_customization_log.png)
![Code,\_pre(code)─Quartz\_customization\_log\_1](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/Code,_pre\(code\)─Quartz_customization_log_1.png)

```scss
/* inline code */
:not(pre) > code {
  padding: 0.18rem 0.42rem;
  margin: 0 0.08rem;
  border-radius: 6px;
  font-size: 0.88em;
  background: color-mix(in srgb, var(--secondary) 14%, transparent);
  color: var(--secondary);
  border: 1px solid color-mix(in srgb, var(--secondary) 20%, transparent);
  white-space: break-spaces;
}
/* code block */
pre {
  position: relative !important;
  margin: 1.35rem 0;
  padding: 1.15rem 3.4rem 1.15rem 1.15rem !important;
  min-height: 3.2rem;
  border-radius: 14px;
  overflow-x: auto;
  overflow-y: visible !important;
  font-size: 0.92rem;
  line-height: 1.7;
  border: 1px solid rgba(148, 163, 184, 0.22);
  background: var(--code-background-color) !important;
  /* :root {
    &[saved-theme="dark"] {
      --code-background-color: #1f2933;
    }
    &[saved-theme="light"] {
      --code-background-color: white;
    }
  } */
}
/* code block shadow */
:root[saved-theme="light"] pre {
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.14),
    inset 0 1px 0 rgba(0, 0, 0, 0.04);
}
:root[saved-theme="dark"] pre {
  box-shadow: 
    0 10px 24px rgba(255, 255, 255, 0.14), 
    inset 0 1px 0 rgba(255, 255, 255, 0.04); 
}
```

## Webkit-scrollbar

效果請參考上個客製化項目圖片

```scss
::-webkit-scrollbar {
  height: 8px;
  width: 8px;
}
/* 滾動條背景 */
::-webkit-scrollbar-track {
  background: transparent !important;
}
/* 滾動條拖曳手把 */
::-webkit-scrollbar-thumb {
  background: var(--webkit-scrollbar-thumb-color) !important;
  border-radius: 999px;
}
/* 滾動條拖曳手把 */
::-webkit-scrollbar-thumb:hover {
  background: var(--webkit-scrollbar-thumb_hover-color) !important;
  /* :root {
    --webkit-scrollbar-thumb-color: rgba(148, 163, 184, 0.6);
    --webkit-scrollbar-thumb_hover-color: rgba(148, 163, 184, 0.3);
  } */
}
```

## CheckBox

![CheckBox─Quartz\_customization\_log](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/CheckBox─Quartz_customization_log.png)
![CheckBox─Quartz\_customization\_log\_1](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/CheckBox─Quartz_customization_log_1.png)

```scss
article input[type="checkbox"] {
  /* 1. 強制覆蓋瀏覽器預設外觀 (如果預設厚度改不動，這行是關鍵) */
  appearance: none; 
  -webkit-appearance: none;

  /* 2. 設定尺寸、邊框厚度與圓角 */
  width: 1.1rem;
  height: 1.1rem;
  border-style: solid !important;
  border-width: 1.5px !important; // 在這裡調整你想要的厚度（例如 2px, 3px）
  border-radius: 4px;

  /* 3. 設定邊框與填充顏色 */
  border-color: var(--secondary) !important;
  background-color: var(--light);

  /* 4. 設定位置 */
  position: relative;
  cursor: pointer;
  vertical-align: left; //checkbox在縱向的位置，left 實際是對齊字的正中，middle, right 反而太靠下
  
  /* 5. 定義「打勾」樣式 (因為用了 appearance: none，必須手動補回勾選視覺) */
  &:checked {
    background-color: var(--secondary);
    border-color: var(--secondary) !important;

    &::after {
      content: "";
      position: absolute;
      top: 1px;
      left: 5px;
      width: 4px; //視為一個長方形
      height: 8px;
      border: solid var(--light);
      border-width: 0 2px 2px 0; // 勾勾的粗度
      transform: rotate(45deg);
    }
  }
}
```

## Subheadings

![Subheadings─Quartz\_customization\_log|200](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/Subheadings─Quartz_customization_log.png)

```scss
:root {
  &[saved-theme="dark"] {
    --h1-color: #d04255;
    --h1-size: 2em;
    --h2-color: #d57634;
    --h2-size: 1.75em;
    --h3-color: #e5b567;
    --h3-size: 1.5em;
    --h4-color: #9ae65c;
    --h4-size: 1.25em;
    --h5-color: #707afa;
    --h5-size: 1em;
    --h6-color: #9386c8;
  }
  &[saved-theme="light"] {
    --h1-color: #f06477;
    --h1-size: 2em;
    --h2-color: #f5924b;
    --h2-size: 1.75em;
    --h3-color: #e9b35c;
    --h3-size: 1.5em;
    --h4-color: #a8c373;
    --h4-size: 1.25em;
    --h5-color: #7e9dff;
    --h5-size: 1em;
    --h6-color: #9078f1;
  }
}
article {
  h1 { color: var(--h1-color) !important; font-size: var(--h1-size) !important; }
  h2 { color: var(--h2-color) !important; font-size: var(--h2-size) !important; }
  h3 { color: var(--h3-color) !important; font-size: var(--h3-size) !important; }
  h4 { color: var(--h4-color) !important; font-size: var(--h4-size) !important; }
  h5 { color: var(--h5-color) !important; font-size: var(--h5-size) !important; }
  h6 { color: var(--h6-color) !important; }
}
```

## GitHub Tracer(source, blame, history)
