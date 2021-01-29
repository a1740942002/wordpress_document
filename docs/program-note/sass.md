# Sass

### 安裝

```bash
npm install sass
```

### 使用

```bash
sass --watch input.sass output.css
```

### 變數

```sass
$branding-color: #e85a5a

.active
  color: $branding-color
```

### Mixins

其實就是在 CSS 中寫 function

```sass
=new-border($px, $form, $color)
  border: $px $form $color

.col-12
  +new-border(1px, solid, #ccc)
```

### 引入其它 Sass

```sass
@import 'about.sass'
```