let Config = {
  Release: false,
  request_baseURL: 'http://127.0.0.1:8890',
  UPLOAD_PATH: `${__dirname}/../upload`,
}

Config.Release = true

if (Config.Release) {
  console.log("this is a release")
  Config.request_baseURL = 'https://api.twothreedev.online'
} else {
  console.log("this is a develop")
}

module.exports = Config
