import tree from "../utils/tree";
class Parent {
  constructor(name) {
    this.name = name;
  }
  static country = "china";
  getName() {}
}

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

console.log(tree);
