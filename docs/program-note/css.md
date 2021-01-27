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
利用 CSS `background: url('image.png')` 背景圖片的原理，減少 http request 請求的次數。
:::