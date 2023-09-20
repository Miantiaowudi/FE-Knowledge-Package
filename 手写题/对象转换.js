// 输入
const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 },
    e: [1, 2, [3, { f: 4 }]],
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3,
};
// 输出
const _obj = {
  "a.b": 1,
  "a.c": 2,
  "a.d.e": 5,
  "b[0]": 1,
  "b[1]": 3,
  "b[2].a": 2,
  "b[2].b": 3,
  c: 3,
};

function transObj(obj) {
  const res = {};
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    const type = typeof value;
    if (type === "string" || type === "number") {
      res[key] = value;
    }
    if (type === "object") {
      if (Array.isArray(value)) {
        value.forEach((v, i) => {
          const newKey = `${key}[${i}]`;
          res[newKey] = v;
        });
      } else {
        Object.keys(value).forEach((v) => {
          const newKey = `${key}.${v}`;
          res[newKey] = value[v];
        });
      }
    }
  });
  console.log(res);
  const isEnd = Object.values(obj).every(
    (i) => typeof i === "string" || typeof i === "number"
  );
  return isEnd ? res : transObj(res);
}

let res = transObj(obj);
console.log(res);
