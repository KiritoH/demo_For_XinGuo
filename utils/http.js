import {config} from '../config.js'

const tips = {
    1: '抱歉，出现了一个错误',
}

class HTTP{
    request(params){
        // url, data, method,
        if(!params.method){
            params.method="GET"
        }
        wx.request({
            url:config.api_base_url + params.url,
            method:params.method,
            data:params.data,
            header:{
                'content-type': 'application/x-www-form-urlencoded',
                //传递sessionId，用于同步
                'Cookie': 'JSESSIONID=' + wx.getStorageSync("sessionId")
            },
            success:(res)=>{
                //2开头一般都是成功（200）
                let code = res.statusCode.toString()
                if (code.startsWith('2')){
                    //回调success函数，异步调用，所以没有return，只能通过’=>‘回调
                    params.success && params.success(res.data)
                }
                //此处一般是4开头
                else{
                    //let error_code = res.data.error_code
                    //由于我的服务器端没有设置特殊的错误响应码，所以这里就简单一些吧
                    this._show_error(1)
                }
            },
            //这里一般是5开头，属于后端程序错误
            fail:(err)=>{
                this._show_error(1)
            }
        })

    }

    _show_error(error_code){
        if(!error_code){
            error_code = 1
        }
        const tip = tips[error_code]
        wx.showToast({
            title: tip?tip:tips[1], 
            icon:'none',
            //持续时间
            duration:2000
        }) 
    }


}

export {HTTP}


















