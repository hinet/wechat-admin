const BASE_URL = 'http://localhost:8888';

const http = {
	request: ({
		url,
		data = {},
		method = 'get',
		header = {},
	}) => {
		let token = uni.getStorageSync('token') || '';
		if (!url) return;
		return new Promise((resolve, reject) => {
			uni.request({
				url: BASE_URL + url,
				method,
				data,
				header: {
					token,
					...header
				},
				success: (res) => {
					resolve(res)
				},
				fail: (err) => {
					reject(err);
				}
			});
		})
	},
	post: (url, data = {}, header = {}) => {
		return this.request({
			url,
			data,
			'post',
			header
		});
	},
	get: (url, data = {}, header = {}) => {
		return this.request({
			url,
			data,
			'get',
			header
		});
	}
};
export default http;
