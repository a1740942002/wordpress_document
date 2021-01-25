# Git

## Git 基本指令

* `git --version` - 查看 Git 版本
* `git init` - 
* `git status` - 
* `git add "檔案名稱"` - 
* `git commit -m "版本名稱"` - 
* `git log` - 
* `git checkout "版本編號"` - 切換到舊的 commit 版本。
* `.gitignore` - 排除放入 git commit 中的檔案或是資料夾名稱。
* `git diff` - 看你在 commit 之前改過什麼東西。

### 使用案例

##### `git --version`

先查看自己電腦安裝的 Git 版本為多少？本文使用 Git 2.29.0 之版本，如果太舊可能會有一些指令有問題。

##### `git init`

先讓資料夾可以被 Git 所控制。

##### `vim .gitignore 不要的檔案名稱`

建立 `.gitignore` 排除不要被 Git 所控制的檔案，例如 node_modules，值得注意的是 `.gitignore` 本身也需要進入版本控制，讓其它人也能知道這專案排除了哪些東西。

通常會排除 **node_modules** 中的資料，已節省空間。

```bash
# put this in .gitignore
node_modules/
```

##### `git add .` 

`git add .` 代表這個資料夾全部的檔案都要加進去版本控制，當然，除了剛剛放在 `.gitignore` 裡面的。

##### `git status`

確認是否所有的檔案都成功加入 git 的控制之中。

##### `git commit -am "本次存檔的描述"`

通常第一次會直接寫 `git commit -am "init"`，作為最初始化的版本。

`-a` 代表的是加入所有檔案，會把所有你有變更過的檔案加入進 commit 之中，但是如果是新建立的檔案則不會，要再次使用 `git add .`把新建立的檔案加入版本控制的行列中。

##### `git log`

確認版本控制是否成功建立。

## Git 的平行時空

* `git branch -v` - 查看所擁有的 branch 以及目前的 branch。
* `git branch "branch 名稱"` - 建立一個 branch
* `git branch -d "branch 名稱"` - 刪除一個 branch
* `git checkout "branch 名稱"` - 切換到不同的 branch
* `git merge "branch 名稱"` - 要合併進來的 branch

## Github

```bash
git remote add origin https://github.com/a1740942002/dev_tailwindcss.git
git branch -M main
git push -u origin main
```

僅供參考，前往 Github 直接複製貼上比較｀快
-u 可以省略

* `git push -u origin "要上傳的 branch"` - 把最新的 commit 上傳上去
* `git clone` - 從 Github 上複製專案下來
