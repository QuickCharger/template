let ws = require("nodejs-websocket")

// 创建一个服务server,每次用户链接，函数就会被执行，并给当前用户创建一个connect对象
let server = ws.createServer(connect => {
  console.log("websocket新连接 ....")

  // 每当接收到用户传递过来的数据，就会触发text事件，并传入数据
  connect.on("text", data => {
    // 给用户响应数据
    // connect.sendText(data.toUpperCase()+"!!!") //转换大小写并并拼接字符串
    connect.send(`server get ${data}`)
  })

  //监听websocket断开链接
  connect.on("close", () => {
    console.log("websocket连接断开....")
  })

  //监听websocket异常信息
  connect.on("error", () => {
    console.log("websocket连接异常....")
  })
})

server.listen(3005, () => {
  console.log("websocket running")
})
