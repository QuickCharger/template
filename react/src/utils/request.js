import axios from 'axios'
import { getToken, removeToken } from './token'
import Config from '@/config'

const request = axios.create({
  baseURL: Config.request_baseURL,
  method: 'post',
  timeout: 60000
})

request.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = token
  }
  return config
}, (err) => {
  return Promise.reject(err)
})

request.interceptors.response.use((response) => {
  console.log(response.data)
  if (response.data.result === -1 &&
    (response.data.message === 'jwt expired'
      || response.data.message === 'invalid signature')) {
    removeToken()
  }
  return response.data
}, (err) => {
  return Promise.reject(err)
})

export { request }
