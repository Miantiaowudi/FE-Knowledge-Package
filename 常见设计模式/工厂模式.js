//简单工厂模式是由一个方法来决定到底要创建哪个类的实例, 而这些实例通常都拥有相同的接口（属性和方法）。
/* 使用场景：
 1 .对象的构建十分复杂
 2 .需要依赖具体环境创建不同实例
 3 .处理大量具有相同属性的小对象 */
// 先创建各个角色的构造函数
function Warrior() {
    this.skill = '回血';
    this.blood = 150; // 初始化生命值
    this.hit = 8; // 普通攻击伤害
    // 其他特有属性和方法比如生命值
    console.log(this);
}
function Mage() {
    this.skill = '冰冻';
    this.blood = 120; // 初始化生命值
    this.hit = 3; // 普通攻击伤害
    // 其他特有属性和方法
    console.log(this);
}
function Archer() {
    this.skill = '消耗';
    this.blood = 110; // 初始化生命值
    this.hit = 10; // 普通攻击伤害
    // 其他特有属性和方法
    console.log(this);
}

// 工厂对象 可以是普通对象是的方法 和 构造函数，这里使用前者
const RoleFactory = {
    createRole(role) {
        let roler;
        switch (role) {
            case '战士':
                roler = new Warrior();
                break;
            case '法师':
                roler = new Mage();
                break;
            case '射手':
                roler = new Archer();
                break;
            // 后续扩展角色直接追加选择语句和添加角色构造函数
            default:
                roler = new Warrior();
        }
    }
};
const RoleFactory = function (role) {
    return new role();
}
Object.freeze(RoleFactory); // 冻结该对象，防止他人操作

// 创建各个角色的实例
var warrior1 = RoleFactory.createRole('战士'); // 创建一个战士
var mage1 = RoleFactory.createRole('法师'); // 创建一个法师
var arche1 = RoleFactory.createRole('射手'); // 创建一个射手