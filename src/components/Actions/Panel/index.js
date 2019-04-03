/* global SVG */ 
import React from 'react'

class ActionPanel extends React.Component {
    constructor() {
        super()
        this.state = {
            storage: {

            }
        }
    }
    render() {
        return(
            <div id={this.props.paneId} className="action-container">
            </div>
        )
    }
    componentDidMount() {
        let paneId = this.props.paneId
        let draw = SVG().addTo(`#${paneId}`)
        let rect = draw.rect(100, 100).radius(10)
        draw.group().add(rect).draggable()
        rect.draggable()
    }
}

export default ActionPanel