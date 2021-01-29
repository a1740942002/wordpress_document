# CSS

為什麼不是...

## 排版 / Layout

### `display`

### `position`

### `box model`

### `float`

:::tip

這部 [Youtube 影片](https://www.youtube.com/watch?v=xara4Z1b18I)視覺化了 float 是如何運作的。

:::

### `display: flex`

:::tip
可以利用 [display:flex](https://flexbox.help/) 與 [Flexbox Playground](https://demos.scotch.io/visual-guide-to-css3-flexbox-flexbox-playground/demos/) 進行學習。
:::

## 內容 / Content


## 常用技法

### 水平置中

```css
margin: 0 atuo
```

### 垂直置中


如果是文字的話，將 line-height 與 height 一樣高即可達成。

```css
display: inline-block
height: 40px
width: 40px
line-height: 40px
```

### 使用自己的字型


```css
@font-face 
  font-family: jinxuan
  src: url(./jf-jinxuan-medium.otf)
  font-weight: 500
  font-style: normal

@font-face 
  font-family: jinxuan
  src: url(./jf-jinxuan-bold.otf)
  font-weight: 700
  font-style: normal
  
*
  font-family: jinxuan
```
:::warning 注意
網頁上使用中文字體，檔案非常大，盡量避免。
:::

### 有顏色的 ICON

:::tip CSS Sprites
利用 `background: url('image.png')` 背景圖片的原理，減少 http request 請求的次數。
:::

### 三角形

利用 border 其實是中空的特性，隱藏其它 3 邊 border，只利用一邊 border 並搭配 `transform` 達成。

```sass
.triangle:after
  content:''
  position: absolute
  bottom: -8px
  border-top: 5px solid transparent
  border-bottom: 5px solid transparent
  border-right: 5px solid transparent
  border-left: 5px solid #4b5563
  left: 12px
  transform: rotate(90deg)
  width: 0
  height: 0
```

:::tip
利用這個做法也能做出不同形狀！
:::

## 響應式設計

使用 **ResponsivelyApp** 一次開 3 個畫面，超好用！！