// import person from './person';
//let person = () => import('./person');

let personal = () => import(/* webpackChunkName: "personal" */'./personal/personal');

let personalList = () => import(/* webpackChunkName: "personal" */'./personalList/personalList');

let personalManage = () => import(/* webpackChunkName: "personal" */'./personalManage/personalManage');

let personCount = () => import(/* webpackChunkName: "personal" */'./personCount/personCount');
let friendCount = () => import(/* webpackChunkName: "personal" */'./personCount/modulePage/friendCount/friendCount');
let payCount = () => import(/* webpackChunkName: "personal" */'./personCount/modulePage/payCount/payCount');

export default {
    //person,
    personal,
    personalList,
    personalManage,
    personCount,
    friendCount,
    payCount
}