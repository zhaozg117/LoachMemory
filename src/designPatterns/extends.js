function Parent(name) {
  this.name = name || "PPP";
}
Parent.prototype.tag = "ggg";
Parent.prototype.getName = function () {
  return this.name;
};
/*********** 原型继承   ***********/

function Child() {}
Child.prototype = new Parent();
// var c1 = new Child("111");
// var c2 = new Child("222");
// c1.tag = "111";
// console.log(c1.tag, c2.name);
//缺点： 无法实现多继承；创建子类实例时，不能向父类构造函数中传参数

/***********  构造继承   ***********/

// function Child(name) {
//   Parent.apply(this);
//   this.name = name;
// }

// var c1 = new Child("111");
// var c2 = new Child("222");

// 缺点  方法都在构造函数中定义，无法复用；不能继承原型属性/方法，只能继承父类的实例属性和方法

/***********  组合继承   ***********/
function Child(name) {
  Parent.call(this);
  this.name = name;
}

Child.prototype = new Parent("PPP");
// var c1 = new Child("111");
// var c2 = new Child("222");
// console.log(c1.name, c2.name, c1.tag);

/***********  寄生组合继承   ***********/
function Child(name) {
  Parent.call(this);
  this.name = name;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

// class 继承
/***********  class 继承   ***********/
