import http from '@/utils/http.js'
export default {
	login: (params) {
		http.post('/api/login', params).then(res => {

		});
	}
}
