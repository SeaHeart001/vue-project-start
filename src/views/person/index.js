// import person from './person';
let person = () => import('./person');

let personal = () => import('./modulePage/personal/personal');

let personalList = () => import('./modulePage/personalList/personalList');

let personalManage = () => import('./modulePage/personalManage/personalManage');

let personCount = () => import('./modulePage/personCount/personCount');
let friendCount = () => import('./modulePage/personCount/modulePage/friendCount/friendCount');
let payCount = () => import('./modulePage/personCount/modulePage/payCount/payCount');

export default {
    person,
    personal,
    personalList,
    personalManage,
    personCount,
    friendCount,
    payCount
}