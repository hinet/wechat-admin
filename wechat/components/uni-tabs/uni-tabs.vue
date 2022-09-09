<template>
	<view class="uni-tabs">
		<view class="uni-tabs-item active">
			<text class="u-text">全部</text>
			<view class="indicator"></view>
		</view>
		<view class="uni-tabs-item">
			<text class="u-text">待付款</text>
			<view class="indicator"></view>
		</view>
		<view class="uni-tabs-item">
			<text class="u-text">待认证</text>
			<view class="indicator"></view>
		</view>
		<view class="uni-tabs-item">
			<text class="u-text">异常</text>
			<view class="indicator"></view>
		</view>
		
		<view class="uni-tabs-item">
			<text class="u-text">已完成</text>
			<view class="indicator"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"uni-tabs",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.uni-tabs{
	width: 100%;
	background-color: #ffffff;
	display: flex;
	flex-direction: row;
	border-radius: 10rpx;
	.uni-tabs-item{
		flex: 1;
		white-space: nowrap;
		height: 88rpx;
		position: relative;
		text-align: center;
		.u-text{
			padding: 10rpx 20rpx;
			line-height: 88rpx;
			font-size: 30rpx;
		}
		.indicator{
			position: absolute;
			bottom: 0;
			width: 100%;
			display: flex;
			justify-content: center;
			
		}
		&.active{
			.u-text{
				color: #00c250;
				font-weight: bold;
			}
			.indicator{
				&::after{
					content: " ";
					width: 60rpx;
					height: 4rpx;
					background: #00c250;
				}
			}
		}
	}
}
</style>