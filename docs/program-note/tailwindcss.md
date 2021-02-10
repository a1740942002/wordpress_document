# Tailwind CSS

## 安裝

### 初始化 NPM

```bash
npm init -y
```

### 安裝套件

```bash
npm install tailwindcss postcss postcss-cli autoprefixer
```

### 初始化 Tailwind CSS

```bash
npx tailwindcss init
```

### 將 Tailwind CSS 作為 PostCSS 的插件

建立一個 `postcss.config.js` 的檔案，並將下面的程式碼放進去。

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

### 將 Tailwind 導入 CSS

```css
/* ./your-css-folder/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 設定 build 指令

```js
// package.json build script for tailwind to style.css file

"scripts": {
  "build": "postcss ./css/tailwind.css -o ./css/style.css"
}
```

### build 起來

```bash
npm run build
```


## Purge

路徑依照自己的需求進行更改。

```javascript
// tailwind.config.js
module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html'],
  },
  // ...
}
```

### build 起來

```bash
npm run build
```

:::tip 提示
如果出現編譯錯誤，可以把 node_modules/.bin 資料夾刪除。
:::