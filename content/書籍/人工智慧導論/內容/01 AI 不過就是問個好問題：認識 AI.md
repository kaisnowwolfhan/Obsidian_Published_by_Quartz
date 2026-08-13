---
publish: true
lore:
  - 分類×33
  - 分群×22
  - 監督式學習×16
  - 機器學習×9
  - 特徵×7
  - 線性分類器×7
  - K-最近鄰居法×7
  - 支持向量機×6
  - 決策樹×5
  - 非監督式學習×4
  - 非線性分類器×4
  - 核函數×4
  - K-平均演算法×4
  - 模式×3
  - 線性×3
  - 參數×3
  - 訓練×3
  - 標籤×3
  - 損失函數×2
  - 超平面×2
  - 節點×2
  - 量化×1
  - 過擬合×1
  - 訓練資料×1
  - 測試×1
  - 測試資料×1
  - 預測×1
  - 圖×1
  - 支持向量×1
  - 二元樹×1
  - 樹×1
  - 根節點×1
  - 多元樹×1
  - 資訊獲利×1
  - 迭代×1
status: 已完稿
---

# 1-1 把問題化為函數

![Function\_的唯一性](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/Function_的唯一性_.png)
有兩個條件：

1. X 裡面所有的元素==一定都要對應==到 Y 裡面的元素
2. X 裡面所有的元素==只能對應==到 Y 裡面的某==一個==元素

延伸概念：
輸入、輸出的長度、內容不一定一樣，but 資料類型是同樣的，所以需注意 data type consistency，若不一樣得透過 **量化** 來解決。

# 1-3 用 AI 解決問題的步驟

## 函數學習機

建構函數學習機需要 **機器學習**、**神經網絡**。
函數學習機 just a 模式，model may be 線性、指數、對數，所以這個過程 aim to fit the best 參數。

$$
y = wx+b
$$

## 模型訓練

訓練是在不斷地調整網絡中的每個 parameters，讓結果的準確度無限逼近 100%。
但為避免 **過擬合**，只用部分歷史資料訓練，稱為 **訓練資料**；剩餘部分則用做測試，稱為 **測試資料**

設 all parameters 為 $\theta = (w, b)$ 。
Due to $\theta$ 必與歷史資料有所差距，須設定 **損失函數** 用於計算誤差。LF 不只一種，但最常見的是==最小平方法==

$$
L(\theta)=\sum_{i=1}^{n}(\overline{P_{i}Q_{i}})^2
$$

> 其中 $\overline{P_{i}Q_{i}}$ 代表從 $P_i(正確答案)$ 到 $Q_i(函式答案)$ 的距離

# 1-5 經典機器學習演算法

## 分類和分群問題

> [!info] 分類
> ==將 unknown information 納入 known information 。==
> Most typical 是生物界門綱目科屬種。

> [!info] 分群
> ==針對無明確分類問題==
> 依特徵區分。e.g. 跑得慢 & 跑得快

![分類分群、監督式學習、演算法\_](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/分類分群、監督式學習、演算法_.jpg)
最終分類的結果稱作 **標籤**，以函數來表示：

$$
Y_{Label\ 1}=f_1(x_1, x_2,···, x_n)
$$

$$
Y_{Label\ 2}=f_2(x_1, x_2,···, x_n)
$$

函數中的 $x_1, x_2, ···, x_n$ 稱為 **特徵**

## 監督式學習 and 非監督式學習

對機器學習來講，依據分類和分群問題，可進一步區分為 **監督式學習** 和 **非監督式學習** ==兩者的差異在於是否具有“關鍵性”指標，也就是標籤 Label，來區分資==

| 編號  | 烤箱溫度  | 烤箱濕度 | 烘烤作業人員 | 購買時段 | 外送人員  | 顧客評價                         |
| --- | ----- | ---- | ------ | ---- | ----- | ---------------------------- |
| 1   | 123°C | 23%  | 烘烤員 A  | 下午   | 外送員 A | 滿意                           |
| 2   | 126°C | 23%  | 烘烤員 B  | 晚上   | 外送員 B | <font color="red">不滿意</font> |
| 3   | 124°C | 25%  | 烘烤員 B  | 下午   | 外送員 B | <font color="red">不滿意</font> |
| 4   | 122°C | 23%  | 烘烤員 A  | 下午   | 外送員 A | 滿意                           |
| 5   | 124°C | 26%  | 烘烤員 B  | 下午   | 外送員 B | <font color="red">不滿意</font> |
| 6   | 124°C | 22%  | 烘烤員 A  | 晚上   | 外送員 A | 滿意                           |
| 7   | 127°C | 23%  | 烘烤員 B  | 晚上   | 外送員 A | ？                            |

