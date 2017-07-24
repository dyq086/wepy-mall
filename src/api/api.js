import {
  wxRequest
} from '../utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'https://api.tangxinmao.com'
const apiPassport = 'https://api-mall' + env + '.etcchebao.com'

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const getDiscoverList = (params) => wxRequest(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/api/wechat/jscode2session");
const user2session = (params) => wxRequest(params, apiMall + "/api/wechat/user2session?jsoncallback=?");

//商品接口---begin
//首页发现商品接口
const hostGoodsList = (params) => wxRequest(params, apiMall + '/api/home/hostGoodsList');
//查询商品列表
const getGoodsList = (params) => wxRequest(params, apiMall + '/api/mall/searchGoodsList');
//查询商品详情
const getGoodsDetail = (params) => wxRequest(params, apiPassport + '/goods/detail');
//查询商品详情信息
const goodsDetail = (params) => wxRequest(params, apiMall + '/api/mall/goods');
//商品加入购物车
const addCart = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/add');
//用户的购物车商品列表
const cartList = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/list');
//购物车的商品选中状态
const cartCheck = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/check');
//购物车的商品删除
const cartDel = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/delete');
//购物车的商品数量更新
const cartUpdateNum = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/updateNum');
//直接购买商品
const preOrder = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/commitData');
//商品接口---end

//用户相关信息--begin
//用户的当天签到信息
const userSginInfo = (params) => wxRequest(params, apiMall + '/api/userSign/signInfo');
const doSign = (params) => wxRequest(params, apiMall + '/api/userSign/doSign');

//用户积分信息
const pointInfo = (params) => wxRequest(params, apiMall + '/api/userPoint/pointInfo');

//用户足迹信息
const browseInfo = (params) => wxRequest(params, apiMall + '/api/userBrowse/browseInfo');

//用户收藏的商品
const favoriteInfo = (params) => wxRequest(params, apiMall + '/api/goodsFavorite/favoriteInfo');

//用户消息
const messageInfo = (params) => wxRequest(params, apiMall + '/api/systemMessage/messageInfo');

//用户手机绑定
const registerUser = (params) => wxRequest(params, apiMall + '/api/userCenter/register');

//用户是否绑定手机号
const getUserInfo = (params) => wxRequest(params, apiMall + '/api/userCenter/getUserInfo');

//用户收货地址
const getUserAddress = (params) => wxRequest(params, apiMall + '/api/userAddress/getUserAddress');

//用户相关信息--end

module.exports = {
  hostGoodsList,
  getGoodsDetail,
  getDiscoverList,
  getGoodsList,
  goodsDetail,
  wxJsCode2Session,
  user2session,
  userSginInfo,
  doSign,
  addCart,cartList,cartCheck,cartDel,cartUpdateNum,
  preOrder,
  pointInfo,
  browseInfo,
  favoriteInfo,
  messageInfo,
  registerUser,
  getUserInfo,
  getUserAddress
}
