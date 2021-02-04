var messageType = {

    'info': '提示', 
    'success': '成功', 
    'error': '错误', 
    'warning' : '警告'
    
};
    
var messageSeries = ['$alert', '$confirm'];

export default {
    
    install (Vue, option) {
        /**
         * 自定义alert, confirm
         */
        for(let i=0; i<messageSeries.length; i++){

            let messageBox = messageSeries[i]

            for(let key in messageType){

                Vue.prototype[messageBox][key] = (options) => {
                    
                    if( typeof(options) === 'string' ){
                        return Vue.prototype[messageBox](options, messageType[key], { type : key })
                    };
    
                    options.type = key;

                    // options.callback = () => {
                    //     console.log('qx')
                    // }
                    
                    return Vue.prototype[messageBox](options.message || '..', options.title || messageType[key], options)
                }
    
            }

        } 
    }
}