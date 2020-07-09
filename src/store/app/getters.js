export default {
    computedMsg(state, getter){
        return state.appMsg
    },

    computedGetterMsg(state, getter){
        return getter.computedMsg + '-' +state.appMsg
    }
}