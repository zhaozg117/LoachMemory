// currying
function curring(fn) {
  return function curryFn() {
    let args = [].slice.call(arguments);
    if (args.length < fn.length) {
      return function () {
        return curryFn(null, args.concat([].slice.call(arguments)));
      };
    }
    return fn.apply(null, args);
  };
}

function curry(fn) {
  return function curryFn(...args) {
    if (args.length < fn.length) {
      return function () {
        return curryFn(...args.concat(Array.from(arguments)));
      };
    }
    return fn(...args);
  };
}
// uncurrying
function uncurrying(fn) {
  return function () {
    var obj = Array.prototype.shift.call(arguments);
    return fn.apply(obj, arguments);
  };
}

const push = uncurrying(Array.prototype.push);
let arr = [1, 2];
push(arr, 3);
console.log(arr);

// 函数节流

// 分时函数

// 惰性加载函数
