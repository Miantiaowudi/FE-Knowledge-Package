const assert = require('assert');

/**
 * --- 问题描述 ---
 *
 * 算出两个数组的补集，数组只包含字符串和数字
 *
 * --- 说明 ---
 *
 * - 补集：如果 b 是 a 的子集，返回存在于 a 不存在于 b 的元素集合，反之返回空集合
 */

function findComplementarySet(a, b) {
  let set_a = [...new Set(a)]
  let set_b = [...new Set(b)]
  let res = []
  if (set_b.some(i => set_a.indexOf(i) === -1)) {
    return []
  }
  set_a.forEach(i => {
    if (!set_b.includes(i)) {
      res.push(i)
    }
  })
  return res
}

/*******测试部分*******/
module.exports = function doTest() {
  try {
    assert.deepEqual(findComplementarySet(['a', 6, 'b', 3], ['b']).sort(), [3, 6, 'a']);
    assert.deepEqual(findComplementarySet([1, 11, 111], [2]), []);
    return '通过';
  } catch (err) {
    return '不通过';
  }
};
