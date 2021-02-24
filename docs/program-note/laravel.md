# Laravel

### Homebrew

[Homebrew 官網](https://brew.sh/index_zh-tw)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

要找套件可以去 https://formulae.brew.sh/


### Composer

[Composer 官網](https://getcomposer.org/download/)

#### 安裝 Composer

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

#### 將 Composer 安裝在 Global 中

```bash
mv composer.phar /usr/local/bin/composer
```

### Laravel
