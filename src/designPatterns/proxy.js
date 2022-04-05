// 代理模式

// 虚拟代理

function multi(...args) {
  let res = 1;
  for (let i = 0; i < args.length; i++) {
    res = res * args[i];
  }
  return res;
}

let proxyMulti = (function () {
  let cache = {};
  return function (...args) {
    const argStr = Array.prototype.join.call(args, ",");
    if (cache[argStr]) {
      return cache[argStr];
    }
    return (cache[argStr] = multi.apply(null, args));
  };
})();

/************************   创建缓存代理工厂   **************************/

const createProxyFactory = function (fn) {
  const cache = {};
  return function (...args) {
    const argKey = Array.prototype.join.call(args, ",");
    if (cache[argKey]) {
      return cache[argKey];
    }
    return (cache[argKey] = fn.apply(null, args));
  };
};
const a = createProxyFactory(multi)(1, 2, 3, 4);
const b = createProxyFactory(multi)(1, 2, 3, 4);

console.log(a, b);
