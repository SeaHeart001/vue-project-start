// import person from './person';
//let person = () => import('./person');

let personal = () => import('./personal/personal');

let personalList = () => import('./personalList/personalList');

let personalManage = () => import('./personalManage/personalManage');

let personCount = () => import('./personCount/personCount');
let friendCount = () => import('./personCount/modulePage/friendCount/friendCount');
let payCount = () => import('./personCount/modulePage/payCount/payCount');

export default {
    //person,
    personal,
    personalList,
    personalManage,
    personCount,
    friendCount,
    payCount
}