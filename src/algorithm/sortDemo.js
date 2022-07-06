const numArr = [3, 17, 97, 6, 47, 92, 27, 67, 77, 95];

const numArr1 = [74, 17, 62, 73, 89, 29, 21, 10, 85, 13];

function select(arr) {
  let index;
  for (let i = 0; i < arr.length - 1; i++) {
    index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  return arr;
}

function insert(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr;
}

function quick(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    const cui = arr[i];
    if (cui > pivot) {
      right.push(cui);
    } else {
      left.push(cui);
    }
  }
  return quick(left).concat([pivot], quick(right));
}
console.log(quick(numArr));
