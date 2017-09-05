<template>
  <!--index.wxml-->
  <view class="swiper-tab">
    <view wx:for="{{tabList}}" wx:key="index" class="swiper-tab-list {{currentTab==index ? 'active' : ''}}" data-current="{{index}}" bindtap="swichNav">
      {{item.name? item.name:item}}
      <view class=" {{item.dotNum>=100?'dotbig':'dot'}}" wx:if="{{item.dotNum>0}}">{{item.dotNum}}</view>
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'

export default class Filter extends wepy.component {
  props = {
    currentTab: {
      default: 0
    },
    tabList: {
      type: Object
    }
  }

  methods = {
    /**
     * 点击tab切换
     */
    swichNav(e) {
      let that = this;
      if (this.data.currentTab == e.target.dataset.current) {
        return false;
      } else {
        that.currentTab = e.target.dataset.current;
        that.$apply();
      }
      this.$emit("currentTab", that.currentTab)
    },
    /**
     * 头部红点标识
     * @param  {[type]} dotList [description]
     * @return {[type]}         [description]
     */
    changeList(dotList) {
      this.tabList = dotList;
    }
  }


  onLoad() {
    let that = this;

  }
  watch = {
    currentTab(newValue, oldValue) {
      console.log(`currentTab value: ${oldValue} -> ${newValue}`)
    }
  }
}

</script>
<style lang="less">
/**index.wxss**/

.dot {
  position: absolute;
  display: flex;
  width: 37rpx;
  height: 35rpx;
  line-height: 40rpx;
  text-align: center;
  align-items:center;/*垂直居中*/
  justify-content: center;/*水平居中*/
  background: #e52424;
  border-radius: 100px;
  color: #fff;
  z-index: 999;
  font-size: 26rpx;
  top: 0;
  right: -10rpx;
}

.dotbig {
  position: absolute;
  display: flex;
  width: 50rpx;
  height: 35rpx;
  line-height: 40rpx;
  text-align: center;
  align-items:center;/*垂直居中*/
  justify-content: center;/*水平居中*/
  background: #e52424;
  border-radius: 100px;
  color: #fff;
  z-index: 999;
  font-size: 26rpx;
  top: 0;
  right: -10rpx;
}

.swiper-tab {
  width: 100%;
  border-bottom: 1rpx solid #eee;
  text-align: center;
  line-height: 80rpx;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #fff;
}

.swiper-tab-list {
  font-size: 30rpx;
  color: #777777;
  padding: 0 20rpx;
  position: relative;
}

.active {
  color: #eb6623;
  border-bottom: 5rpx solid #eb6623;
}

.swiper-box {
  display: block;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.swiper-item-box {
  overflow-y: scroll;
  overflow-x: hidden;
}

</style>
