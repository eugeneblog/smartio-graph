import React, { Component } from 'react'

class Thumbanil extends Component {
    static defaultProps = {
        isShow: false
    }
    render() {
        return(
            <div>
                {
                    this.props.isShow ? <div id="svgThumbanil" className="thumbanil" style={this.props.thumbanilStyle}>
                        <div className="thumbanil-svg"></div>
                        <div className="thumbanil-text">{ this.props.thumbanilText }</div>
                    </div> : null
                }
            </div>
        )
    }
}

export default Thumbanil