<center><font color="#7f7f7f">披薩烘烤外送紀錄表（分類範例）</font></center>

「顧客評價」作為目標欄位，即為 label，而其他向度則為 features。
建立學習演算法的最後一個步驟──**預測**。這個 example 屬於「分類問題」，而 ==分類的演算法皆為監督式學習 ==。

接下來，挑選出「烤箱溫度」與「烤箱濕度」這兩欄位
![分類分群、監督式學習、演算法\_\_1|561](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/分類分群、監督式學習、演算法__1.jpg)

<center><font color="#7 f 7 f 7 f">XY 散布圖+線性分類器</font></center>

這種分類方法稱為 **線性分類器**。有<u>三個 features</u> 就會建立<u>三維</u>的立體空間，linear classifier 便會形成一個平面，稱為 **超平面**。
==超平面在 n 維空間中是 n-1 維的子空間==

---

若沒有顧客的評價，想找出不一樣便屬於分群的問題，而 ==分群的 ML 演算法稱為非監督式學習。==

> [!note]
> Classification 的 ML 演算法稱為 supervised learning，clustering 的 ML 演算法稱為 unsupervised learning

## 演算法

### 支持向量機

**支持向量機** 是 ML field 中 <u>classification</u> 演算法的一種。 ==想像成這條線的寬帶同時平行向外延伸，直到分別碰到兩個分類的第一個點為止，來找出最大寬度的寬帶==。這個點到分類線的距離可以用 vector 表示，也就是 **支持向量**。
![分類分群、監督式學習、演算法\_支持向量機|599](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/分類分群、監督式學習、演算法_支持向量機.jpg)

### 線性分類器 and 非線性分類器

如果遇到無法用 linear classifier 進行分類的情況，就需要 **非線性分類器**。它可以是二維中的一條曲線，或是三維中的一個曲面。
支持向量機的分類 function 稱為 **核函數**，可以是線性的，也可以是非線性的。 ==當需要分類的資料 features 越多、dimension 越高時，SVM 可以透過 kernel function 的轉換，簡化分類的困難度。==
![分類分群、監督式學習、演算法\_線性分類器\_and\_非線性分類器|646](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/分類分群、監督式學習、演算法_線性分類器_and_非線性分類器.jpg)

<center><font color="#7f7f7f">(左)多項式核函數 (右)徑向基核函數</font></center>

### 決策樹

名詞認識：

1. **二元樹**
2. 樹是電腦科學中一種資料儲存的方式
3. **節點**
4. **根節點**，即最起始的 node
5. 分支的數量超過兩個則稱為 **多元樹**
6. **決策樹**

==決策樹跟其他 ML classification 演算法的最大差異是，經過 decision tree 演算法的判斷後，就可以變成實際分類的規則==。
決定使用何種 feature 做 classification 得出的整體 accuracy rate 較高的 principle，稱為 **資訊獲利**。決策樹 algorithm 經由持續不斷的 **迭代** 試驗，才能得到一個整體正確率最高的結果。

### KNN

KNN, K-Nearest Neighbor，中文稱作「**K-最近鄰居法**」，是<u>監督式</u> ML 中 <u>classification</u> algorithm 的一種。利用樣本點與樣本點之間的特徵距離遠近，去判斷新的資料比較像哪一種。
![分類分群、監督式學習、演算法\_KNN|619](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/分類分群、監督式學習、演算法_KNN.jpg)

<center><font color="#7f7f7f">k=2 時的 KNN</font></center>

若 k=2，也就是找最靠近目標編號 7 的兩個點，而兩點的類型不同，因此無法推測編號 7 是哪一種滿意或不滿意。
![IMG\_20260407\_201536|623](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/IMG_20260407_201536.jpg)

<center><font color="#7f7f7f">k=3 時的 KNN</font></center>

若 k=3，或在不滿意的個數較多，因此可以推測編號 7 歸類為不滿意。
==k 值的設定一般是以奇數為原則，避免兩類別距離相同難以分類==

### K-平均演算法

**K-平均演算法** 屬於 <u>clustering</u> algorithm。
步驟：

1. 假設 k=2，即分為兩群
2. 計算各群集的重心
3. 根據分群重心，判斷各點是否需要重新再分群

![分類分群、監督式學習、演算法\_K-平均演算法|616](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/分類分群、監督式學習、演算法_K-平均演算法.jpg)

<center><font color="#7f7f7f">判斷樣本點是否需重新分群</font></center>
