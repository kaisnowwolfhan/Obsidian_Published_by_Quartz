# 01 AI 不過就是問個好問題：認識 AI
## 量化

**别名**：quantification


## 機器學習

**别名**：ML, machine learning


## 模式

**别名**：模型, model


## 參數

**别名**：變數, parameter


## 過擬合

**别名**：overfitting
為了讓結果與數據點無限逼近 100%，導致 function 曲線變化過大


## 訓練資料

**别名**：training data


## 測試資料

**别名**：test data


## 損失函數

**别名**：LF
Loss Function
**數學符號**：$\theta, L$
輸出結果與正確答案的差距


## 分類

**别名**：classification
將未知資訊納入已知標籤，以建立對應的分類模型


## 分群

**别名**：clustering, 聚類
針對無明確分類問題，目標是讓同群中的資料差異越小越好，而不同群之間的差異越大越好


## 特徵

**别名**：feature


## 標籤

**别名**：label


## 監督式學習

**别名**：supervised learning


## 非監督式學習

**别名**：unsupervised learning


## 預測

**别名**：prediction


## 線性分類器

**别名**：linear classifier


## 超平面

**别名**：hyperplane


## 支持向量機

**别名**：SVM, support vector machine
想像成這條線的寬帶同時平行向外延伸，直到分別碰到兩個分類的第一個點為止，來找出最大寬度的寬帶


## 支持向量

**别名**：SV, support vector


## 非線性分類器

**别名**：nonlinear classifier


## 核函數

**别名**：kernel function


## 二元樹

**别名**：binary tree


## 節點

**别名**：node


## 根節點

**别名**：root


## 多元樹

**别名**：N-ary tree


## 決策樹

**别名**：decision tree


## 迭代

**别名**：iteration


## K-最近鄰居法

**别名**：KNN
K-Nearest Neighbor
是<u>監督式</u> ML 中 <u>classification</u> algorithm 的一種。利用樣本點與樣本點之間的特徵距離遠近，去判斷新的資料比較像哪一種。
![分類分群、監督式學習、演算法_KNN|350](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/分類分群、監督式學習、演算法_KNN.jpg)


## K-平均演算法

**别名**：k-means clustering
屬於 <u>分群</u> 演算法
![分類分群、監督式學習、演算法_K-平均演算法|250](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/分類分群、監督式學習、演算法_K-平均演算法.jpg)
K-平均演算法分為四個步驟：
1. **初始化**：將資料正規化，並且隨機選取 K 個資料點作為群中心
2. **分群**：將每個資料點分配給距離群中心最近的群
3. **更新中心**：以*步驟 2* 重新分群後的分群資料，更新新的各群中心
4. **終止**：重複*上述步驟*，直到資料點穩定，不再改變所分配到的群

# 02 基本的神經網路架構
## 迴歸分析

**别名**：regression analysis
目的是要了解 <u>2 個或多個</u> variables 之間是否**相關**、**相關方向**與**強度如何**，並建立數學模型來觀察特定的 variable


## 神經網路

**别名**：NN, neural network
希望透過模仿生物神經網路的運作方式，讓電腦具備**學習**、**記憶**及**推理判斷**的能力

## 人工神經網路

**别名**：ANN, artificial neural networks
希望透過模仿生物神經網路的運作方式，讓電腦具備**學習**、**記憶**及**推理判斷**的能力

## 激活函數

**别名**：activation function


## 全連結神經網路

**别名**：fully connected NN


## 前饋神經網路

**别名**：feedforward NN
由輸入層開始，一層層傳遞下去


## 偏值

**别名**：bias
另 NN 出來的 function 不是 linear


## 學習速率

**别名**：learning rate
神經網路校正的步幅


## 梯度

**别名**：gradient
grade + ent
像是<u>在比較陡峭的地方往下走，移動一步高度便急速下降，於是說這裡的梯度較大</u>


## 梯度下降法

**别名**：反向傳播法, backpropagation, gradient descent
往梯度的反方向走，從後面一層層往前調 variable，讓 $L$ minimize。


## 深度學習

**别名**：DL, DLM, deep learning


## 萬用

**别名**：multi-purpose


