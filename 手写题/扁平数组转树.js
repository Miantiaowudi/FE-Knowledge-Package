// const arr = [
//   { id: "12", pid: "1" },
//   { id: "2", pid: "-1" },
//   { id: "21", pid: "2" },
//   { id: "11", pid: "1" },
//   { id: "1", pid: "-1" },
//   { id: "22", pid: "21" },
// ];

// const tree = [
//   {
//     id: "1",
//     pid: "-1",
//     children: [
//       { id: "12", pid: "1" },
//       { id: "11", pid: "1" },
//     ],
//   },
//   {
//     id: "2",
//     pid: "-1",
//     children: [{ id: "21", pid: "2", children: [{ id: "22", pid: "21" }] }],
//   },
// ];

let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

const arrayToTree = (arr) => {
  const res = [];
  arr.forEach((item) => {
    if (item.pid === 0) {
      item.child = {};
      res.push(item);
    }
  });
};
