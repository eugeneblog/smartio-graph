import { observable, action } from 'mobx'

class AppShapes {
    @observable shapesList = [{
        id: '1',
        header: 'General',
        svgGroup: '',
        svgUse: ["icon-GLOBE"],
        svgGroup: [
            `<rect x="2" y="2" width="37" height="37" fill="#ffffff" stroke="#000000"></rect>`,
            `<rect x="2" y="11" width="37" height="19" fill="#ffffff" stroke="#000000"></rect>`
        ]
    }]

    @action getShape() {
        return this.shapesList
    }
}

let appshapes = new AppShapes()

export default appshapes