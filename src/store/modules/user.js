import { observable, action } from 'mobx'

class UserState {
    @observable userList = {
        name: '',
        role: '',
        userId: '',
        routeList: []
    }
}

const userState = new UserState()

export default userState