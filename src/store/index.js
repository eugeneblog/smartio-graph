import appstate from './modules/app'
import userstate from './modules/user'

class Store {
    get getStoreAll () {
        return {
            appstate,
            userstate
        }
    }
}

export default Store