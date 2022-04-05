/********************* 迭代器模式  *********************/

// 实现类似jquery的each
Array.prototype.each = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack.call(null, i, this[i], this);
  }
};

["a", "b", "c"].each((e, i, arr) => {
  console.log("each:", e, i, arr);
});

function Iterator(obj) {
  let current = 0;
  function next() {
    current += 1;
  }

  function isDone() {
    return current >= obj.length;
  }

  function getCurItem() {
    return obj[current];
  }

  return {
    next: next(),
    isDone: isDone(),
    value: getCurItem(),
  };
}
