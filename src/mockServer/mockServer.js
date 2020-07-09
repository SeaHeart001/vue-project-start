import Mock from 'mockjs';
import dataJson from './data.json'
//console.log(dataJson);
Mock.setup({
    timeout: '100-2000' // 表示响应时间，默认值是'10-100'。
})

Mock.mock('/api/test', 'post', {
    state: 1,
    msg: '测试模拟接口'
})

Mock.mock('/api/menu', 'post', {
    state: 1,
    data: dataJson.menuList
})