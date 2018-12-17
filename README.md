### 安装（更新） wepy 命令行工具。
	npm install wepy-cli -g

### 安装依赖包
	npm install

### 开发实时编译。
	npm run dev

### 生产压缩
	npm run build //上传代码时，请先执行此命令，否则会提示包体积过大


### 开发使用说明(重要)

1、使用微信开发者工具-->添加项目，项目目录请选择dist目录。

2、微信开发者工具-->项目-->关闭ES6转ES5。 <font color=red>重要：漏掉此项会运行报错。</font> 

3、微信开发者工具-->项目-->关闭上传代码时样式自动补全。  <font color=red>重要：某些情况下漏掉此项也会运行报错。</font> 

4、微信开发者工具-->项目-->关闭代码压缩上传。  <font color=red>重要：开启后，会导致真机computed, props.sync 等等属性失效。</font> 



### wepy开发文档地址
	https://tencent.github.io/wepy/

### 小程序开发文档
	http://mp.weixin.qq.com/debug/wxadoc/dev/

### 演示地址

打开微信扫一扫

<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/qr.jpg" width="200" height="200"/> 

    
### 目录结构

    ├── api
    │   └── api.js              //接口
    ├── app.wpy                 //入口文件
    ├── components                  //组件
    │   ├── address_add.wpy         //新增地址组件
    │   ├── address_edit.wpy        //编辑地址组件
    │   ├── address_list.wpy        //地址列表组件
    │   ├── bomb_screen.wpy         //首页弹屏组件
    │   ├── collection_list.wpy     //收藏列表组件
    │   ├── comment_list.wpy        //评论列表组件
    │   ├── common              //公共组件
    │   │   ├── bottomLoadMore.wpy      //底部加载更多组件
    │   │   ├── placeholder.wpy         //空列表显示组件
    │   │   ├── timer.wpy               //倒计时组件
    │   │   ├── wepy-area-picker.wpy    //省市区组件
    │   │   ├── wepy-sign-time.wpy      //签到组件
    │   │   └── wepy-swipe-delete.wpy   //左滑删除组件
    │   ├── discover.wpy        //发现列表
    │   ├── filterSlider.wpy    //筛选右侧栏组件
    │   ├── filter_bar.wpy      //分类排序组件
    │   ├── order_item.wpy      //订单列表组件
    │   ├── points_detail.wpy   //列表组件
    │   ├── points_rule.wpy     //列表组件
    │   ├── rate.wpy            //评分组件
    │   ├── search.wpy          //搜索组件
    │   ├── shop_cart.wpy       //购物车组件
    │   ├── shop_grid_list.wpy  //矩阵列表
    │   ├── shop_item_list.wpy  //条形列表
    │   └── tab.wpy             //选项卡组件
    ├── images                  //图片文件夹
    ├── pages                   //页面
    │   ├── address.wpy         //地址
    │   ├── classify.wpy        //分类
    │   ├── collection.wpy      //收藏
    │   ├── comfire_order.wpy   //确认订单
    │   ├── comment.wpy         //评论列表
    │   ├── comment_add.wpy     //添加评论
    │   ├── exchange_goods.wpy  //换货
    │   ├── filter.wpy          //筛选
    │   ├── goods_detail.wpy    //商品详情
    │   ├── home.wpy            //首页
    │   ├── home_detail.wpy     //首页详情
    │   ├── info.wpy            //我的
    │   ├── logistics.wpy       //物流
    │   ├── messages.wpy        //我的消息
    │   ├── order.wpy           //订单列表
    │   ├── order_detail.wpy    //订单详情
    │   ├── pay_success.wpy     //支付结果
    │   ├── points.wpy          //积分
    │   ├── points_more.wpy     //更多积分
    │   ├── points_rule.wpy     //积分规则
    │   ├── register.wpy        //注册
    │   ├── reorder.wpy         //--
    │   ├── replenishment_goods.wpy //补货
    │   ├── search.wpy          //搜索
    │   ├── setting.wpy         //设置
    │   ├── shop_cart.wpy       //购物车
    │   ├── sign_in.wpy         //签到
    │   ├── test.wpy            //---
    │   └── wholesale.wpy       //现货批发
    ├── plugins                 //插件
    │   └── wxParse             //富文本
    │       ├── html2json.js
    │       ├── htmlparser.js
    │       ├── showdown.js
    │       ├── wxDiscode.js
    │       ├── wxParse.js
    │       ├── wxParse.wxml
    │       └── wxParse.wxss    
    ├── styles                  //样式
    │   ├── base.less
    │   ├── icon.less           // 图标文件
    │   └── style.less
    └── utils                   //工具类
        ├── constant.js             //常量
        ├── md5.js                  //md5
        ├── regions.js              //省市区数据
        ├── tip.js                  //提示弹框组件
        ├── util.js                 //工具
        └── wxRequest.js            //ajax请求




### 部分功能截图


<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG263.jpeg" width="365" height="619" /> 	<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG264.jpeg" width="365" height="619"/> 


<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG265.jpeg" width="365" height="619"/> 		<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG266.jpeg" width="365" height="619"/> 

<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG267.jpeg" width="365" height="619"/>		 <img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG268.jpeg" width="365" height="619"/> 

<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG269.jpeg" width="365" height="619"/>		 <img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG270.jpeg" width="365" height="619"/> 


<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG271.jpeg" width="365" height="619"/>		 <img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG272.jpeg" width="365" height="619"/> 

<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG273.jpeg" width="365" height="619"/>		 <img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG274.jpeg" width="365" height="619"/> 

<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG275.jpeg" width="365" height="619"/> 



### 说明

此小程序借助于wepy进行高度的组件封装，仅供学习参考。喜欢就动手点个star吧~^o^~

### 如需合作请加
qq:490844594  微信:dyq088

 ### 友情赞助
 如果本项目对你有较大的帮助，可以对我打赏，否则不需要，随便放个二维码，看看有没有对我特别好的小伙伴 ~ 哈哈 
<img src="https://github.com/dyq086/wxYuHanStore/blob/master/screenshots/WechatIMG276.jpg" width="400" height="400"/> 

