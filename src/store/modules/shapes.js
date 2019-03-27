import { observable, action } from 'mobx'

class AppShapes {
    @observable shapesList = [{
        id: '1',
        header: 'This is panel header 1',
        svgGroup: '',
        svgUse: ["icon-GLOBE"]
    }, {
        id: '2',
        header: 'This is panel header 2',
        svgGroup: '',
        svgUse: ["icon-GLOBE"]
    }]

    @action getShape() {
        return this.shapesList
    }
}

let appshapes = new AppShapes()

export default appshapes