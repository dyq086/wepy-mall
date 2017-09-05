<!--组件测试-->
<template>
  
</template>

<script>
  import wepy from 'wepy';
  export default class exchangeGoods extends wepy.page {
    config = {
      navigationBarTitleText: '组件测试',
    }
    data = {
      list: [],
      aways: 0
    }
    onLoad() {
      let arry = {
        days: [{
            is_sign: true
          },
          {
            is_sign: false
          },
          {
            is_sign: false
          },
          {
            is_sign: false
          },
          {
            is_sign: false
          },
          {
            is_sign: false
          },
          {
            is_sign: false
          }
        ],
        aways: 3
      }
      // this.list = arry;
      console.log(arry)
      this.list = arry.days;
      this.aways = arry.aways;
    }
    computed = {}
    methods = {}
    events = {}
  }
</script>

<style lang="less">
  .time_line_box {
    position: relative;
    height: 150rpx;
    overflow: hidden;
    margin: 10rpx;
  }
  .time_line {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 70rpx;
    height: 5rpx;
    background: #dfdfdf;
    transition: transform 0.4s;
  }
  .day-box {
    float: left;
    width: 14.28%;
  }
  .award-jf {
    padding-top: 20rpx;
    font-size: 26rpx;
    color: #999;
  }
  .order_item {
    position: absolute;
    bottom: 0;
    z-index: 2;
    text-align: center;
    font-size: 26rpx;
    padding-bottom: 20rpx;
    color: #666;
  }
  .order_item:after {
    content: '';
    position: absolute;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    bottom: -5rpx;
    height: 10rpx;
    width: 10rpx;
    border-radius: 50%;
    border: 2rpx solid #dfdfdf;
    background-color: #f8f8f8;
  }
  .selected {
    color: #eb6623;
  }
  .selected:after {
    background-color: #eb6623;
    border-color: #eb6623;
  }
  .filling_line {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #eb6623;
    transform-origin: left center;
    transition-property: transform;
    transition-duration: 1.5s;
    transition-timing-function: initial;
    transition-delay: initial;
    transform: scaleX(0)
  }
</style>
