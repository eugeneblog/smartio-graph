import React from 'react'
class Graph extends React.Component {
    constructor(container, model, renderHint, stylesheet, themes) {
        super()
        this.state={
            
        }
    }
    createSvgImg = (w, h, data) => {
        // encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
        let tmp =  encodeURIComponent(
           `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${w}" height="${h}" version="1.1">${data}</svg>
        `)
        return unescape(tmp)
    }
}

export default Graph