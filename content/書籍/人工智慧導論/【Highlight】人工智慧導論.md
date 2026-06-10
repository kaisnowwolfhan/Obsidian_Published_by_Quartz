---
Author:
  - "[[郭台銘]]"
  - "[[陳信希]]"
  - "[[郭大維]]"
  - "[[李傑]]"
  - "[[高虹安]]"
  - "[[吳信輝]]"
Category:
  - AI
sticker: emoji//1f4d6
---
# 01 AI 不過就是問個好問題：認識 AI
## 1-1 把問題化為函數
![](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/Function_的唯一性_.png)
有兩個條件：
1. X 裡面所有的元素==一定都要對應==到 Y 裡面的元素
2. X 裡面所有的元素==只能對應==到 Y 裡面的某==一個==元素
延伸概念：
輸入、輸出的長度、內容不一定一樣，but 資料類型是同樣的，所以需注意 data type consistency，若不一樣得透過 <font color="#ff0000">量化(Quantification)</font> 來解決。

## 1-3 用 AI 解決問題的步驟
### 函數學習機
建構函數學習機需要<font color="#ff0000">機器學習(ML)</font>、<font color="#ff0000">神經網絡(neural network)</font>。
函數學習機 just a 模式 (model)，model may be 線性、指數、對數，所以這個過程 aim to fit the best 參數 (Parameters)。
$$
y = wx+b
$$

### 模型訓練
訓練是在不斷地調整網絡中的每個parameters，讓結果的準確度無限逼近 100%。
但為避免<font color="#ff 0000">過擬合(Overfitting)</font>，只用部分歷史資料訓練，稱為<font color="#ff 0000">訓練資料(training data)</font>；剩餘部分則用做測試，稱為<font color="#ff 0000">測試資料(test data)</font>

設 all parameters 為 $\theta = (w, b)$ 。
Due to $\theta$ 必與歷史資料有所差距，須設定<font color="#ff0000">損失函數(loss function)</font>用於計算誤差。LF 不只一種，但最常見的是==最小平方法==
$$
L(\theta)=\sum_{i=1}^{n}(\overline{P_{i}Q_{i}})^2
$$
[^1]: 其中 $\overline{P_{i}Q_{i}}$ 代表從 $P_i(正確答案)$ 到 $Q_i(函式答案)$ 的距離

## 1-5 經典機器學習演算法
### 分類和分群問題
> [!info] 分類(classification)
> ==將unknown information 納入 known information 。==
> Most typical 是生物界門綱目科屬種。
- - -
> [!info] 分群(clustering)
> ==針對無明確分類問題==
>  依特徵(Feature) 區分。e.g. 跑得慢 & 跑得快

![分類分群、監督式學習、演算法_](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/分類分群、監督式學習、演算法_.jpg)
最終分類的結果稱作<font color="#ff0000">標籤(label)</font>，以函數來表示：
$$
Y_{Label\ 1}=f_1(x_1, x_2,···, x_n)
$$
$$
Y_{Label\ 2}=f_2(x_1, x_2,···, x_n)
$$
函數中的 $x_1, x_2, ···, x_n$ 稱為<font color="#ff0000">特徵(features)</font>

### 監督式學習 and 非監督式學習
對機器學習來講，依據分類和分群問題，可進一步區分為<font color="#ff0000">監督式學習(supervised learning)</font> 和<font color="#ff0000">非監督式學習(unsupervised learning)</font>==兩者的差異在於是否具有“關鍵性”指標，也就是標籤 Label，來區分資==

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
「顧客評價」作為目標欄位，即為 label
，而其他向度則為 features。
建立學習演算法的最後一個步驟──<font color="#ff0000">預測(prediction)</font>。這個 example 屬於「分類問題」，而 ==分類的演算法皆為監督式學習 ==。
挑選出「烤箱溫度」與「烤箱濕度」這兩欄位

![分類分群、監督式學習、演算法__1|561](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/分類分群、監督式學習、演算法__1.jpg)
<center><font color="#7 f 7 f 7 f">XY 散布圖+線性分類器</font></center>
這種分類方法稱為 <font color="#ff0000">線性分類器(linear classifier)</font>。有<u>三個 features</u> 就會建立<u>三維</u>的立體空間，linear classifier 便會形成一個平面，稱為 <font color="#ff0000">超平面(hyperplane)</font>。==超平面在 n 維空間中是 n-1 維的子空間==
- - -
若沒有顧客的評價，想找出不一樣便屬於分群的問題，而 ==分群的 ML 演算法稱為非監督式學習。==
> [!note]
> Classification的 ML 演算法稱為 supervised learning，clustering 的 ML 演算法稱為 unsupervised learning 

### 演算法
#### 支持向量機
<font color="#ff0000">支持向量機(support vector machine, SVM)</font>是 ML field 中 <u>classification</u> 演算法的一種。 ==想像成這條線的寬帶同時平行向外延伸，直到分別碰到兩個分類的第一個點為止，來找出最大寬度的寬帶==。這個點到分類線的距離可以用 vector 表示，也就是 <font color="#ff0000">支持向量(support vector)</font>

![分類分群、監督式學習、演算法_支持向量機|599](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/分類分群、監督式學習、演算法_支持向量機.jpg)

#### 線性分類器 and 非線性分類器
如果遇到無法用 linear classifier 進行分類的情況，就需要<font color="#ff0000">非線性分類器(nonlinear classifier)</font>。它可以是二維中的一條曲線，或是三維中的一個曲面。
支持向量機的分類 function 稱為<font color="#ff0000">核函數(kernel function)</font>，可以是線性的，也可以是非線性的。 ==當需要分類的資料 features 越多、dimension 越高時，SVM 可以透過 kernel function 的轉換，簡化分類的困難度。==
![分類分群、監督式學習、演算法_線性分類器_and_非線性分類器|646](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/分類分群、監督式學習、演算法_線性分類器_and_非線性分類器.jpg)
<center><font color="#646a73">(左)多項式核函數 (右)徑向基核函數</font></center>

#### 決策樹
名詞認識：
1. <font color="#ff0000">二元樹(binary tree)</font>
2. 樹是電腦科學中一種資料儲存的方式
3. <font color="#ff0000">節點(node)</font>
4. <font color="#ff0000">根節點(root)</font>，即最起始的 node
5. 分支的數量超過兩個則稱為<font color="#ff0000">多元樹(N-ary tree)</font>
6. <font color="#ff 0000">決策樹(decision tree)</font>
==決策樹跟其他 ML classification 演算法的最大差異是，經過 decision tree 演算法的判斷後，就可以變成實際分類的規則==。
決定使用何種 feature 做 classification 得出的整體 accuracy rate 較高的 principle，稱為<font color="#ff0000">資訊獲利(information gain)</font>。決策樹 algorithm 經由持續不斷的<font color="#ff0000">迭代(iteration)</font>試驗，才能得到一個整體正確率最高的結果。

#### KNN
KNN, K-Nearest Neighbor，中文稱作「<font color="#ff0000">K-最近鄰居法</font>」，是<u>監督式</u> ML 中 <u>classification</u> algorithm 的一種。利用樣本點與樣本點之間的特徵距離遠近，去判斷新的資料比較像哪一種。
![分類分群、監督式學習、演算法_KNN|619](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/分類分群、監督式學習、演算法_KNN.jpg)
<center><font color="#646a73">k=2 時的 KNN</font></center>
若 k=2，也就是找最靠近目標編號 7 的兩個點，而兩點的類型不同，因此無法推測編號 7 是哪一種滿意或不滿意。
![IMG_20260407_201536|623](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/IMG_20260407_201536.jpg)
<center><font color="#646a73">k=3 時的 KNN</font></center>
若 k=3，或在不滿意的個數較多，因此可以推測編號 7 歸類為不滿意。
==k 值的設定一般是以奇數為原則，避免兩類別距離相同難以分類==

