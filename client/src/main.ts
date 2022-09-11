import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TDesign from 'tdesign-vue-next'
import {Icon} from 'tdesign-icons-vue-next';

import './assets/main.css'
// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';

const app = createApp(App,{
    Icon: Icon
})

app.use(router)
app.use(store);
app.use(TDesign);
app.component("Icon",Icon);

app.mount('#app')
