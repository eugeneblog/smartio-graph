import { observable, computed, action } from 'mobx'
import { message } from 'antd'
class AppState {
    @observable todos = []
    @observable newtodo = ''
    @observable selecteRowKeys = []
    @observable loading = true
    @observable _key = 0
    @observable total = 0

    @action addTodo = () => {
        this._key += 1
    }
    
}