#### K-平均演算法
<font color="#ff0000">K-平均演算法(k-means clustering)</font>屬於 <u>clustering</u> algorithm 。
步驟：
1. 假設 k=2，即分為兩群
2. 計算各群集的重心
3. 根據分群重心，判斷各點是否需要重新再分群
![分類分群、監督式學習、演算法_K-平均演算法|616](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/分類分群、監督式學習、演算法_K-平均演算法.jpg)
<center><font color="#646a73">判斷樣本點是否需重新分群</font></center>
# 02 基本的神經網路架構
## 2-1 神經網路是 AI 的重要技術
如果輸入有三個 variables，輸出有兩個 variables，就代表輸入是三維，輸出是二維。可以用和多不同的方法學習這個 function，例如 <font color="#ff 0000">迴歸分析(regression analysis)</font> 或 ML 的 <font color="#ff0000">神經網路(neural network)</font>。
> [!question] 迴歸分析
> 迴歸分析是一種分析數據的方法，目的是要了解 <u>2 個或多個</u> variables 之間是否**相關**、**相關方向**與**強度如何**，並建立數學模型來觀察特定的 variable
- - -
> [!question] 人工神經網路
> <font color="#ff 0000">人工神經網路(artificial neural networks, ANN)</font> 希望透過模仿生物神經網路的運作方式，讓電腦具備**學習**、**記憶**及**推理判斷**的能力

==最基本的模型中有三個階級==，分別是*輸入層*、*隱藏層* 及 *輸出層*。

| <center><b>輸入層</b></center> | <center><b>隱藏層</b></center> | <center><b>輸出層</b></center> |
| --------------------------- | --------------------------- | --------------------------- |
| 接受刺激，往後傳遞                   | <u>處理資料</u>，往後傳遞            | 做出反應 / 得出結果                 |
![NN_基本架構_|491](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/NN_基本架構_.jpg)
<center><font color="#646a73">基本的深度學習模型(函數學習機)</font></center>
NN 相比 regression 有很大的好處是，它不需要知道 original function & 假設，all you need to decide is：
1. 幾個神經元(neuron) per 隱藏層(first dimension)
2. 幾個*隱藏層* (second dimension)
Of course, 不只這些，還有 <font color="#ff 0000">激活函數(activation function)</font>、學習方式等等。

- - -
Notice! 每一層和下一層是“完全”連結的，這樣的 NN 稱為 <font color="#ff 0000">全連結神經網路(fully connected NN)</font>，也稱為標準 NN。
NN 在收到 inputs 時，會由輸入層開始，一層層傳遞下去，這麼叫做 <font color="#ff0000">前饋神經網路(Feedforward NN)</font>。
### 神經元的運作方式
神經元有個特色，接受的刺激有很多，且每個刺激可能不一樣，但傳到下層的每個神經元皆是“完全同樣”的刺激。

![NN_基本架構__1|473](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/NN_基本架構__1.jpg)
若要呈現每個神經元重要性的不同，需要引入代表權重的 $w_i$ 。例如
$$
w_1x_1 + w_2x_2 + w_3x_3 = \sum^3_{i=1} w_ix_i
$$
Generally speaking, 神經元有些會傳遞，有些不會，為了讓所有的神經元都能被激發，總刺激會再加上一個 <font color="#ff 0000">偏值(bias)</font> $b_i$ 作為調整
$$
\sum^3_{i=1} w_ix_i + b_i
$$
如果不加上 $b_i$ 這個 NN 出來的 function or 結果 must be linear ，而現實中很多 solution 都不是 linear，因此需要賦予一個 bias。
最後輸出的總值介於 0~1。

## 2-2 神經網絡的學習原理
輸出結果與正確答案的差距，可以用 <font color="#ff 0000">損失函數(loss function)</font> 來計算，以 $L$ 表示。==任務是找到一組參數使 L minimize。==
設 $w$ 的起始值為 a，如果要調整 $w$ 來減小 $L$ ，
>  切線斜率 $L'(a) < 0$ ，$w$ 往正向移動，調整為 $a - L'(a)$；
>  切線斜率 $L'(b) > 0$ ，$w$ 往負向移動，調整為 $b - L'(b)$

但有時會跳過頭，反而使得 $L$ 變大，於是為了微調，將調整大小乘上 $r$
$$
w \longrightarrow w - rL'(w)
$$
這個 $r$ 稱為 <font color="#ff 0000">學習速率(learning rate)</font>
- - -
設現在有 $w_1, w_2, b_1$ 三個參數要調整
$$
L(w_1, w_2, b_1) = (2w_1 - 3w_2 + b_1)^2
$$
Variable sets 太多了，其一方法可解決，便是一次只看一個 variable，其他的先合理假設數值。最終將調整方式彙整：
$$
\begin{gather*}
w_1 \longrightarrow w_1 - rL'_1(w_1)\\
w_2 \longrightarrow w_2 - rL'_2(w_2)\\
b_1 \longrightarrow b_1 - rL'_3(b_1)\\\\

\downarrow \\\\

\begin{bmatrix}
w_1 \\ w_2 \\ b_1
\end{bmatrix}
\longrightarrow
\begin{bmatrix}
w_1 \\ w_2 \\ b_1
\end{bmatrix}
- r \begin{bmatrix}
L'_1(w_1) \\ L'_2(w_2) \\ L'_3(b_1)
\end{bmatrix} \\
\qquad\qquad\qquad\qquad\quad \underline{\nabla{L}}
\end{gather*}
$$
其中 $\nabla{L}$ 稱為 <font color="#ff 0000">梯度(gradient, grade + ent)</font>，像是<u>在比較陡峭的地方往下走，移動一步高度便急速下降，於是說這裡的梯度較大</u>。
如果要讓 $L$ minimize，要往梯度的反方向走，稱為 <font color="#ff 0000">梯度下降法(gradient descent)</font>。由於調整 variable 的 sequence 是從後面一層層往前調，於是又稱 <font color="#ff 0000">反向傳播法(backpropagation)</font>

## 2-3 神經網路的三大天王
神經網路的世界主要由三大架構所組成，分別是標準 NN (全連結神經網路)、CNN 與 RNN。
而我們常聽到的 <font color="#ff 0000">深度學習(deep learning)</font>，本質上是指隱藏層層數在 3 層以上的網路架構。
這「三大天王」各具特色與擅長領域，因此在實際應用中，為了因應不同需求而混用多種 NN 也是非常普遍的做法。
> [!quote] 標準 NN
> 是萬用(Multi-purpose)工具，但也因為太萬用，在各項表現上都不算出色。
- - -
> [!quote] 卷積神經網路 CNN(Convolutional NN)
>  CNN 最適合處理輸入是照片 or 影片的問題
- - -
> [!quote] 遞歸神經網路 RNN(Recurrent NN)
> Generally speaking, NN 不會記得上次的 input，但如果需要「記憶」，便用得上 RNN。

## 2-4 圖像識別天王：卷積神經網路 CNN
CNN 現在的結構與 training method，主要由楊立昆(Yang LeeCun) 奠下基礎，稱其為 CNN 之父。
CNN 包括兩個特別形式的層：<font color="#ff 0000">卷基層(Convolution layer)</font>、<font color="#ff 0000">池化層(pooling layer)</font>。

### 卷積層
為 CNN 最重要的核心，==本質是一堆過濾器 (filter) 去看照片中的某些 feature，然後把 feature 強度 (intensity) 記錄在一張計分板上==

### 池化層
由於計分板 per filter 的大小通常為 128×128，filters 多起來資料會很龐大，且也沒必要對像素逐一檢驗。於是池化層==負責規劃計分板的「選區」，並根據一定規則(e.g. 取最大、取平均)來在每個選區內取代表值==。In other word, 其實就是「投票」。
![603](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/%20卷積神經網絡%20CNN_池化層.jpg)
> [!note]
> 取最大值是 most common method，稱作最大池化層 (max pooling layer)

![ 卷積神經網絡 CNN_池化層_1](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/%20卷積神經網絡%20CNN_池化層_1.jpg)
<center><font color="#646a73">完整的 CNN 架構範例</font></center>

## 2-5 有記憶的遞歸神經網路 RNN
它會把每一次輸入所產生的這狀態都記錄一些結果，並暫存在記憶空間裡，稱作 <font color="#ff0000">隱藏狀態(hidden state)</font>，再跟著下次輸入一起輸出。
![遞歸神經網路_RNN_|263](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/遞歸神經網路_RNN_.jpg)
![遞歸神經網路_RNN__1|711](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/遞歸神經網路_RNN__1.jpg)

