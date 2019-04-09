// app store 存放页面信息
import { observable, action } from 'mobx'
import { getTemplate } from '../../api/index'

class AppState {
    @observable language = ''
    @observable token = ''
    @observable newTabIndex = 0
    @observable tabPanes = [
        { title: 'Tab 1', key: '1', closable: false },
        { title: 'Tab 2', key: '2' },
        { title: 'Tab 3', key: '3' },
    ]
    @observable _ACTIVEFAULT = [] // 存储页面操作记录，用于撤回
    @observable _ACTIVEROLLBACK= [] // 每次撤销存放记录，用于取消撤回,数据回滚
    @observable graphTemplate = ''

    @action getToken() {
        return this.token
    }
    @action addPanes() {
        const activeKey = `newTab${this.newTabIndex++}`;
        this.tabPanes.push({ title: 'New Tab', key: activeKey });
    }
}

let mainstate = new AppState()

export default mainstate