function getCurrentTime() {
  let keep = ''
  let date = new Date()
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  let f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  keep = y + '' + m + '' + d + '' + h + '' + f + '' + s
  return keep // 20160614134947
}

function objLength(input) {
  let type = toString(input)
  let length = 0
  if (type !== '[object Object]') {
    // throw '输入必须为对象{}！'
  } else {
    for (let key in input) {
      if (key !== 'number') {
        length++
      }
    }
  }
  return length
}
// 验证是否是手机号码
function vailPhone(number) {
  let flag = true
  let myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/
  if (number.length !== 11 || !myreg.test(number)) {
    flag = false
  }
  return flag
}
// 验证是否西班牙手机(6开头 9位数)
function ifSpanish(number) {
  let flag = true
  let myreg = /^([6|7|9]{1}(\d+){8})$/
  if (number.length !== 9 || !myreg.test(number)) {
    flag = false
  }
  return flag
}
// 浮点型除法
function div(a, b) {
  let c, d, e, f
  try {
    e = a.toString().split('.')[1].length
  } catch (g) { }
  try {
    f = b.toString().split('.')[1].length
  } catch (g) {}
  // [eslint] Return statement should not contain assignment. (no-return-assign)
  c = Number(a.toString().replace('.', ''))
  d = Number(b.toString().replace('.', ''))
  return mul(c / d, Math.pow(10, f - e))
}
// 浮点型加法函数
function accAdd(arg1, arg2) {
  let r1, r2, m
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  return ((arg1 * m + arg2 * m) / m).toFixed(2)
}
// 浮点型乘法
function mul(a, b) {
  let c = 0
  let d = a.toString()
  let e = b.toString()
  try {
    c += a.toString().split('.')[1].length
  } catch (f) { }
  try {
    c += b.toString().split('.')[1].length
  } catch (f) { }
  return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c)
}

//  遍历对象属性和值
function displayProp(obj) {
  let names = ''
  for (let name in obj) {
    names += name + obj[name]
  }
  return names
}
//  去除字符串所有空格
function sTrim(text) {
  return text.replace(/\s/g, '')
}
// 去除所有:,英文冒号
function replaceColon(txt) {
  return txt.replace(/:/g, '')
}
// 转换星星分数
function convertStarArray(score) {
  // 1 全星,0 空星,2半星
  let arr = []
  for (let i = 1; i <= 5; i++) {
    if (score >= i) {
      arr.push(1)
    } else if (score > i - 1 && score < i + 1) {
      arr.push(2)
    } else {
      arr.push(0)
    }
  }
  return arr
}
var states = {
    CN1: '云南省',
    CN2: '北京市',
    CN3: '天津市',
    CN4: '河北省',
    CN5: '山西省',
    CN6: '内蒙古自治区',
    CN7: '辽宁省',
    CN8: '吉林省',
    CN9: '黑龙江省',
    CN10: '上海市',
    CN11: '江苏省',
    CN12: '浙江省',
    CN13: '安徽省',
    CN14: '福建省',
    CN15: '江西省',
    CN16: '山东省',
    CN17: '河南省',
    CN18: '湖北省',
    CN19: '湖南省',
    CN20: '广东省',
    CN21: '广西壮族自治区',
    CN22: '海南省',
    CN23: '重庆市',
    CN24: '四川省',
    CN25: '贵州省',
    CN26: '陕西省',
    CN27: '甘肃省',
    CN28: '青海省',
    CN29: '宁夏回族自治区',
    CN30: '澳门',
    CN31: '西藏自治区',
    CN32: '新疆维吾尔自治区'
};

// 省名获取省代码
function getStateCode(provinceName) {
    for (var stateCode in states) {
        if (states[stateCode] == provinceName || states[stateCode] == `${provinceName}省`) {
            return stateCode;
        }
    }
}

// 省代码获取省名
function getStateName(stateCode) {
    return states[stateCode];
}


module.exports = {
  getCurrentTime: getCurrentTime,
  objLength: objLength,
  displayProp: displayProp,
  sTrim: sTrim,
  replaceColon: replaceColon,
  vailPhone: vailPhone,
  ifSpanish: ifSpanish,
  div: div,
  mul: mul,
  accAdd: accAdd,
  convertStarArray: convertStarArray,
  getStateCode,
  getStateName
}
