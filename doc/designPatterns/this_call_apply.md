# this

## this
js中this总是指向一个对象，具体是那个对象则基于函数运行时执行环境动态绑定，而非声明时的执行环境

## this的指向
this的指向大概分为四种：
1. 作为对象的方法调用
2. 作为普通函数调用
3. 作为构造函数调用
4. Function.prototype.call 、Function.prototype.apply调用

### 1. 作为对象的方法调用
当函数作为对象的方法被调用时，this 指向该对象
### 2. 作为普通函数调用
作为普通函数调用this 总是指向全局对象
### 3. 作为构造函数调用
通常情况下，构造器里的 this 就指向返回的这个对象，如果显示的返回了某个对象，this则指向返回的对象
```
function MyClass(name){
  this.name = name
  return {
    name:'world'
  }
}

console.log(new MyClass('hello').name) // 'world'
```
### 4. Function.prototype.call 、Function.prototype.apply调用

通的函数调用相比，用 Function.prototype.call 或 Function.prototype.apply 可以动态地改变传入函数的 this


# call  && apply
call 和apply都能改变this的指向，第一个参数就是this的指向，如果传null则为宿主对象（window)，严格模式下this，还是null； 不同的是参数，apply，第二个参数为类数组

## Function.prototype.bind 
置的 Function.prototype.bind，用来指定函数内部的 this指向
```
Function.prototype.bind = function (context) {
  var self = this;
  return function () {
    return self.apply(context, arguments);
  };
};
```