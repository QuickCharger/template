const { sequelize, DataTypes, Model } = require("../lib/Database")

class Administrator extends Model {
	// getFullname() {
	// 	return `${this.FirstName} ${this.LastName}`
	// }
}

Administrator.init({
	Id: {
		type: DataTypes.INTEGER,
		primaryKey: true,		// 设定主键后 默认的id就取消创建
		autoIncrement: true,
	},

	RecordState: DataTypes.INTEGER,

	//登陆名
	Username: {
		type: DataTypes.STRING,
		unique: true,
	},

	//密码
	Password: { type: DataTypes.STRING },
}, {
	sequelize,
})

module.exports = Administrator