# 03 圖像識別
## 3-1 電腦眼中的圖像
如果我們用不同的數字來表示不同的顏色，則一張圖像可轉換成由數字組成的 <font color="#ff 0000">矩陣(matrix)</font>，一個數字 0~255 代表一種灰度。

## 3-2 空間濾波
<u>在卷基層</u>會透過一些預處理程序(pre-procedsing)，讓電腦進行更有效的學習，而這種預處理程序其中一項便是 <font color="#ff 0000">空間濾波器(spatial filtering)</font>。
### 空間濾波器的基本原理
透過濾波器 與 原圖像進行 <font color="#ff 0000">卷積運算(Convolution)</font>。濾波器通常是一個方形，又稱為 <font color="#ff 0000">遮罩(mask)</font> or <font color="#ff 0000">核心(kernal)</font>。

### 卷積運算
基本上是重複「移動-對齊-計算乘積和」的步驟。以下是 one dimension example: 
#### 第一步 短向量對齊長向量，並進行第一次乘積合
![](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/master/IMG_20260428_144235.jpg)

#### 第二步 短向量移動 (stride)，並作第二次乘積和

^d09c7e

![IMG_20260428_144500](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/master/IMG_20260428_144500.jpg)

現在換成 two dimension，移動方向分成橫向和縱向。
![IMG_20260428_144812|782](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/master/IMG_20260428_144812.jpg)
可以發現卷積結果通常比原向量小。某些情況需要卷積後的結果跟原向量大小一致，會在原向量周圍補上 0 (zero-padding)。

### 認識濾波器
#### 平滑濾波器(Smoothing Filter)
最主要的用途是 <font color="#ff 0000">模糊化(blurring)</font> 以及 <font color="#ff 0000">減少雜訊(noise reduction)</font> but 效果不好。又名平均濾波器，分成 權重(weighted) 和 非權重(unweighted)。

#### 中值濾波器(Median Filter)
常用來減少雜訊。Literally, 取的是中位數(Median)而非平均值(Mean)。由於雜訊通常是跟圖片比較不相關，與周圍像素差異大，取中位數不易受影響，相反，取平均值易受極端值影響。
![IMG_20260428_150421|599](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/master/IMG_20260428_150421.jpg)

#### 索伯濾波器(Sobel Filter)
也稱作 <font color="#ff 0000">索伯運算子(Sobel operater)</font>，功能在於==邊緣檢測==。分為兩個方向的邊緣檢測，==數學意義是透過離散性差分運算來計算圖像亮度之梯度==。
$$
\begin{gather*}
\begin{array}{|c|c|c|} \hline
-1 & 0 & +1 \\ \hline
-2 & 0 & +2 \\ \hline
-1 & 0 & +1 \\ \hline
\end{array}
\qquad
\begin{array}{|c|c|c|} \hline
+1 & +2 & +1 \\ \hline
0 & 0 & 0 \\ \hline
-1 & -2 & -1 \\ \hline
\end{array} \\
G_x \qquad\qquad\qquad\quad G_y
\end{gather*}
$$
所謂的<u>梯度計算</u>，可以看成是將右側(+1,+2,+1) 減掉左側 (-1,-2,-1) ，而由於物體邊緣通常會有明顯的亮暗分界，透過梯度計算，可以==更加凸顯邊緣==。
![IMG_20260428_203922|475](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/master/IMG_20260428_203922.jpg)

