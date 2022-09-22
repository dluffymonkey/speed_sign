const Speed = require('./speed/index.js')
const pushMessage = require('./utils/pushMessage.js')

const growth = {
  userName: '', // 用户名
  checkedIn: false, // 是否签到
  contCount: 0, // 连续签到天数
  sumCount: 0, // 累计签到天数
}


const message = () => {
  return `
Hello ${growth.userName}
${growth.checkedIn ? `签到 +${growth.incrPoint} 矿石` : '今日已签到'}
连续签到天数 ${growth.contCount}
累计签到天数 ${growth.sumCount}
`.trim()
}

const main = async () => {

  const speed = new Speed();
  console.log(111)
  // 签到
  const checkedIn = await speed.checkedIn()

  console.log(222)

  pushMessage({
    type: 'info',
    message: message()
  })
}

main().catch(err => {
  console.log(err.message)
})