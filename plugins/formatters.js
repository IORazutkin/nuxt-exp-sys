import Vue from 'vue'

Vue.filter('formatDate', function (value, time = false) {
  if (value) {
    const date = new Date(value.replace(/-/g, '/'))
    let day = date.getDate()
    let month = (date.getMonth() + 1)
    if (day < 10) {
      day = '0' + day
    }
    if (month < 10) {
      month = '0' + month
    }

    return day + '.' + month + '.' + date.getFullYear() + (time ? ' ' + value.split(' ')[1].substr(0, 5) : '')
  }
})

Vue.filter('moneyFilter', function (value) {
  if (value) {
    let str
    if (value.toString().includes('.')) {
      str = value.toFixed(2).toString()
    } else {
      str = value.toString()
    }
    let result = ''

    const isFloat = str.indexOf('.')
    if (isFloat > 0) {
      result = ',' + str.substring(isFloat + 1)
      str = str.slice(0, isFloat)
    } else {
      result = ',00'
    }

    if (str.length - 1 < 3) {
      return str + result
    }

    let index = str.length
    while (index > 0) {
      result = '\u00A0' + str.substring(index - 3, index) + result

      index = index - 3
    }

    return result.trim()
  }
  return value
})
