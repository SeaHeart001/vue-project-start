import Vue from 'vue';
import Axios from 'axios';
import qs from 'qs';

console.log(basePath, 'basePath');
const axios = Axios.create(basePath);

//请求拦截器
axios.interceptors.request.use( config => { 
    config.headers.authorization = window.localStorage.getItem('authorization') || 'authorization';
    return config
}, error => {
    confirm('请求服务异常request');
    return Promise.reject(error)
})

//响应拦截器
axios.interceptors.response.use( response => {
    if(response.code === 403){
        confirm('登录凭证过期或异常, 请重新登录');
        window.location.href = '/';
        return
    }
    if(response.headers.authorization){
        window.localStorage.setItem('authorization', response.headers.authorization || 'authorization')
    }else{
        window.localStorage.setItem('authorization', response.headers.authorization || 'authorization')
    }
    
    if(response.config.configData === true){
        return response
    }
    return response.data
}, error =>{
    confirm('请求服务异常response');
    return Promise.reject(error)
})

if(!Vue.prototype.$qs){
    Vue.prototype.$qs = data => qs.stringify(data);
}


export default axios


