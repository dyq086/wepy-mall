<style lang="less">
@import "./styles/base";
@import "./styles/icon";
@import "./styles/style";

</style>
<script>
import wepy from 'wepy';
import 'wepy-async-function'
import {
  USER_SPECICAL_INFO,
  USER_INFO,
  SYSTEM_INFO,
  ADDRESS_ID,
  SEL_CLASS_CODE
} from "./utils/constant";
import {
  wxJsCode2Session,
  user2session
} from './api/api';

export default class extends wepy.app {
  config = {
    pages: [
      'pages/home',
      'pages/home_detail',
      'pages/classify',
      'pages/shop_cart',
      'pages/info',
      'pages/search',
      'pages/test',
      'pages/sign_in',
      'pages/exchange_goods',
      'pages/wholesale',
      'pages/replenishment_goods',
      'pages/register',
      'pages/order',
      'pages/reorder',
      'pages/pay_success',
      'pages/points',
      'pages/points_more',
      'pages/points_rule',
      'pages/collection',
      'pages/messages',
      'pages/setting',
      'pages/goods_detail',
      'pages/comfire_order',
      'pages/address',
      'pages/order_detail',
      'pages/filter',
      'pages/logistics',
      'pages/comment',
      'pages/comment_add'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#FFFFFF',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh: false,
      backgroundColor: '#EFEFEF'

    },
    "tabBar": {
      "color": "#999999",
      "selectedColor": "#ff6a3c",
      "backgroundColor": "#ffffff",
      "borderStyle": "black",
      "list": [{
        "pagePath": "pages/home",
        "text": "首页",
        "iconPath": "images/icon_home.png",
        "selectedIconPath": "images/icon_home_active.png"
      }, {
        "pagePath": "pages/classify",
        "text": "分类",
        "iconPath": "images/icon_classify.png",
        "selectedIconPath": "images/icon_classify_active.png"
      }, {
        "pagePath": "pages/shop_cart",
        "text": "购物车",
        "iconPath": "images/icon_shop_cart.png",
        "selectedIconPath": "images/icon_shop_cart_active.png"
      }, {
        "pagePath": "pages/info",
        "text": "我",
        "iconPath": "images/icon_info.png",
        "selectedIconPath": "images/icon_info_active.png"
      }]
    }
  }

  globalData = {
    userInfo: null,
    appid: 'wx6b121941b200ea50',
    secret: '36a76b0682bd2c3f1541fd012fac66f5',
  }

  constructor() {
    super()
    this.use('requestfix')
    this.use('promisify');

  }

  async onLaunch() {
    let that = this;
    //用户信息
    let userSpecialInfo = wepy.getStorageSync(USER_SPECICAL_INFO) || {};

    // 用户普通信息
    let userInfo = wepy.getStorageSync(USER_INFO) || {};

    //如果信息过期
    if ((!userSpecialInfo.openid || (userSpecialInfo.expires_in || Date.now()) < (Date.now() + 600)) && (!userInfo.nickName)) {
      let res = await wepy.login();
      if (res.code) {
        let d = that.globalData; //这里存储了appid、secret、token串    
        //存储userInfo 
        let c = await wepy.getUserInfo();
        wepy.setStorageSync(USER_INFO, c.userInfo);

        //存储系统信息 
        let systemInfo = wepy.getSystemInfoSync();
        wepy.setStorageSync(SYSTEM_INFO, systemInfo);

        wxJsCode2Session({
          query: {
            jsCode: res.code,
            nickName: c.userInfo.nickName
          }
        }).then(resp => {
          var rlt = resp.data;
          console.log("wxJsCode2Session..." + JSON.stringify(rlt));
          if (rlt.result) {
            var data = rlt.data;
            if (data.openid) {
              let obj = {};
              obj.openid = data.openid;
              obj.expires_in = Date.now() + data.expires_in;
              //存储openid 
              wepy.setStorageSync(USER_SPECICAL_INFO, obj);
            }
          } else {
            let obj = {};
            obj.openid = "oeuj50KHMqsh5kYZYWQJuwmY5yG0";
            obj.expires_in = "7200";
            //存储openid 
            wepy.setStorageSync(USER_SPECICAL_INFO, obj);
          }
        });

        let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';

        /* let b = await wepy.request({
             url: url,
             data: {},
             method: 'POST',
             header: {
                 'content-Type': 'application/x-www-form-urlencoded'
             }
         });
         if (b.data.openid) {
             let obj = {};
             obj.openid = b.data.openid;
             obj.expires_in = Date.now() + b.data.expires_in;

             //存储openid 
             wepy.setStorageSync(USER_SPECICAL_INFO, obj);

             //存储userInfo 
             let c = await wepy.getUserInfo();
             wepy.setStorageSync(USER_INFO, c.userInfo);

             //存储系统信息 
             let systemInfo = await wepy.getSystemInfoSync();
             wepy.setStorageSync(SYSTEM_INFO, systemInfo);
             console.log(b, '登陆成功')
         }*/

      } else {
        console.log('获取用户登录态失败！' + res.errMsg)
      }

    }
  }
}

</script>
