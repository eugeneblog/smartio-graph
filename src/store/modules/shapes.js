import { observable, action } from 'mobx'

// shapes存放所有已加载的图形
class AppShapes {
    @observable shapesList = [{
        id: '1',
        header: 'General',
        svgGroup: '',
        svgUse: ["icon-GLOBE"],
        svgGroup: [
            `<rect x="2" y="2" width="37" height="37" fill="#ffffff" stroke="#000000"></rect>`,
            `<rect x="2" y="11" width="37" height="19" fill="#ffffff" stroke="#000000"></rect>`,
            `<path d="M 2 8 L 39 8 L 39 29 Q 30 23 21 29 Q 11 36 2 29 L 2 12 Z" fill="#ffffff" stroke="#000000"></path>`,
            `<g><path d="M 7 10 C 7 0 35 0 35 10 L 35 32 C 35 42 7 42 7 32 Z" fill="#ffffff" stroke="#000000"></path><path d="M 7 10 C 7 17 35 17 35 10" fill="none" stroke="#000000"></path></g>`
        ]
    }, {
        id: '2',
        header: 'General',
        svgGroup: '',
        svgUse: ["icon-GLOBE"],
        svgGroup: [
            `<rect x="2" y="2" width="37" height="37" fill="#ffffff" stroke="#000000"></rect>`,
            `<rect x="2" y="11" width="37" height="19" fill="#ffffff" stroke="#000000"></rect>`,
            `<path d="M 2 8 L 39 8 L 39 29 Q 30 23 21 29 Q 11 36 2 29 L 2 12 Z" fill="#ffffff" stroke="#000000"></path>`,
            `<g><path d="M 7 10 C 7 0 35 0 35 10 L 35 32 C 35 42 7 42 7 32 Z" fill="#ffffff" stroke="#000000"></path><path d="M 7 10 C 7 17 35 17 35 10" fill="none" stroke="#000000"></path></g>`
        ]
    }]

    @action getShape() {
        return this.shapesList
    }
}

let appshapes = new AppShapes()

export default appshapes