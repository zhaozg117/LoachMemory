# 高阶函数
高阶函数是指能满足至少一下条件之一的函数
1. 函数可以作为参数被传递
2. 函数可以作为返回值被输出

## 函数作为参数传递
### 1. 回调函数
### 2.  Array.prototype.sort

## 函数作为返回值
### 1. 判断数据的类型
### 2. getSingle
```
function getSingle(fn){
  var ret ;
  return function(){
    return ret || (ret = fn.apply(this,arguments))
  }
}
```
## 高阶函数实现AOP
AOP（面向切面编程）的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来


## currying
```
function currying(fn){
  let args = [].slice.call(arguments);
  return function(){
    if(args.length < fn.length){
      return fn.apply(null,args.concat([].slice.call(arguments)))
    }else{
      return fn.apply(null,args)
    }
  }


}
```

## uncurrying

## 函数节流

## 分时函数

## 惰性加载函数