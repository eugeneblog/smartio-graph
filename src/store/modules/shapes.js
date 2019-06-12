/* eslint-disable no-dupe-keys */
import { observable, action } from 'mobx'

// shapes存放所有已加载的图形
class AppShapes {
    @observable shapesList = []

    @action getShape() {
        return this.shapesList
    }
    @action setShape(list) {
        this.shapesList = list
    }
}

let appshapes = new AppShapes()

export default appshapes