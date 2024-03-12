let common = require('./common')

let index = {
	begin:0,
	count:10,
	filters:[
		{key:'Id', exp:'>=', value:'0'},
		{key:'Id', exp:'order', value:'desc'},
	]
}
//common.run('/administrator/index', index, false);

let create = {
	Username:'test1',
	Password: '123456',
}
//common.run('/administrator/create', create);

let update = {
	Id: 1,
	Password: '1234',
}
common.run('/administrator/update', update);
