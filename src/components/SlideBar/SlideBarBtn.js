import React, { Component } from 'react';

class SlideBarBtn extends Component {
    slideBtnDown = (e) => {
        let _this = this
        let dw = this.props.slideWidth
        e.persist()
        let CX = e.clientX;
        document.onmousemove = function (e) {
            _this.props.onSlideChange({
                dw,
                CX,
                DX: e.clientX
            })
        }
        document.onmouseup = function () {
            document.onmousedown=null;
            document.onmousemove=null;
        }
    }
    render() {
        return (
            <div
                className="slide-collapsied-btn"
                onMouseDown={this.slideBtnDown}
            >
            </div>
        )
    }
}

export default SlideBarBtn