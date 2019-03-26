/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Collapse } from 'antd';

const Panel = Collapse.Panel;
function callback(key) {
    console.log(key);
}

class Shapes extends Component {
    state = {
        isSHowThumbnail: false,
        shapesList: [{
            id: '1',
            header: 'This is panel header 1',
            svgGroup: '',
            svgUse: ["icon-GLOBE", "icon-SUBSCRIBE", "icon-MOBILELINK", "icon-MAP", "icon-LINKS", "icon-IMPORTANTEMAIL", "icon-MAILCHAIN", "icon-FAX", "icon-HOMEMESSAGE"]
        }, {
            id: '2',
            header: 'This is panel header 2',
            svgGroup: '',
            svgUse: ["icon-GLOBE", "icon-SUBSCRIBE", "icon-MOBILELINK", "icon-MAP", "icon-LINKS", "icon-IMPORTANTEMAIL", "icon-MAILCHAIN", "icon-FAX", "icon-HOMEMESSAGE"]
        }]
    }
    mouseShowThumbnail = (e) => {
        this.setState({
            isSHowThumbnail: true
        })
    }
    mouseHideThumbnail = (e) => {
        this.setState({
            isSHowThumbnail: false
        })
    }
    svgItemClickHandle = (e) => {
        // click handle
    }

    // 拖拽event
    svgItemMouseDownHandle = (e) => {
        console.log('按下')
    }
    // 显示缩略图
    thumbanil = (svg) => {
        // show thumbanil
    }
    render() {
        return (
            <Collapse className="collapse" defaultActiveKey={["0"]} onChange={callback}>
                {
                    this.state.shapesList.map(
                        (e,i) => 
                        <Panel
                            header={ e.header }
                            key={ String(i) }
                        >
                            {
                                e.svgUse.map(
                                    (svg) => 
                                    <a
                                    onClick={this.svgItemClickHandle}
                                    onMouseEnter={this.mouseShowThumbnail}
                                    onMouseLeave={this.mouseHideThumbnail}
                                    onMouseDown={this.svgItemMouseDownHandle}
                                    className="svg-item"
                                    key={svg}>
                                        <svg width={38} height={38}>
                                            <use xlinkHref={`#${svg}`}></use>
                                        </svg>
                                    </a>
                                )
                            }
                        </Panel>
                    )
                }
            </Collapse>
        )
    }
}

export default Shapes