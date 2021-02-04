import Eimtter from 'element-ui/src/mixins/emitter'

export default {
    install (Vue, option) {
        Vue.prototype.$dispatch = Eimtter.methods.dispatch;
        Vue.prototype.$broadcast = Eimtter.methods.broadcast;
    }
}