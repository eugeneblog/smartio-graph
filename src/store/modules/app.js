// app store 存放页面信息
import { observable, action } from 'mobx'

class AppState {
    @observable language = ''
    @observable token = ''
    @observable _ACTIVEFAULT = [] // 存储页面操作记录，用于撤回
    @observable _ACTIVEROLLBACK= [] // 每次撤销存放记录，用于取消撤回,数据回滚

    @action getToken() {
        return this.token
    }
}

let appstate = new AppState()

export default appstate