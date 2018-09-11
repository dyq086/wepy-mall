import wepy from 'wepy'
import util from './util'
import md5 from './md5'
import tip from './tip'

const appendInfo = () => {
  const API_SECRET_KEY = 'https://github.com/dyq086/wepy-mall/tree/master/src'
  const TIMESTAMP = util.getCurrentTime()
  const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())
  const MORE = 'more......'
  return {
    'API_SECRET_KEY': API_SECRET_KEY,
    'TIMESTAMP': TIMESTAMP,
    'SIGN': SIGN,
    'MORE': MORE
  }
}
const wxRequest = async (params = {}, url) => {
  console.log('wxRequest')
  tip.loading()
  let data = params.query || {}
  const header = params.header || {
    'Content-Type': 'application/json'
  }
  const isAppend = params.isAppend || false
  if (isAppend) {
    const a = appendInfo()
    for (const k in a) {
      data.k = a.k
    }
  }
  const res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: header
  })
  tip.loaded()
  return res
}

module.exports = {
  wxRequest
}
