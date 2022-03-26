function MyClass(name) {
  this.name = name;
  return {
    name: "world",
  };
}

const obj = new MyClass("hello");
console.log(obj.name);

// Fucnction.prototype.bind

Function.prototype.bind = function (context) {
  var self = this;
  return function () {
    return self.apply(context, arguments);
  };
};
