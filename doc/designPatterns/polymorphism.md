## 设计模式
大概可分为创建型模式、结构型模式、行为型模式

# 多态
同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果。

```
const makeSound = (animal) => {
  animal.sound();
};

const Duck = function () {};

Duck.prototype.sound = function () {
  console.log("ga! ga! ga!");
};

const Dog = function () {};

Dog.prototype.sound = () => {
  console.log("wang! Wang! wang!");
};

makeSound(new Dog());

makeSound(new Duck());

```

多态的思想实际上是把“做什么”和“谁去做”分离开来。
多态的最根本好处在于，你不必再向对象询问“你是什么类型”而后根据得到的答
案调用对象的某个行为——你只管调用该行为就是了，其他的一切多态机制都会为你安
排妥当


# 封装

封装就是将信息隐藏起来，一般来说就包括封装实现和封装数据

## 封装数据
  private public static protected等
```
const obj = (function(){
  const name = 'loach'
  return {getName(){
    return name;
  }}
})()

console.log(obj.name);
console.log(obj.getName())

```

## 封装实现
隐藏实现细节、设计细节以及隐藏对象的类型，封装在更重要的层面体现为封装变化。

原型模式clone对象

```
Object.create =
  Object.create ||
  function (obj) {
    var F = function () {};
    F.prototype = obj;
    return new F();
  };
```


## 原型编程泛型
1. 所有的数据都是对象
2. 生成对象是通过找到一个对象作为原型，并clone
3. 对象会记住它的原型
4. 若对象无法满足某个请求，会把它委托给原型

### js基本数据类型
undefined、number、boolean、string、function、object、Symbol

new函数的实现
```
function _new() {
  var obj = Object.create();
  var Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  var ret = Constructor.apply(obj, arguments);
  return typeof ret === "object" ? ret : obj;
}
```