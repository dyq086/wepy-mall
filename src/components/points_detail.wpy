<!--积分规则-->
<template>
  <view class="detai-content">
    <view class="detai-list" wx:for="{{list}}" wx:key="item">
      <view class="detai-left">
        <view class="detai-name" wx:if="{{item.isdeleted==0}}">每日签到获得</view>
        <view class="detai-name" wx:if="{{item.isdeleted==2}}">连续签到7天获得</view>
        <view class="detai-time">{{item.signTime}}</view>
      </view>
      <view class="detail-right">
        <span class="detail-money">+{{item.signPoint}}</span>
      </view>
    </view>
  </view>
  <!--暂无数据显示-->
  <placeholder :show.sync="is_empty" message="暂无积分数据"></placeholder>
</template>
<script>
import wepy from 'wepy'
import Placeholder from "./common/placeholder"
export default class PointsDetail extends wepy.component {
  props = {
    list: [],
    is_empty: {
      default: false
    }
  }
  components = {
    placeholder: Placeholder
  }
  events = {
    // 'index-broadcast': (...args) => {
    //   let $event = args[args.length - 1]
    //   console.log(`${this.$name} receive ${$event.name} from ${$event.source.name}`)
    // }
  }

  methods = {

  }

  onLoad() {
    // if (this.list.length == 0) {
    //   this.is_empty = true;
    //   this.$apply();

    // }
  }
}

</script>
<style lang="less">
.detai-content {
  background: #fff;
  margin-top: 10rpx;
}

.detai-list {
  align-items: center;
  border-bottom: 1px solid #efefef;
  display: flex;
  height: 150rpx;
  justify-content: space-between;
  margin: 0 40rpx;
}

.detai-time {
  color: #737373;
  font-size: 26rpx;
  margin-top: 20rpx;
}

.detail-right {
  text-align: right;
}

.detail-money {
  color: #eb6623;
  display: block;
  font-size: 40rpx;
}

</style>
