import wepy from 'wepy';
import util from './util';
import md5 from './md5';


const API_SECRET_KEY = 'www.mall.cycle.com'
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async(params = {}, url) => {
    wepy.showToast({
        title: '加载中',
        icon: 'loading'
    });
    let data = params.query || {};
    data.sign = SIGN;
    data.time = TIMESTAMP;
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: { 'Content-Type': 'application/json' },
    });
    wepy.hideToast();
    return res;
};


module.exports = {
    wxRequest
}
