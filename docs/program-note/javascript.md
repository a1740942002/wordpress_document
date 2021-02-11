# JavaScript

我是 JS


## 原型

### ES5 的做法

```JavaScript
function Computer(branding, cpu, ram, hd){
  this.branding = branding;
  this.cpu = cpu;
  this.ram = ram;
  this.hd = hd;
  this.isOpen = false;
}

Computer.prototype.turn = function(){
  this.isOpen = !this.isOpen;
}

Computer.prototype.show = function(){
  console.log('Hello World');
}

Computer.prototype.year = '2021';

var M1 = new Computer('Apple', 'M1', '16GB', '512GB');
console.log(Computer); // 是一個 function
console.log(Computer.prototype); // 是一個物件
console.log(M1.year); // 是一個物件的 instance
console.log(M1.__proto__); // 等同於 Computer.prototype
console.log(M1);
```

當我們呼叫 M1.turn() 時：

1. M1 這個物件，它身上有沒有 turn ?
2. M1.__proto__ 有沒有 turn ? -> 有，那就使用。
3. M1.__proto__.__proto__ 有沒有 turn ?


M1.__proto__ === Computer.prototype
實例的 __proto__ 等同於 建構子/藍圖的 prototype ( 原型 )。

> prototype - 原型，只適用於 prototype ( 類似設計一個藍圖或是 API )
> __proto__  - 繼承，只適用於 Instance ( ex. M1 )

### ES6 的做法

```JavaScript
class Computer{
  branding;
  cpu;
  ram;
  hd;
  isOpen;

  constructor(branding, cpu, ram, hd){
    this.branding = branding;
    this.cpu = cpu;
    this.ram = ram;
    this.hd = hd;
    this.isOpen = false;
  }

  turn(){
    this.isOpen = !this.isOpen;
  }

  show(){
    console.log('Hello World');
  }
}

var M1 = new Computer('Apple', 'M1', '16GB', '512GB');
console.log(Computer); // 是一個 class
console.log(Computer.prototype); // 是一個物件
console.log(M1); // 是一個物件的 instance
M1.show();
```

OOP ( 物件導向 ) 的核心觀念：

> 將資料與行為整理在一起。

所以透過 class 這個概念，我們可以將所有相關的資料與行為包在一起，達成 OOP。

## You don't Know Js

### Up&Going

### Scope & Closures

Closure 是函式即使在其語彙範疇 ( Scope ) 之外被調用，也仍記得並能夠存取其語彙範疇的能力。

```javascript
var foo = (function wQuery(){

  function doSomething(a){
    console.log(a);
  }

  function doAnother(b){
    console.log(b);
  }

  var publicAPI = {
    doSomething,
    doAnother
  };

  return publicAPI;
})();


console.log(foo)
foo.doSomething(123);
foo.doAnother(456);
```

```tip 提示
可以把 Closure 應用在建立一個內部使用的 API。
```

### this & Object Prototypes
