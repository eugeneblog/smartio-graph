import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import imgURL from '../../static/drawlogo-text-bottom.svg'

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <ReactSVG src={imgURL} alt="logo"/>
            </div>
        )
    }
}

export {Logo} 