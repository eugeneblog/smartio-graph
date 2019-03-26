import { observable, action } from 'mobx'

class AppShapes {
    @observable shapesList = []

    @action getShape() {
        return this.shapesList
    }
}

let appshapes = new AppShapes()

export default appshapes