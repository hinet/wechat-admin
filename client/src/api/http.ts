import { MessagePlugin } from 'tdesign-vue-next';
import axios, {type AxiosRequestConfig, type AxiosResponse} from "axios";
export const HOST = import.meta.env.DEV ? '/api/wxcomponent' : '/wxcomponent'

const http = axios.create({
    baseURL: HOST,
    timeout: 6000
});
//请求拦截
http.interceptors.request.use((config: AxiosRequestConfig) =>{
    let token = localStorage.getItem("token");
    config.headers!.Authorization = `Bearer ${token}`;
    return config;
},(error)=>{
    return Promise.reject(error)
});
//响应拦截
http.interceptors.response.use((response: AxiosResponse)=>{
    return response;
},(error)=>{
    if(error.code == 'ERR_BAD_RESPONSE'){
        MessagePlugin.error("网络请求失败")
    }
    console.log(error.code)
    return Promise.reject(error)
});

export default http;