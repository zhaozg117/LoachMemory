function curring(fn, ...args) {
  return function (...args2) {
    return fn(...args, ...args2);
  };
}

function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function array2Tree(arr, id, pid) {
  let data = {};
  let tree = [];
  arr.forEach((item) => {
    data[item[id]] = item;
  });
  arr.forEach((item) => {
    let parent = data[item[pid]];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      tree.push(item);
    }
  });
  return tree;
}

function dfsSearchTree(tree, id, pid, callback) {
  if (tree.length === 0) return;
  tree.forEach((item) => {
    callback(item);
    if (item[pid]) {
      dfsSearchTree(item[pid], id, pid, callback);
    }
  });
}

function getTreePath(tree, id, pid, path) {
  if (tree.length === 0) return;
  tree.forEach((item) => {
    if (item[id] === path[path.length - 1]) {
      path.push(item[pid]);
      if (item[pid]) {
        getTreePath(item[pid], id, pid, path);
      }
    }
  });
}

function TreeToArray(tree, id, pid, children) {
  let arr = [];
  if (tree.length === 0) return;
  tree.forEach((item) => {
    let obj = {};
    for (let key in item) {
      obj[key] = item[key];
    }
    if (item[children]) {
      obj[children] = TreeToArray(item[children], id, pid, children);
    }
    arr.push(obj);
  });
  return arr;
}

// 节流函数
function throttle(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// 防抖函数
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// 判断是否为空对象
function isEmptyObject(obj) {
  // 判断是否为空对象
  for (let key in obj) {
    // 遍历对象的每个属性
    return false; // 返回false，不为空对象
  } // 循环完后返回true，为空对象
  return true; // 返回true，为空对象
}

// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    // 小于等于pivot的放在左边
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

// 树转map
function treeToMap(tree, id, pid, children) {
  let map = {};
  if (tree.length === 0) return;
  tree.forEach((item) => {
    let obj = {};
    for (let key in item) {
      obj[key] = item[key];
    }
    if (item[children]) {
      obj[children] = treeToMap(item[children], id, pid, children);
    }
    map[item[id]] = obj;
  });
  return map;
}

// 冒泡排序
function bubbleSort(arr) {
  // 冒泡排序
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// 插入排序
function insertSort() {
  // 插入排序
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

// 希尔排序
function shellSort(arr) {
  // 希尔排序
  let len = arr.length;
  let h = 1;
  while (h < len / 3) {
    h = h * 3 + 1;
  }
  while (h >= 1) {
    for (let i = h; i < len; i++) {
      let key = arr[i];
      let j = i - h;
      while (j >= 0 && arr[j] > key) {
        arr[j + h] = arr[j];
        j -= h;
      }
      arr[j + h] = key;
    }
    h = parseInt(h / 3);
  }
}

// 归并排序
function mergeSort(arr) {
  // 归并排序
  let len = arr.length;
  if (len < 2) return arr;
  let middle = Math.floor(len / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

// 快速排序
function quickSort(arr) {
  // 快速排序
  let len = arr.length;
  if (len < 2) return arr;
  let pivotIndex = Math.floor(len / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

// 堆排序
function heapSort(arr) {
  // 堆排序
  let len = arr.length;
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, len, i);
  }
  for (let i = len - 1; i > 0; i--) {
    let temp = arr[i];
    arr[i] = arr[0];
    arr[0] = temp;
    heapify(arr, i, 0);
  }
}

// 最长子序列
function longestSubsequence(arr) {
  // 最长子序列
  let len = arr.length;
  let dp = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
  }
  return Math.max(...dp);
}

// 最长公共子序列
function longestCommonSubsequence(str1, str2) {
  // 最长公共子序列
  let len1 = str1.length;
  let len2 = str2.length;
  let dp = new Array(len1 + 1).fill(0);
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i] = Math.max(dp[i], dp[i - 1] + 1);
      } else {
        dp[i] = Math.max(dp[i], dp[i - 1]);
      }
    }
  }
  return dp[len1];
}

// 导出全部方法
export {
  curring,
  debounce,
  array2Tree,
  dfsSearchTree,
  getTreePath,
  TreeToArray,
  throttle,
  debounce,
  isEmptyObject,
};
