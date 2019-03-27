import appstate from './modules/app'
import userstate from './modules/user'
import shapes from './modules/shapes'

class Store {
    get getStoreAll () {
        return {
            appstate,
            userstate,
            shapes
        }
    }
}

export default Store