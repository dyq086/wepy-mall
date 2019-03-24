import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip'
import {
  TOKEN,
} from '@/utils/constant';

const API_SECRET_KEY = 'www.mall.cycle.com'
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())
// const GUEST_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbGluZ3F1bGUucGFwYW1rLmNvbSIsImlhdCI6MTU1Mjc1MjcxMiwibmJmIjoxNTUyNzUyNzEyLCJleHAiOjE1NTMzNTc1MTIsImRhdGEiOnsidXNlciI6eyJpZCI6IjMifX19.SOnuJDt--BrsvzAeRC0QZu7Rm6m56JUNeu0oci-ep58'

const wxRequest = async(params = {}, url, method = 'GET') => {
    tip.loading();
    let data = params.query || {};
    data.sign = SIGN;
    data.time = TIMESTAMP;
    let header = { 
          'Content-Type': 'application/json'
        }
    let res = await wepy.request({
        url: url,
        method: params.method || method,
        data: data,
        header,
    });
    tip.loaded();
    return res;
};

const request = async(url, params = {}) => {
    tip.loading();
    let data = params.query || {};
    // data.sign = SIGN;
    // data.time = TIMESTAMP;
    let token = wepy.getStorageSync(TOKEN);
    let header = params.header || { 
          'Content-Type': 'application/json',
        }
    // if (!token) {
    //   token = GUEST_TOKEN;
    // }
    if (token) {
      header['Authorization'] = `Bearer ${token}`
    }
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header,
    });
    tip.loaded();
    return res;
};


module.exports = {
    wxRequest,
    request
}
