/* Unicode编码相关 */
const alphabet = new Array(26).fill(0).map((_, index) => String.fromCharCode(index + 97)) //生成小写字母表数组
const upper_alphabet = alphabet.map((item, _) => item.toUpperCase()) //生成大写字母表数组
console.log(alphabet, upper_alphabet)
console.log('A'.charCodeAt(), 'a'.charCodeAt()) // 65,97