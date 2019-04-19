import {observable, action} from 'mobx'

const init = Symbol('init')
const changeOperation = Symbol('changeOperation')
const addPast = Symbol('addPast')
const addFuture = Symbol('addFuture')
// action存放编辑区域的数据
class ActionState {
    constructor() {
        this[init]()
    }
    // 私有方法
    [init]() {
        this.operation.present.push(this.tabPanes)
    }
    // 改变当前操作数据
    [changeOperation](data) {
        this.operation.present.push(data)
    }
    // 添加到过去栈
    [addPast](data) {
        this.operation.past.push(data)
    }
    // 撤回之后添加到未来栈
    [addFuture](data) {
        this.operation.future.push(data)
    }

    @observable tabPanes = [
        { title: 'Tab 1', key: '1', closable: false },
        { title: 'Tab 2', key: '2' },
        { title: 'Tab 3', key: '3' },
    ]
    /*
    past: 过去的数据 , 以数组的形式存放数据, 每次操作之后将数据存放在过去栈，以便与撤回 ,length <= 10 ,可以撤回10次
    present: 现在的数据，不管撤销还是重做操作，都是从栈里依次将数据取出然后替换
    future: 未来的数据 , 撤销之后的数据存放在未来栈，以便重做操作
     */
    @observable operation = {
        past: [],
        present: [],
        future: []
    }
    @observable newTabIndex = 0
    @action addPanes() {
        const activeKey = `newTab${this.newTabIndex++}`
        this.tabPanes.push({ title: 'New Tab', key: activeKey })
        this[changeOperation](this.tabPanes)
    }
    // 撤销
    @action undo() {
        let len = this.operation.past.length
        let present = this.operation.present[0]
        if (len) {
            let past = this.operation.past[len - 1]
            // 移除 past 中的最后一个元素
            this.operation.past.pop()
            // 将上一步移除的元素赋予 present
            this.operation.present.splice(0, 0, past)
            // 将原来的 present 插入到 future 的最前面。
            this.operation.future.unshift(present)
        }
    }
    // 重做
    @action redo() {
        let len = this.operation.future.length
        let present = this.operation.present[0]
        if (len) {
            let futurn = this.operation.future[len - 1]
            // 移除future中的第一个元素
            this.operation.future.shift()
            // 将上一步移除的元素赋予present
            this.operation.present.splice(0, 0, futurn)
            // 将原来的present追加到past后面
            this.operation.past.push(present)
        }
    }
}

let actionstate = new ActionState()

export default actionstate