## 卷積神經網路

**别名**：CNN, Convolutional NN
現在的結構與 training method，主要由楊立昆(Yang LeeCun) 奠下基礎，稱其為 CNN 之父


## 遞歸神經網路

**别名**：RNN, Recurrent NN


## 卷基層

**别名**：convolution layer


## 池化層

**别名**：pooling layer
負責規劃計分板的「選區」，並根據一定規則(e.g. 取最大、取平均)來在每個選區內取代表值


## 過濾器

**别名**：filter


## 強度

**别名**：intensity


## 最大池化層

**别名**：max pooling layer


## 隱藏狀態

**别名**：hidden state


# 03 圖像識別
## 矩陣

**别名**：matrix


## 預處理

**别名**：preprocessing


## 空間濾波器

**别名**：spatial filtering


## 卷積運算

**别名**：Convolution


## 遮罩

**别名**：mask


## 核心

**别名**：kernal


## zero-padding

在原向量周圍補上 0，另結果跟原向量矩陣大小一致


## 平滑濾波器

**别名**：平均濾波器
Smoothing Filter
最主要的用途是 **模糊化** 以及 **減少雜訊** but 效果不好


## 模糊化

**别名**：blurring


## 減少雜訊

**别名**：noise reduction


## 權重

**别名**：weight, weighted


## 非權重

**别名**：unweighted


## 中位數

**别名**：median


## 平均值

**别名**：mean


## 中值濾波器

**别名**：median filter
常用來減少雜訊


## 索伯濾波器

**别名**：索伯運算子, Sobel operater
Sobel Filter
功能在於邊緣檢測


## 深度神經網絡

**别名**：DNN
Deep Neural Network


## 卷積核

**别名**：convolution kernal


## AlexNet

為一種新創 CNN 架構，於 2012 年度大規模視覺識別挑戰賽 ILSVRC(ImageNet Large Scale Visual Recognition Competition) 獲得冠軍，開創深度學習的另一個世代。


## 卷積層

**别名**：convolution layer
本質是一堆過濾器(即卷積核)去看照片中的某些 feature，然後把 feature 強度記錄在一張計分板上


## 特徵圖

**别名**：feature map


## 全連接層

**别名**：fully-connected layer


## 扁平化

**别名**：flattening
means 轉成一維數據


## 神經元

**别名**：neuron


## 移動

**别名**：位移, stride


## Logit

權重的數值


## 激活層

**别名**：activation layer


## 疊加性質

**别名**：superpositon property


## Sigmoid

**别名**：S function
$$
s(x)=\dfrac{1}{{1+e^{-x}}}
$$
```easy-tikz
{
  "dimension": false,
  "documentSetup": true,
  "title": "",
  "size_x_cm": 10,
  "size_y_cm": 5,
  "show_axis_label": true,
  "axis_label_x": "x",
  "axis_label_y": "y",
  "documentClose": true,
  "showAxis": true,
  "showLargeGrid": true,
  "showSmallGrid": false,
  "gridSize": 5,
  "xmin": "-11",
  "xmax": "11",
  "ymin": "-0.04994",
  "ymax": "1.04994",
  "axis_style": "middle",
  "functions": [
    {
      "expression": "(1)/(1+exp(1)^(-x))",
      "domain": "-10:10",
      "showLegend": false,
      "fill": false,
      "fillOpacity": 0.2,
      "fillPattern": "solid",
      "tangent": false,
      "dashed": false,
      "tangentPoint": "",
      "extrema": false,
      "color": "red",
      "thickness": "thick",
      "parametric": false,
      "expressionY": "",
      "name": "Sigmoid(S function)"
    }
  ],
  "zmin": "-5",
  "zmax": "5",
  "axis_label_z": "z",
  "rotationX": 30,
  "rotationZ": 45,
  "zoom3D": 1,
  "boxAspect": "true",
  "functions3D": [],
  "majorTickNum": 8,
  "previewSize": 760,
  "annotations": [],
  "tools": [],
  "coordinateSystem": "cartesian",
  "axis_label_x_polar": "",
  "axis_label_y_polar": "",
  "displayAlign": "center"
}
```
features: y-intercept = 0.5，+x 方向漸進 y=1，-x 方向漸進 y=0