## 3-3 深度學習物件辨識
由一個輸入層、<u>多個隱藏層</u>以及一個輸出層，即為 <font color="#ff 0000">深度神經網絡(Deep Neural Network, DNN)</font>。
每一次訓練要更動的參數量 very large，運算上也特別耗資源，因此為了簡化而衍生出 [[#2-4 圖像識別天王：卷積神經網路 CNN|卷積神機網絡(CNN)]]。
CNN 中 neural units 不會完全與上下層連結，而是利用卷積核(Convolution kernal)，找出 feature 以 <u>凸顯</u> 資料向下傳遞。

以 AlexNet 為例：
![](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/3-3_深度學習物件辨識─【Highlight】人工智慧導論.jpg)
### The structure of DLModel
#### 卷積層(Convolution layer)
input 進來的圖片可轉成 RGB 三個通道的 matrix 表示法，然後以卷積核為基本單位，進行卷積運算。
output 出來的矩陣可視為一種圖片，稱作 <font color="#ff0000">特徵圖(feature map)</font>。

#### 池化層(Pooling layer)
一張 feature 突出的圖片在經過卷積層處理過後，部分 neural units 會變得過度活躍， 影響計算量。
因此在 n 個卷積層中，間隔幾個池化層，以==壓縮== feature map，只留下 main feature 以==降低計算複雜度==。
Fundamentally, 池化層有兩種，平均池化層 和 最大池化層。

#### 全連接層(Fully-connected layer)
不同於卷積層，經過全連接層計算的值==不會==受到學習到 the location of feature 的影響。

output 出來的矩陣可視為一種圖片，稱作 <font color="#ff0000">特徵圖(feature map)</font>。
實務上，會先將 feature map 的矩陣數據 <font color="#ff0000">扁平化(Flattening)</font>，即轉成一維數據，在丟入全連接層並利用卷積運算來調整 weight table 裡每個特徵的權重，這個權重數值稱為 Logits。
![全連接層(Fully-connected_layer)─【Highlight】人工智慧導論|458](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/全連接層(Fully-connected_layer)─【Highlight】人工智慧導論.png)
- - -
全連接層有參數量龐大的問題，所以通常只會在卷積層後加入，對 feature vectors 作最後的整合。

#### 激活層(activation layer)
包括卷積層、池化層、全連接層，Output 皆屬於 Linear function，而 Linear system 具備 <font color="#ff0000">疊加性質(Superpositon property)</font>，只要運算都是 linear，最後的 Output 一定是 linear combination，那其實與全連接層的 computing effect 差不多。
於是必須加入激活層這樣的 [[#神經元的運作方式|Nonlinear function]]，來突破運算效果。
##### Sigmoid(S function)
$$
s(x)=\dfrac{1}{{1+e^{-x}}}
$$
![Sigmoid(S_function)─【Highlight】人工智慧導論|417](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/Sigmoid(S_function)─【Highlight】人工智慧導論.jpg)
features: y-intercept = 0.5，+x 方向漸進 y=1，-x 方向漸進 y=0

##### tanh(雙曲正切 function, hyperbolic tangent)
$$
\tanh{x} = \dfrac{\sinh{x}}{\cosh{x}} = \dfrac{e^x-e^{-x}}{e^x+e^{-x}}
$$
![tanh(雙曲正切_function,_hyperbolic_tangent)─【Highlight】人工智慧導論|418](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/tanh(雙曲正切_function,_hyperbolic_tangent)─【Highlight】人工智慧導論.jpg)

features: y-intercept = 0，+x 方向漸進 y=1，-x 方向漸進 y=-1

##### ReLF(線性整流 function, Rectified-Linear)
$$
f(x) = \max(x, 0)
$$
![ReLF(線性整流_function,_Rectified-Linear)─【Highlight】人工智慧導論|418](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/ReLF(線性整流_function,_Rectified-Linear)─【Highlight】人工智慧導論.jpg)

features: 類比  $\begin{cases} y = x \space (x \geq 0) \\ y = 0 \space (x < 0) \end{cases}$ ，作用是將所有 $<0$ 的數值調整為 0，是最常被使用的 activation function

#### 標準化指數層 (Softmax)
為了讓 neural 的 output 皆是介於 0~1 的機率數值，標準化指數層會位於最終的 **<u>輸出層</u>** 來執行這個標準化的過程。
輸出層就像是分類器，每個 neural unit 代表物件的類型。
標準化機率公式：
$$
P_{i} = \dfrac{e^{z_{j}}}{\sum e^{z_{j}}}
$$

### DLM 的訓練與問題
訓練一個模型需將現有 database 分成三個部分：訓練集(training)、驗證集(validation)、測試集(testing)
訓練集負責==提供模型學習，去調整內部參數==；驗證集去==調整細部結構，e.g. neural 個數==；測試集負責檢驗效果
> [!quote] 比喻 Metaphor
> 訓練集如同教科書，驗證集像是模擬考，測試集則是決定最終成果的考試
- - -
> [!info] 補充
> ImageNet 數據集是目前圖像辨識最大且最完整的免費 database，實務上也常常利用其訓練分類器
> 連結： http://image-net.org

但有時需要覆蓋更多應用範圍時，常面臨資料不足，此時便會遇到 [[#模型訓練|overfitting]] 的問題。
Solutions of overfitting usually 有兩種：
1. 增加 data
2. 降低 DLM 的複雜度
> [!info] 資料增強 (data augmentation)
> 是一種增加 data 的 method，會將現有的圖片 rotation、scaling, even 改變色溫、brightness 等等，來讓現有圖片看起來不太一樣。

另外，也可以是時加入 <font color="#ff0000">丟棄(dropout)</font> 機制，隨機停下某些 neurals，避免 Model 利用複雜結構死背訓練集中的答案。

## 3-4 圖像識別的應用
### 企業資料庫
一家保全系統公司，每天有數十萬張的影像透過監視器回傳到雲端資料庫。現在若為了篩選出異常的部分，並實時(real-time)提醒客戶，圖像是別的速率便很重要。
其中高影格速率(high-frame-rate, HFR)視覺系統為一例，其識別速度高達 12000 FPS。

### 互動式行銷
透過蒐集人們每天瀏覽的視覺素材，決定要向哪些人送出哪些商品的廣告，以得到最佳的 <font color="#ff0000">廣告轉化率(conversion rate)</font>，這種 action 稱為 <font color="#ff0000">分析用戶生成內容(user-generated contents, UGC)</font>。
> [!info] 補充
> $\text{廣告轉化率} = \dfrac{\text{成功轉化的廣告次數}}{\text{點擊廣告(not 發送廣告)的總人數}} \times 100\%$

If we go furtuer，分析使用者的情緒表情、動作手勢，以及對於時尚穿搭 or 彩妝美容的喜好程度，這稱為 <font color="#ff0000">用戶策寫(user profiling)</font>

## 3-5 本張小節
現代許多企業積極 develop <font color="#ff0000">資料策略(data strategy)</font>，更出現了 <font color="#ff0000">資料長(CDO)</font> and <font color="#ff0000">AI長(CAIO)</font>。

# 04 影像識別
## 4-1 從圖像到影像
Video 會以再取樣的方式處理。根據不同 length，應用的 <font color="#ff0000">再取樣率(sampling rate)</font> 也不同：若對同一段一名男性揮手的 video 取樣，<u>高取樣率</u>仍可看出男性揮手的動作，但<u>低取樣率</u>則只能看出男性舉手。

## 4-2 動作估計
### 基本定義
<font color="#ff0000">動作估計(motion estimation)</font> 是提取重要影像資訊的 most commonly used method，除用於 <font color="#ff0000">影像壓(video compression)</font> 外，也用於影像識別。
動作估計的目的在<mark style="background:#fff88f">估測<u>像素</u>、<u>區塊</u> or<u> 物件</u>隨時間在空間中的位置變化</mark>。 
其中的水平與垂直位移量稱為 <font color="#ff0000">動作向量(motion vector)</font>。

規模尚可分為物件、區塊層級。
![基本定義─【Highlight】人工智慧導論|470](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/基本定義─【Highlight】人工智慧導論.jpg)
動作估計對移動物體有 3 項假設：
1. $\Delta X$ isn't large
2. 物體沒有 $\Delta \text{color}$
3. 物體沒有 $\Delta \text{shape}$

### 誤差估算
1. 將第 t 幀與第 (t+1) 幀分別分割成 m×n 個 d×d 大小的區塊
2. 列舉每個區塊的陣列(array)數值 $\Delta$ 和
3. 比較出 $\Delta$ 和最小的區塊
最終資料量會只有原始的 $\dfrac{1}{d \times d} \times \dfrac{2}{3}(\text{RGB轉vector降維})$

### Thinking
區塊大小↗/↘，compress 效果↗/↗，辨識顯著度↘/↗(but 極端↘)
![Thinking─【Highlight】人工智慧導論|470](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/Thinking─【Highlight】人工智慧導論.png)

## 4-3 深度學習物體追蹤
<font color="#ff0000">物體追蹤(object tracking)</font> 目的在於==找到該物體的移動軌跡==。利用 [[#3-3 深度學習物件辨識|DNN]] or [[#2-4 圖像識別天王：卷積神經網路 CNN|CNN]] 並仿造 [[#4-2 動作估計|動作估計]] 的做法以實現。
但不一樣的是不再用<u>最小值</u>而是用<u>閾值</u>來辨認追蹤的物體。
### 物體的縮放問題
在空間中，物體的遠近會影響畫面上的大小。
Solution is 
1. 利用 [[#2-4 圖像識別天王：卷積神經網路 CNN|CNN]] 將 image 轉成 [[#The structure of DLModel|feature map]]
2. 裁切出對應追蹤物體的 part，大的物體得到大的 [[#The structure of DLModel|feature map]]，小的物體得到小的
3. 最後用等比例分割，將同個分割區塊內的數值 average，變得到相同大小的特徵表示。
![物體的縮放問題─【Highlight】人工智慧導論|553](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/物體的縮放問題─【Highlight】人工智慧導論.jpg)
![物體的縮放問題─【Highlight】人工智慧導論_1|456](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/物體的縮放問題─【Highlight】人工智慧導論_1.jpg)

## 4-4 行為識別
### 行為識別的難題
<font color="#ff0000">行為識別(action recognition)</font> 相較 [[#03 圖像識別|圖像識別]] 有許多難題：
#### 難題一：外界因素對線索採集的干擾
諸如取像方位、光線、角度皆會干擾對行為識別有用的線索
而 [[#3-3 深度學習物件辨識|DNN]] 具有極高的<font color="#ff0000">強健性(robustness)</font>，能針對問題本身提取更具鑑別性的特徵。

> [!info] 強健性
> 指一個 system 面對錯誤 or errors 時，繼續正常執行的能力，這是在極端情況下生存的關鍵

^robustness

#### 難題二：同一類別內的巨大差異性
不同個體再進行相同行為時可能有極大分歧，例如蛋炒飯是先炒蛋還是先炒飯?
但若仔細分析，無論何種方法皆需"炒"這個動作，也就是說解決問題的 key 在於==找出完成一個行為必經的步驟==。

#### 難題三：不同類別具有相同特徵
Generally speaking，取樣率與識別正確率成正相關，但也與計算量成正相關。
回看蛋炒飯，雖然步驟繁雜，但參與行為的實體只有蛋、飯、鍋、鏟，所以可以：
1. 用**低**取樣率取得所有實體的資訊
2. 用**高**取樣率 [[#4-2 動作估計|動作估測]]
來有效識別影像中的行為。

#### 難題四：存在無關聯之物體
一段行為的影像中，除了必要的角色，也有伴隨的場景，以及許多無關緊要的事物。
因此具有篩選影像重要資訊的技術，便能勉受無關聯物體之影響。

### 基於 DNN 的行為識別系統架構
![基於_DNN_的行為識別系統架構─【Highlight】人工智慧導論|496](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/基於_DNN_的行為識別系統架構─【Highlight】人工智慧導論.jpg)
1. 對原始影像與動作資訊 resample (原始影像可用 lower sample rate)
2. 將取樣後內容輸入 [[#3-3 深度學習物件辨識|DNN]] 以提取 [[#^robustness|強健性]] 特徵
3. 經分類器取得行為識別的結果(，搭配 <font color="#ff0000">注意力機制(attention mechanism)</font> 篩選資訊以獲取更好的效果)

> [!info] 注意力機制
> 相當於 <font color="#ff0000">遮罩(mask)</font>，只讓重要的資訊參與識別流程。
> 而遮罩的 computing 是用兩組<u>同等大小</u>的 <font color="#ff0000">張量(tensor)</font> 於對應位置做點對點的相乘。
> ![基於_DNN_的行為識別系統架構─【Highlight】人工智慧導論_1|500](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/基於_DNN_的行為識別系統架構─【Highlight】人工智慧導論_1.jpg)
> 對運動類影像，可以用動作資訊當作 mask。另外，[[#3-3 深度學習物件辨識|DNN]] 具有逐步提取特徵之特性，於是有可逐步提取 mask

### 再採樣策略
對跳遠的動作識別可能有 4 種描述，對應 4 種策略：
#### 單影格行為識別
有人在跳遠場
(擷取<u>單影格</u>後 resample，through [[#3-3 深度學習物件辨識|DNN]] 做出行為識別)
![單影格行為識別─【Highlight】人工智慧導論|475](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/單影格行為識別─【Highlight】人工智慧導論.jpg)

#### 多影格延遲混合行為識別
有人在跳遠場起跑點 → 在跑道上 → 踩上起跳板 → 站在沙坑
(擷取<u>多個影格</u>後針對<u>每一個</u>影格 resample，並<u>各自</u> through [[#3-3 深度學習物件辨識|DNN]] 得到結論，綜合做出行為識別)
![多影格延遲混合行為識別─【Highlight】人工智慧導論|475](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/多影格延遲混合行為識別─【Highlight】人工智慧導論.jpg)

#### 多影格早期混合行為識別
看完整部影像
(擷取<u>多影格</u>，<u>直接</u> through [[#3-3 深度學習物件辨識|DNN]] 做出行為識別)
![多影格早期混合行為識別─【Highlight】人工智慧導論|475](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/多影格早期混合行為識別─【Highlight】人工智慧導論.jpg)

#### 多影格緩慢行為識別
有人在跳遠場助跑 → 起跳 → 落地
(擷取<u>多影格</u>兩兩分組 resample，<u>各組各自</u> through [[#3-3 深度學習物件辨識|DNN]] 判別，綜合做出行為識別)
![多影格緩慢行為識別─【Highlight】人工智慧導論|475](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/多影格緩慢行為識別─【Highlight】人工智慧導論.jpg)

#### 策略選擇
在 [[#難題三：不同類別具有相同特徵|難題三]] 提到過，"動作資訊"的 sample rate must be high，"原始影像"的 can tolerate a lower rate.
Therefore，原始影像可踩(a)和(b)，而動作資訊則使用(c)和(d)。

# 05 語音識別
## 5-1 音訊的基本介紹
若要將音訊轉成數位格式的電子檔，must 指定以下 3 種 parameters：
### 取樣率 (sample rate)
決定在 1 second 內的取樣點數，以 Hz 為單位。
取樣率↗，音訊品質↗，<mark style="background:#ff4d4f">儲存佔用↗</mark>
常見的取樣率有：
1. 8 kHz：用於一般電話通信
2. 16 kHz：用於語音識別
3. 44.1 kHz：用於音樂 CD

### 位元解析度 (bit resolution)
代表每個取樣點所需的 <font color="#ff0000">位元(bits)</font> 數，常用的是 8 or 16 個 bits。
位元數↗，音訊品質↗，<mark style="background:#ff4d4f">儲存佔用↗</mark>

### 聲道數 (number of channels)
一般是 <font color="#ff0000">單聲道(mono)</font> or <font color="#ff0000">雙聲道(stereo, 又稱立體聲)</font>

## 5-2 音訊的基本聲學特徵
### 聲學特徵
為了分析音訊，會將其切成比較短的單位，即 <font color="#ff0000">音框(frame)</font>。一個 frame 必包含數個 <font color="#ff0000">基本週期(fundmental period)</font>，從中提取 <font color="#ff0000">聲學特徵(acoustic features)</font>。通常 frame 和 frame 之間可以重疊(overlapping)，而每秒出現的 number of frames 稱為 <font color="#ff0000">音框率(frame rate)</font>，
frame rate↗，computing occupancy↗
依據人耳來說，聲學特徵主要有三項：
> [!important] 音量(volume)
> 代表音訊的 <font color="#ff0000">強度(intensity)</font> or <font color="#ff0000">能量(energy)</font>，單位是<font color="#ff0000">分貝(decibel, dB)</font>
- - -
> [!important] 音高(pitch)
> 以每秒的<u>基本週期個數</u>代表音高
- - -
> [!important] 音色(timbre)
> 以音訊在<u>不同頻率的能量分佈</u>代表音色

### 計算基本頻率
![計算基本頻率─【Highlight】人工智慧導論|500](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/計算基本頻率─【Highlight】人工智慧導論.jpg)
以音叉的錄音為例，取樣頻率為 16 kHz。
1. 切出一段音框，長度是 256 個取樣點
2. 使用觀察法，發現音框內有 6 個基本週期，始於 7，終於 226。一個基本週期長度是 $$ (226-7) \div 6 = 36.5 \ \text{點}$$
3. 基本頻率為 $$ 16000 \div 36.5 = 438.36\ \text{Hz} $$
- - -
由於人耳感知聲音高低的 feeling $\propto \log_{2}(freq)$，因此常用 <font color="#ff0000">半音高(semitone)</font> 表示音高。公式如下： 
$$
pitch = 69 + 12\log_{2}(\dfrac{freq}{440})
$$
不同 pitch value 都有對應的 MIDI number，對應鋼琴的琴鍵。

### 音色識別
through <font color="#ff0000">快速傅立葉變換(fast Fourier transform, FFT)</font> 將 frame 的訊號轉成 <font color="#ff0000">幅度頻譜(magnitude spectrum)</font>
但幅度頻譜 prone to being affected by pitch 而有 <font color="#ff0000">諧波(hormonics)</font>，因此可以用另一音色特徵 <font color="#ff0000">MFCC(mel-frequency cepstral coefficient, 梅爾倒頻譜係數)</font>，可以較不受諧波影響。
![音色識別─【Highlight】人工智慧導論|500](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/音色識別─【Highlight】人工智慧導論.jpg)

> [!info] 傅立葉轉換(FT)
> 一種線性轉換。基本思想是一個函數可用無窮個週期函數的線性組合來逼近，進而反應該函數的「頻域特徵」
> ![5-1_音訊的基本介紹─【Highlight】人工智慧導論](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/5-1_音訊的基本介紹─【Highlight】人工智慧導論.gif)
> 而 FFT 則從 <font color="#ff0000">離散傅立葉轉換(DFT)</font> 簡化而來，使其複雜度從 $O(n^2)$ 降低到 $O(n \log n)$。
> ![5-1_音訊的基本介紹─【Highlight】人工智慧導論|325](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/5-1_音訊的基本介紹─【Highlight】人工智慧導論.png)
> <font color="#7f7f7f">DFT 雖更精確地再現了峰值和頻率，代價是速度慢了上千倍。</font>

## 5-3 語音識別
### 應用分類
#### 根據使用者
- <font color="#ff0000">語者相關(speaker dependent)</font>：只限特定人士
- <font color="#ff0000">語者獨立(speaker independent)</font>：通用於一般人士

#### 根據功能
依難度區分如下：
1. <font color="#ff0000">語者命令(voice command)</font>：根據一句語音，從有限集合中找出最有可能的命令並執行
2. <font color="#ff0000">關鍵詞偵測(keyword spotting)</font>：根據一句語音，偵測是否含有特定內容
3. <font color="#ff0000">聽寫(dictation)</font>：根據一段語音，產出對應逐字稿
4. <font color="#ff0000">對話(dialog)</font>：和電腦直接對話，電腦能瞭解使用者的 <font color="#ff0000">意圖(intention)</font>，並以語音或文字回覆，也就是 <font color="#ff0000">聊天機器人(chatbot)</font>

### 語者相關
最基本是用 <font color="#ff0000">動態時間扭曲(dynamic time warping, DTW)</font> 來比對。這是基於 <font color="#ff0000">動態規劃(dynamic programming, DP)</font> 的方法，可以根據音色比對，同時針對不同語速進行局部伸縮，以達 best <font color="#ff0000">對位(alignment)</font> 效果。
若要 bulid「<u>語者相關</u>的<u>語音命令</u>識別系統」，
1. 預錄一組語音命令
2. 發出測試語音時，進行 <font color="#ff0000">端點偵測(endpoint detection)</font> 並計算 MFCC 
3. 將兩組語音的 MFCC 進行 DTW 比對，距離 shortest 的語音命令即為解

### 語者獨立
此類 system 需要較複雜的聲學模型，並算出語音特徵的 MFCC 向量所對應的 <font color="#ff0000">機率密度(probability density, PD)</font>
#### 高斯混合模型 GMM
欲求出 PD 所用之函數稱為 <font color="#ff0000">機率密度函數(probability density function, PDF)</font>，而最常用的 PDF 便是 <font color="#ff0000">高斯混合模型(Gaussian mixture models, GMM)</font>，由一組 高斯機率密度函數(Gaussian PDF) 的加權平均所組成。
根據 <font color="#ff0000">最大似然率估測法(maximum likelihood estimate, MLE)</font>，可以給定一組 MFCC 向量來求得 GMM 的 best parameters，包含 <font color="#ff0000">平均向量(mean vector)</font> 和 <font color="#ff0000">共變異矩陣(covariance matrix)</font>，以及 <font color="#ff0000">加權權重(weighting factors)</font>。
> [!info] PD 誤差
> 在實際運算中，常要對 PDF 算出的==PD 進行連乘，但機率介於 0~1，導致越乘越小==產生誤差。
> 為避免誤差，常對 PD 取 log，並將「連乘」改「連加」，以達類似效果。
> 
> 此外，似然率和機率概念相似，皆代表可能性

##### 示例

| ![示例─【Highlight】人工智慧導論](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/示例─【Highlight】人工智慧導論.jpg) | ![示例─【Highlight】人工智慧導論_5](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/示例─【Highlight】人工智慧導論_5.jpg) |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
<center><font color="#7f7f7f">使用高斯 PDF 及 GMM PDF 對一維(1-D)資料建模</font></center>

| ![示例─【Highlight】人工智慧導論_1](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/示例─【Highlight】人工智慧導論_1.jpg) <br>![示例─【Highlight】人工智慧導論_2](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/示例─【Highlight】人工智慧導論_2.jpg) | ![示例─【Highlight】人工智慧導論_3](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/示例─【Highlight】人工智慧導論_3.jpg) <br>![示例─【Highlight】人工智慧導論_4](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/示例─【Highlight】人工智慧導論_4.jpg) |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
<center><font color="#7f7f7f">使用高斯 PDF 及 GMM PDF 對 2-D 資料建模</font></center>




#### 隱藏式馬可夫模型 HMM
用 GMM 建聲學模型，可以針對單一種固定音色。
但若發音隨時間而變，如母音「ㄞ」，發聲方式由「ㄚ」轉「ㄧ」，則需更精確的模型，如 <font color="#ff0000">隱藏式馬可夫模型(hidden Markov models, HMM)</font>。
此為一個用於描述 <font color="#ff0000">序列(sequence)</font> 的 PDF，每個 HMM 由數個 <font color="#ff0000">狀態(state)</font> 組成，每個狀態皆是一靜態 PDF，而狀態間的轉移可用 <font color="#ff0000">轉移機率(transition probability)</font> 表示。
![隱藏式馬可夫模型_HMM─【Highlight】人工智慧導論|897](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/隱藏式馬可夫模型_HMM─【Highlight】人工智慧導論.jpg)
<center><font color="#7f7f7f">具三個狀態的 HMM 模型</font></center>
若使用 3 個狀態，每個狀態皆由 GMM 代表，則狀態間的轉移可用 3×3 的 <font color="#ff0000">轉移機率矩陣(transition probability matrix, TPM)</font> 代表，而這個聲學模型的 parameters (包含 3 個 GMM states and TPM)，也由 MLE 得出。
由於無法事先得知每個 frame 的 MFCC vector 屬於哪一狀態，因此實務上 must 逐次分配，以達 maximum likelihood，此 method 稱為 <font color="#ff0000">分段式 K-means(segmental k-means)</font>，步驟如下：
1. 對每個<u>語句</u>，使用 DP 分配每個 MFCC vector 至每個 state
2. 對每個 <u>state</u>，根據被分配的 MFCC vector 計算出對應的 GMM best parameters
3. 根據每個 <u>frame</u> 被分配至的 state，計算 TPM
4. 返回步驟一，until all parameters 收斂(converge)
- - -
在實際的識別 system 中，通常會將發音 slice into 更小的基本發音單位，稱為 <font color="#ff0000">音素(phoeme)</font>。
> [!example]
> - 「ㄚ」：a
> - 「ㄞ」：a 和 i (即「ㄚ」和「ㄧ」)
> - 「ㄠ」：a 和 u (即「ㄚ」和「ㄨ」)

為應對不同運算需求，可將 phoeme 再細分各種 input types，以平安(ping-an)為例：
> [!example]
> - <font color="#ff0000">單音素(monophone)</font>：得 p-i-ng-a-n
> - <font color="#ff0000">雙連音素(biphone)</font>：以 <font color="#ff0000">右相關(right-content dependent, RCD)</font> 音素建立模型，得 sil+p, p+i, i+ng, ng+a, a+n, n+sil，其中 sil 代表靜音 silence
> - <font color="#ff0000">三連音素(triphone)</font>：以左右相關音素建立模型，得 sil+p-i, p+i-ng, i+ng-a, ng+a-n, a+n-sil

monophone 的聲模<u>粗略</u>，佔用空間<u>小</u>，且 training rate 及 算力的需求<u>少</u>；biphone 及 triphone 則相反。
以「你好」為例，說明建立 biphone 的 HMM 串接模型步驟：
1. 轉拼音：你好 → ni-hau
2. 轉音素：ni-hao → n_i-h_a_u
3. 轉 biphone：n+i, i+h, h+a, a+u, u+sil
4. 串接成 HMM
![隱藏式馬可夫模型_HMM─【Highlight】人工智慧導論_1|563](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/隱藏式馬可夫模型_HMM─【Highlight】人工智慧導論_1.jpg)
若要實作語音辨識，可以：
5. 將語音轉成 MFCC
6. 送入串接的 HMM
7. 使用 維特比搜尋演算法(Viterbi search, 屬於 [[#語者相關|DP]] 的一種)
8. 得到 maximum likelihood
![隱藏式馬可夫模型_HMM─【Highlight】人工智慧導論_2|601](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/隱藏式馬可夫模型_HMM─【Highlight】人工智慧導論_2.jpg)

#### 語言模型
Furthermore, 可以計算詞與詞串接的可能性，來增強語音識別的準確度，這時便需要 <font color="#ff0000">語言模型(language model)</font>。
語言模型以 n-gram 為主，n-gram 是指 n 個詞串接。
> [!example] 語言模型的 key examples
> - It's hard to recognize speech.
> - It's hard to wrech a nice beach.

In practice, 還會以 <font color="#ff0000">樹(trees)</font> or <font color="#ff0000">圖(graph)</font> 建立更複雜的資料結構，如 <font color="#ff0000">詞格(word latice)</font>
![語言模型─【Highlight】人工智慧導論|587](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/語言模型─【Highlight】人工智慧導論.jpg)

### 補充
在前述之 DNN 不僅可用於 [[#3-3 深度學習物件辨識|圖像辨識]]、[[#基於 DNN 的行為識別系統架構|影像辨識]]，也可用於當前的語音辨識，甚至效果更好，但計算量也更大。
其原理為用 DNN 取代 GMM，讓 GMM-HMM 變為 DNN-HMM 架構，並用 GPU 進行大量平行優化運算。

## 5-4 哼唱選歌
### 基本原理
<font color="#ff0000">哼唱選歌(Query by Singing/Humming, QBSH)</font> 主要的原理是對音訊輸入進行 <font color="#ff0000">音高追蹤(pitch tracking)</font>，產生音高向量(曲線)，也就是時變的音高。
首先，具週期性的波形需仰賴「聲帶」的震動，這種現象只有<u>母音</u>做得到，而==子音 or 氣音是由舌頭和牙齒間的空氣流動產生無規律的波形，也就無基本頻率(音高)==。
![基本原理─【Highlight】人工智慧導論|535](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/基本原理─【Highlight】人工智慧導論.jpg)
### 音高追蹤自動化
在 [[#計算基本頻率|5-2 的計算機本頻率]] 中依賴觀察法，若要自動化，則可用 <font color="#ff0000">自相關函數(auto-correlation function, ACF)</font>，原理是
1. 對同一 frame 反覆進行平移及內積(乘積和)，得出 ACF 曲線
2. 找出 2nd max-y 的 x-value 與原點的間隔及基本週期(單位為 取樣點)
3. 將「取樣率」除以「基本週期」，得出音高(Hz)$$
	\begin{align}
	\text{取樣率} \ \div \ \text{基本週期} &=  \\
	\dfrac{\text{sample dot}}{\text{second}} \times \dfrac{1}{T \text{(sample dot)}} &= \dfrac{\text{次數}}{\text{second}} = freq
	\end{align}
	$$
![音高追蹤自動化─【Highlight】人工智慧導論|598](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/音高追蹤自動化─【Highlight】人工智慧導論.jpg)
when $\tau = 0$ ，波形完全重疊，得 ACF 1st 內積值高點；$\tau$ ↗，$acf(\tau)$ 震盪，直到第一 and 第二週期重疊，得 ACF 2nd 內積值高點。
> [!attention]
> 靜音沒有音高，因此需音量門檻值(可定義為 frame 內的序號平方和)
> ![音高追蹤自動化─【Highlight】人工智慧導論_1|500](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/音高追蹤自動化─【Highlight】人工智慧導論_1.jpg)

### 音高向量 match
在歌曲 and 哼唱輸入皆轉成音高向量後，會利用「距離函數」決定像不像，而計算音高向量的距離需考慮以下問題：
1. 音高基準(key)不一 → <mark style="background:#fff88f">平移至同一 key</mark>
2. 唱歌速度不一 → <mark style="background:#fff88f">假設速度變化均勻(不會忽快忽慢)，可以採用「<font color="#ff0000">線性伸縮(linear scaling, LS)</font>」</mark>
   ![音高向量_match─【Highlight】人工智慧導論|500](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/音高向量_match─【Highlight】人工智慧導論.jpg)
3. 唱歌忽快忽慢 → ==使用運算量更大的 [[#語者相關|DTW]]==
其實，還有很多問題：
#### 1st problem
若同時包含人生及背景音樂，即 <font color="#ff0000">複音音訊音樂(polyphonic audio music)</font>，很難進行 pitch tracking。
在國際音樂訊息檢索學會(ISMIR)有項評比，是 <font color="#ff0000">主旋律抽取(audio melody extraction)</font>，雖每年效能都有增加，但 <font color="#ff0000">原生音高準確度(raw pitch accuracy)</font> 仍不到 85%。顯示人腦仍勝過電腦，但電腦進步神速，追上只是時間問題。

#### 2nd problem
QBSH 的算力需求會隨歌曲數提升而增加，雖增幅小於 Linear，但數量級升到全世界時仍會吃不消。
Solution 有 2 種：一是<u>多 CPU</u> 的 <font color="#ff0000">雲端運算(cloud computing)</font>；二是<u>多核心</u>的 GPU 進行大量的平行運算。

### 音訊應用
#### 醫療
包括腦波(EEG)、心電圖(ECG)、肌電圖(EMG)、體溫、聽診器、呼吸強度、心跳強度，皆是類似音訊的時間序列，可以偵測病患情緒、是否有憂鬱症、失智程度 or 測謊。

#### 音訊事件(audio events)
如甩門、打架、嬰兒哭喊、急煞、救護車鳴笛，可用於判斷相關事件。

#### 製造業
可偵測設備異常事件

# 06 自然語言處理
在這一章，將以「平行時空之師」的概念介紹人工智慧的核心技術—<font color="#ff0000">自然語言處理(Natural Language Processing, NLP)</font> 的基本概念和技術。
## 6-1 平行時空之師
> [!quote] 平行時空之師
> 「問問題」是學習過程中重要的一環，但學生可能因為愛面子、怕問錯問題、在乎同儕的想法而不敢發問。
> 我們希望有個人工智慧幫助學生提起勇氣提問。
> 「平行時空之師」是這樣一個不記名的平台，學生可以利用輸入文字 or 語音提問。其背後是個自然語言處理系統，紀錄曾經的問題、收到讚 or 愛心的次數，以及回應和老師補充後的答案。
> 隨著平行時空之師擁有的資料庫不斷成長，表現也愈厲害。
> 經由龐大的問題-答案資料庫中，找尋過去被回答過的類似問題，而同時有多個類似問題，會依據被點讚或愛心的次數，擁有較高的偏好程度，於是被優先回覆。
> ![6-1_平行時空之師─【Highlight】人工智慧導論|625](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/6-1_平行時空之師─【Highlight】人工智慧導論.jpg)

## 6-2 自然語言處理基本概念
一篇文章有好幾個段落，段落會由一些句子堆砌而成，而句子又由詞彙組成。

### 斷詞處理(for 中文)
中文和英文不同，詞彙間無空白隔開，因此需要斷詞。
<font color="#ff0000">斷詞</font>─也就是決定詞彙的邊界─是中文語言處理系統基本運算之一。
同一個句子會因為不同的詮釋，而產生一個以上的斷詞結果。
$$
\begin{align}
\text{「日文章魚怎麼說\ ?」}
\begin{cases}
\text{「日文\_章魚\_怎麼\_說\ ?」} \\ \\
\text{「日\_文章\_魚\_怎麼\_說\ ?」}
\end{cases}
\end{align}
$$
除了詞彙斷法分歧外，還會經常出現沒有列在辭典中的詞，尤其是人名、地名、譯名最為常見。
<font color="#7f7f7f">「在夫子廟入口的地方，遍布我喜歡的小吃店。」，其中，「夫子廟」是指位於南京的孔廟。錯誤斷詞會拆成「夫子」與「廟」。</font>
> 人類語言是活的，新的詞彙會不斷產生，特別是在社群媒體盛行的資訊時代。
> 因此，未知詞的處理也是一個重要的議題。

目前已有的線上中文斷詞系統，包括 [中央研究院 的 中文斷詞系統](http://ckipsvr.iis.sinica.edu.tw/)、[史丹佛大學的 stanford CoreNLP](http://corenlp.run/)

### 詞性標記
為掌握詞彙的特性，通常會把特性類似的詞彙聚在一起，並給予相同的類別，稱為 <font color="#ff0000">詞性(part of speech, POS)</font>。
<font color="#7f7f7f">名詞 → 生活中的實體<br>動詞 → 動作、狀態<br>形容詞 → 描述名詞的屬性<br>副詞 → 修飾動詞和形容詞<br>介係詞 → 呈現時間、空間、狀態等關係<br>介係詞片語 → 修飾名詞、動詞或子句<br>連接詞 → 連接兩個詞彙、片語或子句。</font>
> [!example]
> 經中央研究院的中文斷詞系統標記詞性，得
> ![斷詞處理(for_中文)─【Highlight】人工智慧導論](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/斷詞處理(for_中文)─【Highlight】人工智慧導論.jpg)
> 
> | <center>簡化標記</center> | <center>對應的詞類標記</center> |
> | ----------------- | ------- |
> | <center>Na</center>                | <center>普通名詞</center> |
> | <center>Ng</center>                | <center>後置詞</center> |
> | <center>VA</center>                | <center>動作不及物動詞</center> |
> | <center>VD</center>                | <center>雙賓動詞</center> |
> | <center>VH</center>                | <center>狀態不及物動詞</center> |
> | <center>Dfa</center>               | <center>動詞前程度副詞</center> |
> | <center>Caa</center>               | <center>對等連接詞</center> |
> | <center>(COMMMONCATEGORY)</center> | <center>逗號</center> |
> | <center>(PERIODCATEGORY)</center>  | <center>句號</center> |

有些詞彙擁有一個以上的的詞性，<font color="#7f7f7f">如「打」有及物動詞(打毛衣)、量詞(一打毛巾)、介詞(您打哪裡來?)</font>
==上下文是幫助解決詞性分歧的重要線索==，<font color="#7f7f7f">舉例來說，量詞的前面接數詞，後面接名詞。</font>
==詞性標記系統的功能是根據上下文將句子裡的每個詞彙標上一個詞性。==

### 詞意消歧
<font color="#ff0000">詞意</font> 就是詞彙的意思。<font color="#7f7f7f">例如「關門」這個詞彙有「把們閉上」、「打烊」和「停業」多種意思。</font>
詞意的產生來自於如何使用那個詞彙，要瞭解某個詞彙的意思，==關鍵在伴隨該詞彙出現的其他詞彙，也就是上下文。==
> [!faq] 補充：電腦如何進行語意選擇
> Question: 電腦如何從一句話的線索判斷語意

### 語法剖析
以上所談的斷詞、詞性和詞意都仍在詞彙的層次。在 NL 自然語言處理上，還需進一步確認哪些詞彙可組合，形成 <font color="#ff0000">成分(constituent)</font>。<font color="#7f7f7f">如名詞片語和動詞片語大多是由哪些詞彙構成。</font>同時也需知道這些成分之間的關係，<font color="#7f7f7f">介係詞片語修飾子句，形容詞描述名詞的屬性。</font>
> [!info] 剖析系統
> 是種分析句子結構的軟體，輸出會是一棵 <font color="#ff0000">剖析樹(parse tree)</font>，呈現成分組成和結構關係。

![斷詞處理(for_中文)─【Highlight】人工智慧導論_1|500](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/斷詞處理(for_中文)─【Highlight】人工智慧導論_1.jpg)
有別於上面所提的樹狀剖析樹，一些應用只需句子中詞彙之間的關係，故有簡化版的 <font color="#ff0000">相依剖析(dependency parsing)</font>。
詞彙和詞彙之間以<u>有向的</u>箭頭鏈結，上方標示兩詞彙的相依關係。
![斷詞處理(for_中文)─【Highlight】人工智慧導論_2|375](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/斷詞處理(for_中文)─【Highlight】人工智慧導論_2.jpg)
> nsubj 表 noun subject，名詞主詞關係；
> dobj 表 direct object，直接受詞關係。

## 6-3 「平行時空之師」的實現
直觀上，可將輸入的問句和資料庫中的逐一比對，計算兩個句子的相似程度，找出最相似的問題─答案配對，並輸出對應答案。
![斷詞處理(for_中文)─【Highlight】人工智慧導論_3|450](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/斷詞處理(for_中文)─【Highlight】人工智慧導論_3.jpg)
而上述步驟牽涉兩個議題：
### 問句與問題如何表示?
在 [[#6-2 自然語言處理基本概念|6-2 提過的 NL 處理技術]] 此時可以運用進來。
![斷詞處理(for_中文)─【Highlight】人工智慧導論_4|575](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/斷詞處理(for_中文)─【Highlight】人工智慧導論_4.jpg)
如圖，根據使用的多寡，有 3 種模式/做法可選：
1. 經過：斷詞
2. 經過：斷詞、詞性標記
3. 經過：斷詞、詞性標記、相依剖析
第 1 種，所找到的詞彙不經過篩選，只擷取出關鍵詞構成問題 <font color="#ff0000">詞袋(bag of words)</font>。
第 2 種，只保留某些詞彙構成問題詞袋。

### 兩個表示如何比較和評分
假設以詞袋來表示問題，接下來以 <font color="#ff0000">雅卡爾係數(Jaccard coefficient)</font>，計算兩個詞袋間的相似度，公式如下：$$
J = (A,B) = \dfrac{|A \cap B|}{|A \cup B|} = \dfrac{|A \cap B|}{|A|+|B|-|A \cap B|}
$$
> [!info]
> ![斷詞處理(for_中文)─【Highlight】人工智慧導論_5|450](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/斷詞處理(for_中文)─【Highlight】人工智慧導論_5.jpg)
> 綠色的 $|A \cap B|$ 區域佔黃色+綠色+橘色區域的比例越高，表示 A 和 B 越接近。雅卡爾係數是介於 0 和 1 之間的實數，最極端的兩個情況是：
> - A 和 B 完全重疊，$A = B$，則 $J(A,B) = 1$
> - A 和 B 完全未交疊，$A \cap B = \varnothing$，則 $J(A,B) = 0$
- - -
> [!example]
> ![斷詞處理(for_中文)─【Highlight】人工智慧導論_6|500](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/斷詞處理(for_中文)─【Highlight】人工智慧導論_6.jpg)
> $Q_{1}$ 的雅卡爾係數：
> $$
\begin{align}
J(\{ \text{釀造, 醬油, 的, 原料} \}, \{ \text{如何, 自己, 製造, 簡易, 醬油} \}) &=  \\
\dfrac{| \{ \text{醬油} \}| }{| \{ \text{釀造, 醬油, 的, 原料} \} | + | \{ \text{如何, 自己, 製造, 簡易, 醬油} \} | - | \{ \text{醬油} \} |} &= \dfrac{1}{8}
\end{align}
> $$
> $Q_{2}$ 的雅卡爾係數：
> $$
\begin{align}
J(\{ \text{釀造, 醬油, 的, 原料} \}, \{ \text{醬油, 起源, 和, 歷史} \}) &=  \\
\dfrac{| \{ \text{醬油} \}| }{| \{ \text{釀造, 醬油, 的, 原料} \} | + | \{ \text{醬油, 起源, 和, 歷史} \} | - | \{ \text{醬油} \} |} &= \dfrac{1}{7}
\end{align}
> $$
> 根據以上兩式計算出來的雅卡爾係數，$Q_{2}$ 的大於 $Q_{1}$ 的。
> 若是依人們解釋，會認為 $Q_{1}$ 比 $Q_{2}$ 接近，因為「釀造」和「製造」的詞意接近。如果將這兩個詞彙視為同義詞，重新計算會得到不同結果：
> $$
\begin{align}
J(\{ \text{釀造, 醬油, 的, 原料} \}, \{ \text{如何, 自己, 製造, 簡易, 醬油} \}) &=  \\
\dfrac{| \{ \text{釀造, 醬油} \}| }{| \{ \text{釀造, 醬油, 的, 原料} \} | + | \{ \text{如何, 自己, 製造, 簡易, 醬油} \} | - | \{ \text{釀造, 醬油} \} |} &= \dfrac{2}{7}
\end{align}
> $$
> 這次，$Q_{1}$ 的雅卡爾係數大於 $Q_{2}$ 的。
> 詞彙的相似程度計算在自然語言處理中很重要，將在 [[#6-5|6-5]] 討論。
> 
> 以 Stanford CoreNLP 檢視，小明的問句以及 $Q_{1}$ 和 $Q_{2}$ 兩個問題的意思，小明問的是釀造醬油過程所需的「原料」，$Q_{1}$ 談的是製造簡易醬油的方法，==隱含著原料是醬油製造過程中所使用的材料。== $Q_{2}$ 的核心是「醬油起源」和「醬油歷史」，明顯地和「原料」不同。
> {圖 6-11}
> - - -
> 這次小明的問句換成「誰創立諾貝爾獎」，和問題─答案資料庫的 $Q_{3}$、$Q_{4}$、$Q_{5}$ 相似度差異不大，都提到「諾貝爾」。於是這次換成和 $A_{3}$、$A_{4}$、$A_{5}$ 計算雅卡爾係數：
> $$
\begin{align}
A_{3}\ 的雅卡爾係數 = J(\{ 誰, 創立, 諾貝爾獎 \}, A_{3}) \\
A_{4}\ 的雅卡爾係數 = J(\{ 誰, 創立, 諾貝爾獎 \}, A_{4}) \\
A_{5}\ 的雅卡爾係數 = J(\{ 誰, 創立, 諾貝爾獎 \}, A_{5})
\end{align}
> $$
> 可以發現，$A_{3}$、$A_{4}$、$A_{5}$ 分別包括 1 個、2 個、2 個句子，以雅卡爾係數的公式來看，在分子相同的情況下，句子長度(即分母)↗，雅卡爾係數↘。這對較長的答案不公平。
> 因此，將問題─答案配對的答案部分以句子為單位分割，$A_{4}$ 和 $A_{5}$ 分別拆成 $A_{4-1}$、$A_{4-2}$ 與 $A_{5-1}$、$A_{5-2}$
> $$
\begin{align}
A_{4-1}\ 的雅卡爾係數 = J(\{ 誰, 創立, 諾貝爾獎 \}, A_{4-1}) \\
A_{4-2}\ 的雅卡爾係數 = J(\{ 誰, 創立, 諾貝爾獎 \}, A_{4-2}) \\
A_{5-1}\ 的雅卡爾係數 = J(\{ 誰, 創立, 諾貝爾獎 \}, A_{5-1}) \\
A_{5-2}\ 的雅卡爾係數 = J(\{ 誰, 創立, 諾貝爾獎 \}, A_{5-2})
\end{align}
> $$
> {圖 6-12}
> {圖 6-13}
> 最後，以


## 6-4

## 6-5