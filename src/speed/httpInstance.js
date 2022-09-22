const axios = require('axios');
const { TOKEN } = require('../ENV.js')
const SUCCESS_CODE = 0

const http = axios.create({
  baseURL: "https://forge-test2.speedtest.cn/api/",
  headers: {
    'content-type': 'application/json',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
  },
})



http.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

http.interceptors.response.use(
  response => {
    return Promise.resolve(response ?? {})
  },
  error => {
    return Promise.reject(error)
  }
)

http.setCookie = cookie => {
  http.default.headers.cookie = cookie
}

http.defaults.headers['authorization'] = `Bearer ${TOKEN}`;

module.exports = http