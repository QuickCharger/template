let http = require('http');
let https = require('https');

let remote = false

function init(a_path, a_contentLength, token = null, a_remote = false){
    let ret = {
        port:3000,
        path:a_path,
        method:'POST',
        headers:{
			host:'www.ww.com',
            'Content-Type':'application/json',
			'Authorization':token,
            'Content-Length':a_contentLength,
        }
    }

	if(a_remote === true || remote === true) {
		ret.host = '127.0.0.1'
		ret.port = 443
	}

    ret.host=ret.host?ret.host:"127.0.0.1"

    return ret;
}

function run(a_path, a_content, token, a_remote = false) {
    let content = JSON.stringify(a_content);
    let options = init(a_path, content.length, token, a_remote);

    let req = (a_remote?https:http).request(options, function(res){
        res.setEncoding('utf8');
        res.on('data',function(data){
			console.log(data)
        });
    }).on('error', function(err){
        console.log(a_path + " " + err.message)
    }).on('close', () => {
		// do nothing
	})

    req.write(content);
}

module.exports={init, run}