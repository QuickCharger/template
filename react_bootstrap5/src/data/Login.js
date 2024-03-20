import { makeAutoObservable } from 'mobx'
import { request, getToken, setToken, removeToken } from '@/utils'

class Login {
  loginErrMsg = ''

  constructor() {
    makeAutoObservable(this)
    setInterval(async () => {
      let token = getToken()
      if (!token || token.length === 0)
        return
      token = JSON.parse(atob(token.split('.')[1]))
      let now = Math.round(Date.now() / 1000)
      // token马上过期 跳转到登录界面
      if ((now + 5) >= token.exp) {
        console.log(`token 马上过期 跳转到登录界面 exp ${token.exp} now ${(now)}`)
        this.logout()
        return
      }
      // 提前5分钟刷新token
      if ((now + 5 * 60) >= token.exp) {
        console.log(`exp ${token.exp} now ${(now)}`)
        let ret = await request.post('administrator/refresh', {})
        if (ret.code === 0) {
          setToken(ret.data.token)
        }
      }
    }, 10 * 1000)
  }

  isLogin = () => {
    return (getToken() || '').length > 0
  }

  login = async (userName, password) => {
    let ret = await request.post('administrator/login', {
      Username: userName,
      Password: password
    })
    // console.log('ret: ', ret)
    if (ret.code === 0) {
      setToken(ret.data.token)
      return 0
    }

    return ret.message
  }

  logout = () => {
    removeToken()
  }

  getName = () => {
    let token = getToken()
    if (token && token.length)
      return JSON.parse(atob(token.split('.')[1])).Name
  }
}

let dLogin = new Login()
export { dLogin }