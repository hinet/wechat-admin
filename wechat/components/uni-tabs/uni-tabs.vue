<template>
	<view class="uni-tabs">
		<block v-for="(item,index) in options">
		<view :class="'uni-tabs-item'+ (current==index ? ' active' : '')" @click="tabChanged(index)">
			<text class="u-text">{{item.name}}</text>
			<view class="indicator"></view>
		</view>
		</block>
	</view>
</template>

<script>
	export default {
		name:"uni-tabs",
		data() {
			return {
				options: [
					{name:'全部'},
					{name:'待付款'},
					{name:'待认证'},
					{name:'异常'},
					{name:'已完成'},
				],
				current: 0
			};
		},
		methods:{
			tabChanged(index){
				this.current = index;
			}
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