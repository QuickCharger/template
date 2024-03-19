let createError = require('http-errors')
let express = require('express')
let expressJWT = require('express-jwt')
let bodyParser = require('body-parser')
let cors = require('cors')
let Config = require('./config')

let app = express()
app.use(cors())
app.use(bodyParser.json({ limit: "1MB" }))
app.use(bodyParser.urlencoded({ extended: true }))

// token 设置
app.use(
  expressJWT({
    secret: Config.SECRET_KEY
  }).unless({
    path: [
      '/administrator/index',
      '/administrator/create',
      '/administrator/update',
    ]
  })
)

// 白名单里的url 不会解析jwt 如此再解析
app.use((req, res, next) => {
  if (!req.user && req.headers) {
    try {
      req.user = JSON.parse(Buffer.from(req.headers.authorization.split('.')[1], "base64").toString())
    } catch (e) {
      req.user = undefined
    }
  }
  next()
})

// log
{
  app.use(async (req, res, next) => {
    console.log(``)
    console.log(`request for ${req.originalUrl}. now ${new Date().toLocaleString()}`)
    console.log(`user: ${JSON.stringify(req.user)}`)
    console.log(`body: ${JSON.stringify(req.body)}`)
    next()
  })
}

app.use('/administrator', require('./routes/Administrator'))

app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  if (err.name == 'UnauthorizedError') {
    console.log(err.message)
  } else {
    console.log(err)
  }

  res.send({ result: -1, message: "error" })
})


setTimeout(async () => {
  let redis = require('redis')

  const client = await redis.createClient({ url: 'redis://127.0.0.1:6379' })
    .on('error', err => console.log('Redis Client Error', err))
    .connect()

  let writeTimes = 1000 * 10
  let t = 0

  t = new Date()
  for (let i = 0; i < writeTimes; ++i) {
    await client.set(`${i}`, 1)
  }
  console.log(`write ${writeTimes} times. cost ${new Date() - t} ms`)

  t = new Date()
  for (let i = 0; i < writeTimes; ++i) {
    await client.get(`i`)
  }
  console.log(`read ${writeTimes} times.  cost ${new Date() - t} ms`)

  await client.disconnect()


  let tAdmin = require('./orm/Administrator')
  await tAdmin.sync({ force: false })

  t = new Date()
  for (let i = 1; i < writeTimes; ++i) {
    await tAdmin.create({ Id: i, RecordState: i })
  }
  console.log(`write ${writeTimes} times. cost ${new Date() - t} ms`)

  t = new Date()
  for (let i = 0; i < writeTimes; ++i) {
    await tAdmin.findOne({ where: { Id: i } })
  }
  console.log(`read ${writeTimes} times.  cost ${new Date() - t} ms`)


  /**
   * 虚拟机 ubuntu 18.04 4C1G  mysql8 docker+redis7
write 10000 times. cost 2377 ms
read 10000 times.  cost 2163 ms
write 10000 times. cost 171633 ms
read 10000 times.  cost 6497 ms
   */

}, 1000)

module.exports = app
