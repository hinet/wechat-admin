const Menu = {
    namespaced: true,
    state() {
        return {
            current: 0
        }
    },
    mutations: {
        current(state: any, index: number) {
            state.current = index
        }
    },
    actions: {
        current: (context: any, index: number) => {
            context.commit('current', index)
        }
    },
    getters: {
        current(state: any){
            return localStorage.getItem("menu_current")
        }
    }
}

export default Menu;