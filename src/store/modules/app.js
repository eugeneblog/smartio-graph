import { observable, action } from 'mobx'

class AppState {
    @observable token = ''
    @observable menuList = []
    @action getMenuList () {
        // ajax 获取菜单列表
    }

    @action getToken () {
        return this.getToken
    }
}

const appState = new AppState()

export default appState