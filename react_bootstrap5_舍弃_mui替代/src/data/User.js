import { makeAutoObservable } from 'mobx'
import { request } from '../utils'
import Base from './_base'

class User extends Base {
  constructor() {
    super()
    this.users = []
    makeAutoObservable(this)
    this.queryPath = 'user'
  }

  async Index (filters = {}) {
    let ret = await request.post(`${this.queryPath}/index`, {
      filters
    })

    if (ret.code === 0) {
      this.users = ret.data.list
      // console.log('index')
      // console.log(this.users)
    }
    for (let i = 0; i < this.users.length; ++i) {
      for (let j = 0; j < this.users.length; ++j) {
        if (this.users[i].ReferUserId === this.users[j].Id) {
          this.users[i].ReferUserEmail = this.users[j].Email
        }
      }
    }
    return ret
  }

  async View (obj) {
    let ret = await request.post(`${this.queryPath}/view`, obj)
    return ret
  }

  async Create (obj) {
    let ret = await request.post(`${this.queryPath}/create`, obj)
    return ret
  }

  async Update (obj) {
    let ret = await request.post(`${this.queryPath}/update`, obj)
    return ret
  }

  async Get (Id) {
    if (this.users.length === 0) {
      await this.Index()
    }
    for (let i = 0; i < this.users.length; ++i) {
      if (this.users[i].Id === Id)
        return this.users[i]
    }
    return {}
  }
}

let dUser = new User()
export { dUser }