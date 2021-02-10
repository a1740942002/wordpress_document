# JavaScript

我是 JS

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