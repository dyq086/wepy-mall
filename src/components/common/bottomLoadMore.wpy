<template>
    <view class="loadMoreGif" wx:if="{{show}}">
        <image src="../../images/loadding.gif" />
        <text>{{message}}</text>
    </view>
</template>
<script>
import wepy from 'wepy'
export default class Placeholder extends wepy.component {
    props = {
        show: {
            type: Boolean,
            default: false
        },
        message: {
            default: '正在加载中'
        }
    };
}
</script>
<style lang="less">
.loadMoreGif {
    margin: 15rpx auto;
    width: 220rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    text {
        font-size: 30rpx;
        color: #999;
        margin-left: 10rpx;
    }
    image {
        width: 30rpx;
        height: 30rpx;
    }
}
</style>
