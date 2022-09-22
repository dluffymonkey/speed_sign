const http = require('./httpInstance');
const axios = require('axios');

class Api {
  constructor() {
    this.http = http
  }

  /**
  * @desc 签到
  * @returns {Promise<*>}
  * {
  *   incr_point: Number 获得矿石数
  *   sum_point: Number 总矿石数
  * }
  */
  checkedIn () {
    return this.http.post('v2/signv2').then(res => {
      console.log(res)
    })
  }
}

module.exports = Api