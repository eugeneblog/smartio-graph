import mainstate from './modules/app'
import userstate from './modules/user'
import shapes from './modules/shapes'
import menustate from './modules/menu'
import actionstate from './modules/action'

class Store {
    get getStoreAll () {
        return {
            mainstate,
            userstate,
            shapes,
            menustate,
            actionstate
        }
    }
}

export default Store