import { observable, action } from 'mobx'

class UserState {
    @observable userList = {
        name: '',
        role: '',
        uid: ''
    }

    @action getUserList() {
        return this.userList
    }
}

const userstate = new UserState()

export default userstate