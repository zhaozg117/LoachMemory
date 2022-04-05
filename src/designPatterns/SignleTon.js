function SingleTon(name) {
  this.name = name;
}

SingleTon.prototype.getName = function () {
  return this.name;
};

SingleTon.getInstance = (function () {
  let instance = null;
  return function (name) {
    if (!instance) {
      instance = new SingleTon(name);
    }
    return instance;
  };
})();

// 透明的单例模式
let Single = (function () {
  var instance;

  let SingleFn = function (name) {
    if (instance) {
      return instance;
    }
    this.init(name);
    return (instance = this);
  };

  SingleFn.prototype.init = function (name) {
    this.name = name;
  };
  return SingleFn;
})();

// let a = new Single("aaaa");
// let b = new Single("bbbb");
// console.log("signle:::", a === b, a, b);

/**   代理的单例模式 */
function Task(name) {
  this.name = name;
  // this.init(name);
}

Task.prototype.init = function (name) {
  this.taskVo = { taskId: "", taskName: name };
};

let ProxySingleTon = (function () {
  let instance;
  return function (name) {
    if (!instance) {
      instance = new Task(name);
    }
    return instance;
  };
})();

// const aa = new ProxySingleTon("aa");
// const bb = new ProxySingleTon("bb");
// const task = new Task("ccc");
// console.log("ProxySingleTon:", a === b, a, b, task);

// 通用的单例

let getInstance = function (fn) {
  let instance;
  return function (...args) {
    return instance ? instance : (instance = fn.apply(this, args));
  };
};

const creatTask = getInstance(Task);
let aaa = creatTask("aaa");
console.log(aaa);
