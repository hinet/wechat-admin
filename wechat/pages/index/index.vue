<template>
	<view class="container">
		
		<image class="banner" src="/static/images/banner.png"></image>
		<uni-section class="u-title" title="我的小程序" titleFontSize="16px">
			<template v-slot:right>
				<button type="success" size="mini" @click="apply">注册小程序</button>
			</template>
		</uni-section>
		<uni-tabs class="tabs"></uni-tabs>
		<view class="content">
			<mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption">
				<uni-card title="深圳腾讯技术有限公司" sub-title="张三 410326198204234216" extra="已完成" :border="false" :isFull="true" class="success">
					<view class="uni-body">
						<text class="timed">2022-08-09 15:30</text>
						<button type="default" size="mini" @click="detail">详细信息</button>
					</view>
				</uni-card>
				<uni-card title="深圳腾讯技术有限公司" sub-title="张三 410326198204234216" extra="待支付" :border="false" :isFull="true" class="warning">
					<view class="uni-body">
						<text class="timed">2022-08-09 15:30</text>
						<button type="success" size="mini">立即支付</button>
					</view>
				</uni-card>
				<uni-card title="深圳腾讯技术有限公司" sub-title="张三 410326198204234216" extra="异常" :border="false" :isFull="true" class="error">
					<view class="uni-body">
						<text class="timed">2022-08-09 15:30</text>
						<button type="default" size="mini" @click="detail">详细信息</button>
					</view>
				</uni-card>
			</mescroll-body>
		</view>
	</view>
</template>

<script>
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js"
	import UniTabs from '@/components/uni-tabs/uni-tabs.vue'
	export default {
		mixins: [MescrollMixin], // 使用mixin
		data() {
			return {
				mescroll: null,
				upOption: {
					page: {
						size: 10 // 每页数据的数量,默认10
					},
					noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
					empty: {
						tip: '暂无相关数据'
					}
				},
				// 列表数据
				dataList: []
			}
		},
		onLoad() {

		},
		methods: {
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			//下拉刷新的回调, 重置列表为第一页 (此处可删,mixins已默认)
			downCallback(){
				this.mescroll.resetUpScroll();
			},
			/*上拉加载的回调*/
			upCallback(page) {
				
			},
			apply(){
				uni.navigateTo({
					url:'/pages/apply/apply'
				})
			},
			detail(){
				uni.navigateTo({
					url:'/pages/index/detail'
				})
			}
		},
		components:{
			UniTabs
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.banner {
		width:690rpx;
		height:250rpx;
		margin: 30rpx;
	}
	
	.tabs{
		width: 690rpx;
		margin: 0 30rpx;
	}
	
	.content{
		width: 690rpx;
		margin: 0 0rpx 30rpx 0;
		::v-deep .uni-card{
			box-shadow: none!important;
			border-radius: 10rpx;
			margin-top: 20rpx!important;
			.uni-card__header-content-title{
				font-weight: bold;
			}
			.uni-card__header,
			.uni-card__content{
				padding: 10px 0!important;
			}
			.uni-body{
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				.timed{
					flex: 1;
				}
			}
		}
	}
	
	.warning{
		::v-deep .uni-card__header-extra-text{
			font-weight: bold;
			color: #ff6600!important;
		}
	}
	.error{
		::v-deep .uni-card__header-extra-text{
			font-weight: bold;
			color: #ff2200!important;
		}
	}
	.success{
		::v-deep .uni-card__header-extra-text{
			font-weight: bold;
			color: #00c250!important;
		}
	}

	.u-title {
		width: 730rpx;
		background: none;
		padding: 0 30rpx;
		::v-deep .uni-section {
			background-color: #f3f3f3;
		}
		::v-deep .uni-section__content-title{
			font-weight: bold;
		}
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
