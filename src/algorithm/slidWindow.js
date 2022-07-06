/**
 * 滑动窗口相关算法题套路
 */


/**
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
 * 如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * @param {*} s 
 * @param {*} t 
 * @returns 
 */

function minWindow(s, t) {
  const needs = {},
    window = {};
  for (const c of t) {
    if (needs[c] === undefined) {
      needs[c] = 0;
    }
    needs[c]++;
    window[c] = 0;
  }
  const needsSize = Object.keys(needs).length;

  let left = 0,
    right = 0;
  let valid = 0;
  // 记录最小覆盖子串的起始索引及长度
  let start = 0,
    len = Infinity;
  while (right < s.length) {
    // c 是将移入窗口的字符
    const c = s[right];
    // 右移窗口
    right++;

    // 进行窗口内数据的一系列更新
    if (needs[c] !== undefined) {
      window[c]++;
      if (window[c] === needs[c]) {
        valid++;
      }
    }

    // 判断左侧窗口是否要收缩
    while (valid === needsSize) {
      // 在这里更新最小覆盖子串
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      // d 是将移出窗口的字符
      const d = s[left];
      // 左移窗口
      left++;
      // 进行窗口内数据的一系列更新
      if (needs[d] !== undefined) {
        if (window[d] === needs[d]) valid--;
        window[d]--;
      }
    }
  }

  // 返回最小覆盖子串
  return len === Infinity ? "" : s.substr(start, len);
}

console.log(minWindow("aa", "aa"));
