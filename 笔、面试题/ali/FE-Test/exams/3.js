const assert = require('assert');

/**
 * --- 问题描述 ---
 *
 * 实现一个简易版的微博，包含 client 和 server 两部分，并实现四个基础功能：关注、取关、发微博、获取用户微博列表
 *
 * --- 说明 ---
 * - A 关注 B 后，A 和 B 就成为好友关系（即使 B 没有关注 A）
 * - 某个用户的微博列表，包含他本人和他所有好友的所有微博
 * - 数据存储在 server 端
 * - 具体执行逻辑，参见本题的测试部分
 */

class WeiboClient {
  /**
   * @param { userId, server } options
   */
  constructor(options) {
    const { userId, server } = options
    this.userId = userId
    this.server = server
    this.server.addUserCb(userId)
  }

  // 关注指定用户
  follow(userId) {
    this.server.followCb(this.userId, userId)
  }

  // 取关指定用户
  unfollow(userId) {
    this.server.unfollowCb(this.userId, userId)
  }

  // 发微博
  postNewWeibo(content) {
    // console.log({ content })
    this.server.postNewWeiboCb(this.userId, content)
  }

}

class WeiboServer {
  constructor() {
    this.userList = []
  }

  // 获取对应用户微博列表
  getWeiboList(userId) {
    let res = []
    this.userList[userId].friend.forEach(item => res.push(...(Object.values(this.userList[item].weiBo))))
    return res
  }

  addUserCb(userId) {
    this.userList[userId] = {}
    this.userList[userId].friend = [userId]
    this.userList[userId].weiBo = {}
  }

  followCb(followId, followedId) {
    if (this.userList[followId].friend.includes(followedId)) return
    this.userList[followId].friend.push(followedId)
    this.userList[followedId].friend.push(followId)
  }
  unfollowCb(followId, unfollowedId) {
    if (!this.userList[followId].friend.includes(unfollowedId)) return
    this.userList[followId].friend = this.userList[followId].friend.filter(item => item !== unfollowedId)
    this.userList[unfollowedId].friend = this.userList[unfollowedId].friend.filter(item => item !== followId)
  }
  postNewWeiboCb(userId, content) {
    Object.assign(this.userList[userId].weiBo, content)
  }
}

/*******测试部分*******/
module.exports = function doTest() {
  try {

    const wServer = new WeiboServer();
    const wClientA = new WeiboClient({
      userId: '001',
      server: wServer,
    });
    const wClientB = new WeiboClient({
      userId: '002',
      server: wServer,
    });
    const wClientC = new WeiboClient({
      userId: '003',
      server: wServer,
    });

    const WEIBO_CONTENT_A = 'Hello World';
    const WEIBO_CONTENT_B = '大家好，我是user 002';
    const WEIBO_CONTENT_C = '小程序怎么写？';
    wClientA.postNewWeibo({ WEIBO_CONTENT_A });
    wClientB.postNewWeibo({ WEIBO_CONTENT_B });
    wClientC.postNewWeibo({ WEIBO_CONTENT_C });

    assert.deepStrictEqual(wServer.getWeiboList('001'), ['Hello World']);


    wClientA.follow('002');
    assert.deepStrictEqual(wServer.getWeiboList('001'), ['Hello World', '大家好，我是user 002']);

    wClientA.follow('003');
    assert.deepStrictEqual(wServer.getWeiboList('001'), ['Hello World', '大家好，我是user 002', '小程序怎么写？']);

    wClientA.unfollow('002');
    assert.deepStrictEqual(wServer.getWeiboList('001'), ['Hello World', '小程序怎么写？']);


    return '通过';
  } catch (err) {
    return '不通过';
  }
};
