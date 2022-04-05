js继承
```
function Parent(name) {
  this.name = name || "PPP";
}
Parent.prototype.tag = "ggg";
Parent.prototype.getName = function () {
  return this.name;
};
```
# 原型继承
qu无法实现多继承；创建子类实例时，不能向父类构造函数中传参数
```
function Child() {}
Child.prototype = new Parent();
//无法实现多继承；创建子类实例时，不能向父类构造函数中传参数
```
# 构造函数继承
```
 function Child(name) {
   Parent.apply(this);
   this.name = name;
 }
 // 缺点  方法都在构造函数中定义，无法复用；不能继承原型属性/方法，只能继承父类的实例属性和方法
```

# 组合继承
```
function Child(name) {
  Parent.call(this);
  this.name = name;
}

Child.prototype = new Parent("PPP");
```

# 寄生式组合继承
```
function Child(name) {
  Parent.call(this);
  this.name = name;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
```

# class继承
es5的继承是先创建一个子类的实例，然后用父类方法添加到实例上，实例在前，继承在后；
es6的基础是将父类的实例和方法添加到一个空对象，然后将该对象作为子类的实例，继承在前，实例在后

子类无法继承父类的私有方法

```
class Child extends Parent {
  constructor(name,age){
    super(name);
    this.age = age;
  }
  getAge(){
    return this.age;
  }
}
```