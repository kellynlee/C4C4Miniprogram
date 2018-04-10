const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const dateSplice = (date) => {
  var y = date.getFullYear() + '-',
    m = date.getMonth() + 1 <= 10 ? '0' + (date.getMonth() + 1) + '-' : date.getMonth() + '-',
    d = date.getDay() < 10 ? '0' + date.getDay() + ' ' : date.getDay() + ' ',
    h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':',
    min = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':',
    s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return y + m + d + h + min + s
}

const setFormId = (openId,formId) => {
  if (formId != 'the formId is a mock one'){
    wx.request({
      url: 'http://testc4cwc.duapp.com/mini/formid',
      data: {
        ids: formId,
        openId: openId
      },
      method: 'POST',
      success: (res) => {
        console.log(res)
      }
    })
  }
}

const regValidator = (regType,str) => {
  if (regType == 'num') {
    if (/^[0-9]*$/.test(str)) {
      return true
    } else {
      return false
    }
  }
}

const formValidator = (data) => {
  if (data.length == 0) {
    return false
  }else {
    return true
  }
}

const url = 'https://testc4cwc.duapp.com/mini/'

const urlList = {
  getAppointment: url+'appointment',
  getOpportunity: url+'opportunity',
  assignEmployee: url+'employee',
  getDetail: url +'getDataDetail'
}

module.exports = {
  formatTime: formatTime,
  dateSplice: dateSplice,
  setFormId: setFormId,
  regValidator: regValidator,
  formValidator: formValidator,
  urlList: urlList
}
