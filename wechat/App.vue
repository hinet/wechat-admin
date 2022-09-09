<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f3f3f3;
	}
	button[type='default']{
		background-color: transparent!important;
	}
	button[type='success']{
		color: #fff;
		background-color: #00c250;
	}
	button[size='mini']{
		padding: 0 15rpx!important;
	}
	/*每个页面公共css */
</style>
