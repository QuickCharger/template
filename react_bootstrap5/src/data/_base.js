import { request } from '@/utils'

class Base {
  constructor() {
    this.queryPath = this.__proto__.constructor.name.toLowerCase()
  }

  async Index (filters = {}) {
    let ret = await request.post(`${this.queryPath}/index`, {
      filters
    })
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
}

export default Base