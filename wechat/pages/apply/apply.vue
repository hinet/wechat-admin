<template>
	<view class="container">
		<uni-forms ref="form" :model="form" :rules="rules" label-width="120" label-position="top" err-show-type="toast">
			<uni-forms-item  label="企业名称" name="name">
				<input type="text" v-model="form.name" placeholder="请填写企业名称" />
			</uni-forms-item>
			<uni-forms-item  label="统一社会信用代码/营业执照号" name="license">
				<input type="text" v-model="form.license" placeholder="请填写统一社会信用代码/营业执照号" />
			</uni-forms-item>
			<uni-forms-item  name="fullname" label="法人姓名">
				<input type="text" v-model="form.fullname" placeholder="请填写法人姓名"/>
			</uni-forms-item>
			<uni-forms-item  name="wechat" label="法人微信号">
				<input type="text" v-model="form.wechat" placeholder="请填写法人微信号(非手机号)"/>
			</uni-forms-item>
			<uni-forms-item  name="phone" label="法人手机号">
				<input type="text" v-model="form.phone" placeholder="请填写法人手机号"/>
			</uni-forms-item>
		</uni-forms>
		<button type="success" @click="submit" class="submit-btn">提交注册</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					name: '',
					license: '',
					fullname: '',
					wechat: '',
					phone: '',
				},
				rules: {
					name:{
						rules:[{
							required: true,
							errorMessage: '请填写企业名称',
						}]
					},
					license:{
						rules:[{
							required: true,
							errorMessage: '请填写统一信用代码',
						}]
					},
					fullname:{
						rules:[{
							required: true,
							errorMessage: '请填写法人姓名',
						}]
					},
					wechat:{
						rules:[{
							required: true,
							errorMessage: '请填写法人微信号',
						}]
					},
					phone:{
						rules:[{
							required: true,
							errorMessage: '请填写法人手机号',
						}]
					},
				}
			}
		},
		methods: {
			submit(){
				this.$refs.form.validate().then((res)=>{
					// 成功返回，res 为表单数据
					// 其他逻辑处理 
					// ...
				}).catch((err)=>{
					// 表单校验验失败，err 为具体错误信息
					// 其他逻辑处理
					// ...
				})
			},
			reset(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	::v-deep .uni-forms{
		padding: 20rpx 30rpx;
		background-color: #ffffff;
		.uni-forms-item {
			margin-bottom: 20rpx;
			.uni-forms-item__label{
				color: #333;
				font-size: 32rpx;
			}
		}
		input{
			line-height: 72rpx;
			height: 72rpx;
			min-height: 72rpx;
			border: 1px solid #e3e3e3;
			border-radius: 10rpx;
			background-color: #fff;
			padding-left: 10px;
			font-size: 30rpx;
		}
	}
	.submit-btn{
		margin: 30rpx;
	}
}
</style>
