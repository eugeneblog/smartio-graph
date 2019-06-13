// app store 存放页面信息
import { observable, action } from 'mobx'

// appstate存放视图数据，如视图的显示隐藏，页面的登陆信息等
class AppState {
    @observable language = ''
    @observable token = ''
    @observable graphTemplate = ''
    @observable version = '0.0.1 测试版'
    @observable showView = {
        editor: true
    }

    @action setView = (name, value) => {
        this.showView[name] = value
    }
    @action getToken() {
        return this.token
    }
    @action addPanes() {
        const activeKey = `newTab${this.newTabIndex++}`
        this.tabPanes.push({ title: 'New Tab', key: activeKey })
    }
}

let mainstate = new AppState()

export default mainstate