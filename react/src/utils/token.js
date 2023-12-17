const cKey = 'token-jwt'

let setToken = (token, key = cKey) => {
  return window.localStorage.setItem(key, token)
}

let getToken = (key = cKey) => {
  return window.localStorage.getItem(key)
}

let removeToken = (key = cKey) => {
  return window.localStorage.removeItem(key)
}

export { setToken, getToken, removeToken }
