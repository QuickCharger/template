const { Sequelize, Model, DataTypes, Op, QueryTypes } = require('sequelize')

let sequelize = new Sequelize('test', 'root', '123456', {
	//timezone: '-06:00',
	timezone: 'America/Merida',
	dialectOptions: {
		timezone: 'local',
	},
	host: '127.0.0.1',
	port: 3306,
	dialect: 'mysql',
	// logging: console.log,
	logging: false,
	define: {
		// 默认情况下,当未提供表名时,Sequelize 会自动将模型名复数并将其用作表名
		// 使用 freezeTableName: true 停止模型名自动化复数
		freezeTableName: true,
		// 自动向每个模型添加 createdAt 和 updatedAt 字段
		timestamps: true,
		createdAt: 'Creation',
		updatedAt: 'LastModified',
		// deletedAt: 'Deleted',
		// 开启软删除 删除后标记deletedAt， timestamps必须启用
		paranoid: true,
	}
})

module.exports = {
	sequelize, Model, DataTypes, Op, QueryTypes
}

if (require.main === module) {
}