## 雙曲正切

**别名**：tanh, hyperbolic tangent
$$
\tanh{x} = \dfrac{\sinh{x}}{\cosh{x}} = \dfrac{e^x-e^{-x}}{e^x+e^{-x}}
$$
```easy-tikz
{
  "dimension": false,
  "documentSetup": true,
  "title": "",
  "size_x_cm": 10,
  "size_y_cm": 5,
  "show_axis_label": true,
  "axis_label_x": "x",
  "axis_label_y": "y",
  "documentClose": true,
  "showAxis": true,
  "showLargeGrid": false,
  "showSmallGrid": false,
  "gridSize": 5,
  "xmin": "-5.5",
  "xmax": "5.5",
  "ymin": "-1.09988",
  "ymax": "1.09988",
  "axis_style": "middle",
  "functions": [
    {
      "expression": "tanh(x)",
      "domain": "-5:5",
      "showLegend": false,
      "fill": false,
      "fillOpacity": 0.2,
      "fillPattern": "solid",
      "tangent": false,
      "dashed": false,
      "tangentPoint": "",
      "extrema": false,
      "color": "red",
      "thickness": "thick",
      "parametric": false,
      "expressionY": "",
      "name": "tanh(雙曲正切 function, hyperbolic tangent)"
    }
  ],
  "zmin": "-5",
  "zmax": "5",
  "axis_label_z": "z",
  "rotationX": 30,
  "rotationZ": 45,
  "zoom3D": 1,
  "boxAspect": "true",
  "functions3D": [],
  "majorTickNum": 8,
  "previewSize": 760,
  "annotations": [],
  "tools": [],
  "coordinateSystem": "cartesian",
  "axis_label_x_polar": "",
  "axis_label_y_polar": "",
  "displayAlign": "center"
}
```
features: y-intercept = 0，+x 方向漸進 y=1，-x 方向漸進 y=-1

## 線性整流

**别名**：ReLF, Rectified-Linear
$$
f(x) = \max(x, 0)
$$
```easy-tikz
{
  "dimension": false,
  "documentSetup": true,
  "title": "",
  "size_x_cm": 10,
  "size_y_cm": 5,
  "show_axis_label": true,
  "axis_label_x": "x",
  "axis_label_y": "y",
  "documentClose": true,
  "showAxis": true,
  "showLargeGrid": false,
  "showSmallGrid": false,
  "gridSize": 5,
  "xmin": "-11",
  "xmax": "11",
  "ymin": "-0.49",
  "ymax": "10.29",
  "axis_style": "middle",
  "functions": [
    {
      "expression": "max(x,0)",
      "domain": "-10:10",
      "showLegend": false,
      "fill": false,
      "fillOpacity": 0.2,
      "fillPattern": "solid",
      "tangent": false,
      "dashed": false,
      "tangentPoint": "",
      "extrema": false,
      "color": "red",
      "thickness": "thick",
      "parametric": false,
      "expressionY": "",
      "name": "f1"
    }
  ],
  "zmin": "-5",
  "zmax": "5",
  "axis_label_z": "z",
  "rotationX": 30,
  "rotationZ": 45,
  "zoom3D": 1,
  "boxAspect": "true",
  "functions3D": [],
  "majorTickNum": 8,
  "previewSize": 760,
  "annotations": [],
  "tools": [],
  "coordinateSystem": "cartesian",
  "axis_label_x_polar": "",
  "axis_label_y_polar": ""
}
```
features: 類比  $\begin{cases} y = x \space (x \geq 0) \\ y = 0 \space (x < 0) \end{cases}$ ，作用是將所有 $<0$ 的數值調整為 0，是最常被使用的 activation function


## 標準化指數層

**别名**：Softmax
讓 neural 的 output 皆是介於 0~1 的機率數值
$$
P_{i} = \dfrac{e^{z_{j}}}{\sum e^{z_{j}}}
$$


## 訓練

**别名**：訓練集, training


## 驗證

**别名**：驗證集, validation


## 測試

**别名**：測試集, testing


## 丟棄

