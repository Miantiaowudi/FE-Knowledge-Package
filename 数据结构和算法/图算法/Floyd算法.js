/* Floyd判圈算法(Floyd Cycle Detection Algorithm)，又称龟兔赛跑算法(Tortoise and Hare Algorithm)，
是一个可以在有限状态机、迭代函数或者 链表上判断是否存在环，求出该环的起点与长度的算法。
在图和树的数据结构在具体使用中，可能会出现循环依赖的情况，如何自动判断，是否存在循环，可以使用Floyd判圈算法 */
const c = {
    value: -4
};
const b = {
    value: 0
};
const a = {
    value: 2
};
const head = {
    value: 3
};
head.dep = a;
a.dep = b;
b.dep = c;
c.dep = a;

const floyd2 = head => {

    //第一步判断是否有环
    let fast = head //快指针
    let slow = head //慢指针

    while (fast && fast.dep) {
        fast = fast.dep.dep
        slow = slow.dep
        // 相等后，说明2者相遇了，说明存在循环
        if (fast === slow) {
            break
        }
    }
    if (!fast || !fast.dep) return -1

    /**
    * 第二步判断环从哪开始,当快慢指针在交点相遇后，假设快指针是慢指针的2倍，
      快指针在往前走，同时一个指针从开始位置走
    * 他们相遇后，就是环开始的位置，可以参照图3，最后得出的x=z
    */
    let start = head
    let pos = 0
    while (start !== fast) {
        pos++
        start = start.dep
        fast = fast.dep
    }
    return pos
};

let res = floyd2(head)
console.log(res)