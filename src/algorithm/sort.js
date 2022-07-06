// 冒泡排序
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 选择排序
function selectSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

// 插入排序
function insertSort(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

// 希尔排序
function shellSort(arr) {
  const len = arr.length;
  let gap = Math.floor(len / 2);
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let temp = arr[i];
      let j = i - gap;
      while (j >= 0 && arr[j] > temp) {
        arr[j + gap] = arr[j];
        j -= gap;
      }
      arr[j + gap] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}

// 归并排序
function mergeSort(arr) {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  let mid = Math.floor(len / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

// 归并排序的合并
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
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  let mid = Math.floor(len / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(quickSort(left), quickSort(right));
}

// 堆排序
function heapSort(arr) {
  const len = arr.length;
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i, len);
  }
  for (let j = len - 1; j > 0; j--) {
    let temp = arr[0];
    arr[0] = arr[j];
    arr[j] = temp;
    heapify(arr, 0, j);
  }
  return arr;
}

// 堆调整
function heapify(arr, i, len) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    heapify(arr, largest, len);
  }
}

//  基数排序
function radixSort(arr) {
  const len = arr.length;
  let max = arr[0];
  for (let i = 1; i < len; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let exp = 1;
  while (max / exp > 0) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < len; i++) {
      let index = Math.floor(arr[i] / exp) % 10;
      bucket[index].push(arr[i]);
    }
    let index = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < bucket[i].length; j++) {
        arr[index++] = bucket[i][j];
      }
    }
    exp *= 10;
  }
  return arr;
}

// 计数排序
function countSort(arr) {
  const len = arr.length;
  let max = arr[0];
  for (let i = 1; i < len; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let bucket = Array.from({ length: max + 1 }, () => []);
  for (let i = 0; i < len; i++) {
    bucket[arr[i]]++;
  }
  let index = 0;
  for (let i = 0; i < bucket.length; i++) {
    for (let j = 0; j < bucket[i]; j++) {
      arr[index++] = i;
    }
  }
  return arr;
}

// 桶排序
function bucketSort(arr) {
  const len = arr.length;
  let max = arr[0];
  for (let i = 1; i < len; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let bucket = Array.from({ length: max + 1 }, () => []);
  for (let i = 0; i < len; i++) {
    bucket[arr[i]]++;
  }
  let index = 0;
  for (let i = 0; i < bucket.length; i++) {
    for (let j = 0; j < bucket[i]; j++) {
      arr[index++] = i;
    }
  }
  return arr;
}
