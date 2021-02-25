# PHP

我是 PHP

### PHP 內建函式

#### `is_numeric()`

### PHP Debug

#### 印出來看看

```php
echo "<pre>" . print_r($array, true) . "</pre>";
```

:::tip
`print_r` 的 " r " 意指 readable，第二個參數代表要不要 return 東西。
:::


### MySQL Query

#### C

```SQL
INSERT INTO guitar_war(name, score, screenshot) VALUES('$name', '$score', '$screenshot')
```

#### R

```SQL
SELECT * FROM guitar_war WHERE approve = 1 ORDER BY score DESC
```

#### U

```SQL
UPDATE guitar_war SET is_approved = 1 WHERE id = $id
```

#### D

```SQL
DELETE FROM guitar_war WHERE id = $id
```

#### 新增 Table 欄位

##### 範例一

```SQL
ALTER TABLE email_list ADD id INT NOT NULL AUTO_INCREMENT FIRST, ADD PRIMARY KEY(id)
```

##### 範例二

```SQL
ALTER TABLE `guitar_war` ADD `is_approve` TINYINT(1) NOT NULL DEFAULT '0' AFTER `screenshot`;
```

#### 更改 Table 欄位結構

```SQL
ALTER TABLE `guitar_war` MODIFY COLUMN `is_approved` TINYINT(1) DEFAULT 0
```

### MySQL Debug

#### 印出錯誤

```php
mysqli_query($dbc, $query) or die(mysqli_error($dbc));
```

### SQL Injection

```php
mysql_real_escape_string($dbc, $_POST['name'])
```
