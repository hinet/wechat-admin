import moment from 'moment'
const User = {
    namespaced: true,
    state() {
        return {
            token: null,
            expiresTime: null,
            username: null,
        }
    },
    mutations: {
        login(state: any, data: any) {
            state.token = data.jwt
            state.expiresTime = String(moment().add(12, 'hours').valueOf())
            state.username = data.username
        }
    },
    actions: {
        login: (context: any, data: any) => {
            context.commit('current', data)
        },
        logout(){

        },
        refreshToken(){

        }
    },
    getters: {
        isLogin(state: any){
            if (!state.token || !state.expiresTime) {
                return false;
            }else{
                const now = moment().valueOf()
                const timeDiff = Number(state.expiresTime) - now
                if (timeDiff) {
                    // 少于3小时刷新token 3 * 60 * 60 * 1000
                    if (timeDiff < (3 * 60 * 60 * 1000)) {
                        // refreshToken()
                    }
                    return true
                } else {
                    //logout
                    return false
                }
            }
        }
    }
}

export default User;