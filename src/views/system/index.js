let systemManage = () => import(/* webpackChunkName: "systemModel" */'./module/index');
let systemModel = () => import(/* webpackChunkName: "systemModel" */'./systemModel/systemModel');

export default {
    systemManage,
    systemModel
}