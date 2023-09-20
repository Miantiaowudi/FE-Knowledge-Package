const assert = require('assert');

/**
 * --- 问题描述 ---
 *
 * 重新排列一个字符串，使得每个相邻字符都不同，列出所有情况
 *
 * --- 说明 ---
 *
 * - 字符串只包含小写字母或者数字
 */

function reorganize(str) {
  const n = str.length
  const dp = new Array(n).fill(0).map(() => [])
  dp[0].push(str[0])
  for (let i = 1; i < n; i++) {
    for (const v of dp[i - 1]) {
      for (let j = 0; j <= v.length; j++) {
        dp[i].push(v.slice(0, j) + str[i] + v.slice(j, v.length))
      }
    }
  }
  return Array.from(new Set(dp[n - 1])).filter(i => notSame(i))
}

function notSame(str) {
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) return false
  }
  return true
}

/*******测试部分*******/
module.exports = function doTest() {
  try {
    assert.deepStrictEqual(reorganize('aabb').sort(), ['abab', 'baba']);
    assert.deepStrictEqual(reorganize('aaabbbb').sort(), ['bababab']);
    assert.deepStrictEqual(
      reorganize('aabbbc').sort(),
      ['ababcb', 'abcbab', 'bababc', 'babacb', 'babcab', 'babcba', 'bacbab', 'bcabab', 'bcbaba', 'cbabab']
    );
    assert.deepStrictEqual(reorganize('1bbbbb'), []);
    return '通过';
  } catch (ex) {
    return '不通过';
  }
};
