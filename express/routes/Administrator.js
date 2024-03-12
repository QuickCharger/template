const { BaseRouter } = require('./_base')
let md5 = require('md5')
let tAdmin = require('../orm/Administrator')
let MSG = require('../constant_message')

class Administrator extends BaseRouter {
  async beforeCreate (req, res) {
    let old = await tAdmin.findOne({ where: { Username: req.body.Username } })
    if (old) {
      return this.initRet(MSG.RESULT.ADMINISTRATOR_USERNAME_DUPLICATE)
    }
    if (req.body.Password) {
      req.body.Password = md5(req.body.Password)
    }
  }

  async beforeUpdate (req, res) {
    // 假设用户的密码长度不会是32字节
    // md5的长度是32字节 如果pwd长度不够32 则认为修改了密码重新计算md5
    if (req.body.Password && req.body.Password.length != 32) {
      req.body.Password = md5(req.body.Password)
    }
  }
}

module.exports = new Administrator().getRouter()
