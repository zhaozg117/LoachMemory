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

// Encapsulates 封装
const obj = (function () {
  const name = "loach";
  return {
    getName() {
      return name;
    },
  };
})();

console.log(obj.name);
console.log(obj.getName());

// 原型clone对象

Object.create =
  Object.create ||
  function (obj) {
    var F = function () {};
    F.prototype = obj;
    return new F();
  };

function _new() {
  var obj = Object.create();
  var Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  var ret = Constructor.apply(obj, arguments);
  return typeof ret === "object" ? ret : obj;
}
