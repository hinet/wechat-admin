<template>
	<view class="container">
		<uni-section class="mb-10" title="公司名称">
			<block v-slot:right>郑州万户网络技术有限公司</block>
		</uni-section>
		<uni-section class="mb-10" title="信用代码">
			<block v-slot:right>914200223652112</block>
		</uni-section>
		<uni-section class="mb-10" title="法人代表">
			<block v-slot:right>周艳艳</block>
		</uni-section>
		<uni-section class="mb-10" title="联系方式">
			<block v-slot:right>13837193800</block>
		</uni-section>
		<uni-section class="mb-10" title="当前状态">
			<block v-slot:right>已完成</block>
		</uni-section>
		<uni-section class="mb-10" title="支付金额">
			<block v-slot:right>300.00</block>
		</uni-section>
		<uni-section class="mb-10" title="小程序APPID">
			<block v-slot:right>wxa522132260025</block>
		</uni-section>
		<uni-section class="mb-10" title="注册时间">
			<block v-slot:right>2022-08-09 15:30</block>
		</uni-section>
		<button type="success">返回首页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.container{
	.uni-section{
		border-bottom: 1px solid #ececec;
	}
	button{
		margin: 30rpx;
	}
}
</style>
