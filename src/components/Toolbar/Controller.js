import React from 'react'

class ToolbarController extends React.Component {
    constructor () {
        super()
        this.state = {
            isFullScree: false
        }
    }
    zoomInHandle = (e) => {

    }

    zoomOutHandle = (e) => {

    }

    undoHandle = (e) => {

    }

    redoHandle = (e) => {

    }

    deleteHandle = (e) => {

    }

    showProperty = (e) => {
        let isShow = this.props.mainstate.showView['editor']
        this.props.mainstate.setView('editor', !isShow)
    }

    changeFullscree = (e) => {
        // 是否全屏的判断条件
        let  fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement
        // 开启全屏
        function launchFullscreen(ele) {
            if(ele.requestFullscreen) {
                ele.requestFullscreen()
            } else if (ele.mozRequestFullScreen) {
                ele.mozRequestFullScreen()
            } else if (ele.webkitRequestFullscreen) {
                ele.webkitRequestFullscreen()
            } else if (ele.msRequestFullscreen) {
                ele.msRequestFullscreen()
            }
        }
        // 退出全屏
        function exitFullscreen() {
            if (document.exitFullscreen) {
              document.exitFullscreen()
            } else if(document.mozCancelFullScreen) {
              document.mozCancelFullScreen()
            } else if(document.webkitExitFullscreen) {
              document.webkitExitFullscreen()
            }
        }
        if (!fullscreenElement) {
            launchFullscreen(document.documentElement)
        } else {
            exitFullscreen()
        }
    }
}

export default ToolbarController
