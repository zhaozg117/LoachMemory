class Chain {
  constructor(fn) {
    this.fn = fn;
    this.executor = null;
  }

  setNext(executor) {
    return (this.executor = executor);
  }

  next(...args) {
    return this.executor && this.executor.passRequst.apply(this.executor, args);
  }

  passRequst(...args) {
    const ret = this.fn.apply(this, args);
    if (ret === "next") {
      return (
        this.executor && this.executor.passRequst.apply(this.executor, args)
      );
    }
    return ret;
  }
}

function bindInput(type, value) {
  if (type === "input") {
    console.log("bindInput:", type, value);
  } else {
    return "next";
  }
}

function bindSelect(type, value) {
  if (type === "select") {
    console.log("bindSelect:", type, value);
  } else {
    return "next";
  }
}

function bindTreeSelect(type, value) {
  if (type === "treeSelect") {
    console.log("bindTreeSelect:", type, value);
  } else {
    return "next";
  }
}

const chain = new Chain(bindInput);
const chainSelect = new Chain(bindSelect);
const chainTreeSelect = new Chain(bindTreeSelect);
chain.setNext(chainSelect);
chainSelect.setNext(chainTreeSelect);

// chain.passRequst("input", "inputValue");
// chainSelect.passRequst("select", "selectValue");
chain.passRequst("select", "treeSelectValue");

class MyFn extends Function {
  after() {
    let self = this;
    return function (...args) {
      var ret = self.apply(this, args);
      if (ret === "next") {
        return fn.apply(this, args);
      }
      return ret;
    };
  }
}
