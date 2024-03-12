let Config = {
	SECRET_KEY: 'screttKey',
	PORT: '3000',
	Release: false,
}

let fs = require('fs')
// develop配置
if (fs.existsSync("/root/develop")) {
	console.log("this is a develop")
}

// release配置
if (fs.existsSync("/root/release")) {
	console.log("this is a release")
	Config.Release = true
	Config.SECRET_KEY = require('crypto').randomBytes(10).toString('base64').slice(0, 10)
}

module.exports = Config
