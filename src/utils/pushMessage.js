const pushplus = require('./pushplus.js')

const pushMessage = ({ type, message }) => {
  console.log(message)

  PUSHPLUS_TOKEN && pushplus()
}

const formatToMarkdown = (type, message) => {
  if (type === 'info') {
    // 加号或者数字加粗
    message = message.replace(/\+?\d+/g, ' **$&** ')
  }

  // 引用换行
  message = message.replace(/\n/g, ' \n\n > ').replace(/ +/g, ' ')

  return {
    title: `签到${type === 'info' ? '成功 🎉' : '失败 💣'}`,
    content: message,
  }
}



const formatToHTML = ({ type, message }) => {
  if (type === 'info') {
    // 加号或数字加粗
    message = message.replace(/\+?\d+/g, ' <b>$&</b> ')
  }

  return {
    title: `签到${type === 'info' ? '成功 🎉' : '失败 💣'}`,
    content: `<pre>${message}</pre>`,
  }
}

module.exports = pushMessage