**别名**：dropout
隨機停下某些 neurals，避免 Model 利用複雜結構死背訓練集中的答案


# 04 影像識別
## 取樣率

**别名**：sampling rate, sample rate
<u>高取樣率</u>仍可看出男性揮手的動作，但<u>低取樣率</u>則只能看出男性舉手。


## 動作估計

**别名**：motion estimation
是提取重要影像資訊的 most commonly used method，除用於 **影像壓縮** 外，也用於影像識別。
動作估計的目的在<mark style="background:#fff88f">估測<u>像素</u>、<u>區塊</u> or<u> 物件</u>隨時間在空間中的位置變化</mark>。 


## 行為識別

**别名**：action recognition


## 動作向量

**别名**：motion vector
即水平與垂直位移量


## 物體追蹤

**别名**：object tracking
目的在於<mark style="background:#fff88f">找到該物體的移動軌跡</mark>。利用 [[03 圖像識別#3-3 深度學習物件辨識|DNN]] or [[02 基本的神經網路架構#2-4 圖像識別天王：卷積神經網路 CNN|CNN]] 並仿造 [[#4-2 動作估計|動作估計]] 的做法以實現。
但不一樣的是不再用<u>最小值</u>而是用<u>閾值</u>來辨認追蹤的物體。


## 強健性

**别名**：robustness
指一個 system 面對錯誤 or errors 時，繼續正常執行的能力，這是在極端情況下生存的關鍵

## 注意力機制

**别名**：attention mechanism
相當於遮罩，只讓重要的資訊參與識別流程。
而遮罩的 computing 是用兩組<u>同等大小</u>的張量於對應位置做點對點的相乘。
![基於_DNN_的行為識別系統架構─【Highlight】人工智慧導論_1|350](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/基於_DNN_的行為識別系統架構─【Highlight】人工智慧導論_1.jpg)
對運動類影像，可以用動作資訊當作 mask。另外，[[03 圖像識別#3-3 深度學習物件辨識|DNN]] 具有逐步提取特徵之特性，於是有可逐步提取 mask

## 張量

**别名**：tensor


## 再採樣

**别名**：再取樣, resample


# 05 語音識別
## 位元

**别名**：bit


## 位元解析度

**别名**：bit resolution


## 音框

**别名**：frame
較短的音訊單位


## 基本週期

**别名**：fundmental period
一段音框內的數個重複波形

## 聲學特徵

**别名**：acoustic features


## 重疊

**别名**：overlapping


## 音框率

**别名**：frame rate
每秒出現的 number of frames


## 強度

**别名**：intensity


## 能量

**别名**：energy


## 分貝

**别名**：dB, decibel


## 音量

**别名**：volume


## 音高

**别名**：pitch


## 音色

**别名**：timbre


## 半音高

**别名**：semitone


## 快速傅立葉變換

**别名**：FFT, fast Fourier transform
從 **離散傅立葉轉換** 簡化而來，使其複雜度從 $O(n^2)$ 降低到 $O(n \log n)$。


## 幅度頻譜

**别名**：magnitude spectrum
以頻率為 x-axis，強度為 y-axis 的連續曲線圖


## 諧波

**别名**：hormonics


## MFCC

**别名**：梅爾倒頻譜係數, mel-frequency cepstral coefficient
一種音色識別工具，較不受*諧波* 影響


## 傅立葉轉換

**别名**：FT, Fourier transform
一種線性轉換。基本思想是一個函數可用無窮個週期函數的線性組合來逼近，進而反應該函數的「頻域特徵」


## 離散傅立葉轉換

**别名**：DFT
相比起 FFT 和 FT，能更精確地再現了峰值和頻率，代價是速度慢了上千倍。


## 語者相關

**别名**：speaker dependent
只限特定人士的*語音識別*


## 語者獨立

**别名**：speaker independent
通用於一般人士的*語音識別*

## 語者命令

**别名**：voice command
*第一層級難度*
根據一句語音，從<mark style="background:#fff88f">有限集合</mark>中找出最有可能的命令並執行


## 關鍵詞偵測

**别名**：keyword spotting
*第二層級難度*
根據一句語音，<mark style="background:#fff88f">偵測</mark>是否含有<mark style="background:#fff88f">特定內容</mark>


## 聽寫

**别名**：dictation
根據一段語音，產出<mark style="background:#fff88f">對應逐字稿</mark>


## 意圖

**别名**：intention


## 聊天機器人

**别名**：chatbot


## 對話

**别名**：dialog
和電腦直接對話，電腦能<mark style="background:#fff88f">瞭解使用者的意圖</mark> ，並以語音或文字回覆，也就是 **聊天機器人**


## 動態規劃

**别名**：DP, dynamic programming


## 對位

**别名**：alignment


## 動態時間扭曲

**别名**：DTW, dynamic time warping
這是基於 **動態規劃** 的方法，可以根據音色比對，同時針對不同語速進行局部伸縮，以達 best **對位** 效果。


## 端點偵測

**别名**：endpoint detection


## 機率密度

**别名**：PD, probability density
即統計機率分佈圖


## 機率密度函數

**别名**：PDF, probability density function
求*機率密度* 的函數


## 平均向量

**别名**：mean vector


## 共變異矩陣

**别名**：covariance matrix


## 加權權重

**别名**：weighting factor


## 最大似然率估測法

**别名**：MLE, maximum likelihood estimate
根據英語直翻即「最大可能性估計」，求得一組函數的 best parameters


## 高斯機率密度函數

**别名**：Gaussian PDF


## 高斯混合模型

**别名**：GMM, Gaussian mixture models
最常用的*機率密度函數*，由一組*高斯機率密度函數* 的加權平均所組成。
根據 **最大似然率估測法** ，可以給定一組 MFCC 向量來求得 GMM 的 best parameters，包含*平均向量* 和*共變異矩陣*，以及*加權權重*。


## 隱藏式馬可夫模型

**别名**：HMM, hidden Markov models
用於需要辨識隨時間而變的發音，如母音「ㄞ」，發聲方式由「ㄚ」轉「ㄧ」
此為一個用於描述 **序列** 的 PDF，每個 HMM 由數個 **狀態** 組成，每個狀態皆是一靜態 PDF，而狀態間的轉移可用 **轉移機率** 表示。


## 序列

**别名**：sequence


## 狀態

**别名**：state


## 轉移機率

**别名**：transition probability


## 轉移機率矩陣

**别名**：TPM, transition probability matrix


## 分段式 K-means

**别名**：segmental k-means
由於無法事先得知每個音框的 MFCC vector 屬於哪一狀態，因此實務上必須逐次分配，以達 maximum likelihood，形似 k-means。
步驟如下：
1. 對每個 <u>語句</u> ，使用 DP 分配每個 MFCC vector 至每個 state
2. 對每個 <u>state</u> ，根據被分配的 MFCC vector 計算出對應的 GMM best parameters
3. 根據每個 <u>frame</u> 被分配至的 state，計算 TPM
4. 返回步驟一，until all parameters 收斂


## 音素

**别名**：phoeme
比音框、單個發音更小的基本發音單位，例如：
- 「ㄚ」：a
- 「ㄞ」：a 和 i (即「ㄚ」和「ㄧ」)
- 「ㄠ」：a 和 u (即「ㄚ」和「ㄨ」)


## 單音素

**别名**：monophone
以平安(ping-an)為例 → 得 p-i-ng-a-n


## 右相關

**别名**：RCD, right-content dependent


## 雙連音素

**别名**：biphone
以 **右相關** 音素建立模型，得 sil+p, p+i, i+ng, ng+a, a+n, n+sil，其中 sil 代表靜音 silence


## 三連音素

**别名**：triphone
以左右相關音素建立模型，得 sil+p-i, p+i-ng, i+ng-a, ng+a-n, a+n-sil


## 維特比搜尋演算法

**别名**：Viterbi search
屬於 [[05 語音識別#語者相關|DP]] 的一種


## 語言模型

**别名**：language model
計算詞與詞串接的可能性，以 n-gram 為主，n-gram 是指 n 個詞串接


## 圖

**别名**：graph
由節點（Vertex/Node）與邊（Edge）組成的非線性資料結構，可分為 有向圖 與 無向圖


## 樹

**别名**：tree
一種階層式的資料結構，可以視為一種限制極嚴格的無向圖。包含一個特定的節點稱為「樹根」(Root)，向下分支至其他「子節點」，沒有子節點的節點稱為「葉節點」(Leaf)
**必要條件**：
- **連通**：圖中任兩個節點皆有且只有唯一路徑相連。
- **無環（Acyclic）**：圖中絕對不會形成封閉的迴圈。


## 詞格

**别名**：word latice
以 **樹** or **圖** 建立的更複雜資料結構 for 詞與詞關係分析


## 音高追蹤

**别名**：pitch tracking
將音框轉成音高向量(曲線)，也就是時變的音高


## 哼唱選歌

**别名**：QBSH, Query by Singing/Humming
主要的原理是對音訊輸入進行 **音高追蹤**


## 自相關函數

**别名**：ACF, auto-correlation function
本質是對同一向量/曲線反覆進行平移及內積(乘積和)
公式：$$acf(\tau) = \sum^{n-1-r}_{i=0} s(i) \cdot s(i+r)$$
![音高追蹤自動化─【Highlight】人工智慧導論|350](https://raw.githubusercontent.com/kaisnowwolfhan/Obsidian-Images/refs/heads/master/音高追蹤自動化─【Highlight】人工智慧導論.jpg)
when $\tau = 0$ ，波形完全重疊，得 ACF 1st 內積值高點；$\tau$ ↗，$acf(\tau)$ 震盪，直到第一 and 第二週期重疊，得 ACF 2nd 內積值高點。


## 線性伸縮

**别名**：LS, linear scaling


# 06 自然語言處理
## 自然語言處理

**别名**：NLP, natural language processin
包含以下技術：
- 斷詞處理(for 中文)
- 詞性標記(POS tagging)
- 詞意消歧
- 語法剖析(Parsing)


## 詞性

**别名**：POS, part of speech


## 詞性標記

**别名**：POS tagging
把特性類似的詞彙聚在一起，並給予相同的類別


## 成分

**别名**：constituent
比斷詞、詞性和詞意等等詞彙的層次更高，表達哪些詞彙可組合，即片語(Phrase)。
更高的層次 是 成分之間的關係

## 語法剖析

**别名**：parsing
有 **剖析樹** 和 **相依剖析** 兩種方法。前者具有<u>嚴謹</u>的層級關係，後者以*有向箭頭* <u>簡單</u>表達兩兩詞彙的相互關係


## 剖析樹

**别名**：parse tree
相比相依剖析，具有<u>嚴謹</u>的層級關係


## 有向的

**别名**：directed


## 相依剖析

**别名**：dependency parsing
相比剖析樹，以*有向箭頭* <u>簡單</u>表達兩兩詞彙的相互關係


## 詞袋

**别名**：bag of words
由多個關鍵詞組合而成的集合(sets)


## 雅卡爾係數

**别名**：Jaccard coefficient
計算兩個詞袋間的相似度，公式如下：
$$
J = (A,B) = \dfrac{|A \cap B|}{|A \cup B|} = \dfrac{|A \cap B|}{|A|+|B|-|A \cap B|}
$$


## 路徑

**别名**：path
依存路徑(Dependency path) 的簡寫，是以「詞彙」為節點(Nodes)、「依存關係」為有向邊(Edges)的圖形 or 樹狀結構。


## 代名詞消解

**别名**：pronoun resolution
在更廣泛的學術定義中，代名詞消解通常被納入 **「共指消解」（Coreference Resolution）** 的範疇——即找出文本中指向同一個真實世界實體的所有表達式（Mentions）


## 雜湊表

**别名**：Hash table
這是一種常用的資料結構，把物件對應到表中的某個位置，呈現方式為數字與英語的亂碼組合


## 倒置列表

**别名**：inverted list
包含 Hash table，通常用作物件的來源追蹤，<font color="#7f7f7f">例如關鍵詞回溯尋找相關的問題</font>


## 詞嵌入

**别名**：word embedding


## 餘弦相似度

**别名**：cosine similarity


## 詞向量

**别名**：word vector
是一種低維度的稠密向量，透過 詞嵌入(word embedding) 的模式產生。詞向量經過運算，例如透過計算 餘弦相似度(cosine similarity)，便可以衡量兩個詞彙之間的關聯度


## 單詞組

**别名**：word unigram


## 雙連詞組

**别名**：word bigram


## 三連詞組

**别名**：word trigram


# 07 知識發現
## 關聯規則探勘

**别名**：association rule mining
用來找出資料庫中頻繁出現的項目組合，也就是具相關性的項目


## 序列樣式探勘

**别名**：sequential pattern mining
同一主體在特性/行為上的<u>時序</u>相關性


## 分類模型

**别名**：classification modeling


## 資料缺失值

**别名**：missing value


## 雜訊

**别名**：noise


## 不完整資料

**别名**：incomplete data


## 關聯規則

**别名**：association rule


## 信賴度

**别名**：confidence
在關聯規則探勘裡，means 關聯規則的關聯度
$$
信賴度 = \dfrac{規則中前項與後項共同出現的次數}{前項出現的次數}
$$


## 最小信賴度

**别名**：minimum confidence
篩選可能的關聯規則時的門檻值

## 支持度

**别名**：support
為避免關聯規則是小概率事件，用作確認關聯規則的代表性強度
$$
支持度 = \dfrac{前項與後項共同出現的次數}{總資料庫筆數}
$$


## 最小支持度

**别名**：minimum support
過濾資料中小概率事件的關聯規則


## 先驗演算法

**别名**：Apriori algorithm
詳情請看 [[先驗演算法 及 FP-growth 演算法|補充：先驗演算法 及 FP-growth 演算法]]


## 序列樣式

**别名**：sequential pattern


## 決策邊界

**别名**：decision boundary
通常用於 SVM，將不同類別的資料分開，並且此時距離不同類別的邊界是最大的。
從數學角度稱為 超平面(hyperplane)


## 線性可分

**别名**：linear separable
可以在線性空間被一條直線分開類別的資料集


## 核技巧

**别名**：kernel trick
線性<u>不可分</u>的資料集所用的 SVM 技術


## 正規化

**别名**：normalization, 標準化
確保計算距離時對每個數值點皆公平


## 階層式聚類

**别名**：hierarchical clustering
透過反覆將下一層的群凝聚 or 將上一層的群分裂產生新的群，並在最後生成一個樹狀結構。
常見階層式聚類的生成方式有兩種：
- **凝聚式(agglomerative)階層聚類法**：採用聚類的方法產生新的群，由樹狀圖的<u>底部開始(bottom-up)</u>，<u>往上</u>逐次凝聚群。
- **分裂式(divisible)階層聚類法**：採用分裂的方法產生新的群，由樹狀圖的<u>頂部開始(top-down)</u>，<u>往下</u>逐次分裂群。

以<u>凝聚式</u>為例，介紹階層聚類法的作法：
1. 將每一筆資料都各自視為一個群
2. 找到距離最相近的的兩個群，兩者凝聚產生新群，總數少一群
3. 計算新的群與舊的群之間的距離
4. 重複*步驟 2* 和*步驟 3*，直到群數量減少到目標數量


# 08 創作 AI
## 對抗式學習

**别名**：adversarial learning
經由不斷對抗而讓雙方持續進步的過程


## 生成模型

**别名**：generative model
目標是「創作」，能夠產出訓練資料中沒有出現過的資料


## 判別模型

**别名**：discriminative model
給予模型大量的訓練資料進行機器學習(，每筆訓練資料皆為 *輸入資料(input)* 及其對應的 *標籤(label)* )，使之學到資料間的對應關係，並於輸入時能預測正確。


## 數據點

**别名**：data point


## 通道

**别名**：channel
指代一物件所屬數據的不同維度，通常用於照片像素，例如 R(紅色)、G(綠色)、B(藍色)


## 生成對抗網路

**别名**：GAN, generative adversarial network, 對抗生成網路


## 生成器

**别名**：generator


## 判別器

**别名**：discriminator


## 潛在空間

**别名**：latent space
從一個給定的數據分佈中隨機抽取數據點，並且透過生成器，經過複雜的運算，將潛在空間的數據點轉換為圖片空間的數據點
