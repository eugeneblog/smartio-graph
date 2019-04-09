import mainstate from './modules/app'
import userstate from './modules/user'
import shapes from './modules/shapes'

class Store {
    get getStoreAll () {
        return {
            mainstate,
            userstate,
            shapes
        }
    }
}

export default Store