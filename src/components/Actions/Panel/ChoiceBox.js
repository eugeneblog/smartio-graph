import React from 'react'

class ChoiceBox extends React.Component{
    render() {
        return this.props.isShow ? 
        <div id="choicebox" className="choicebox" style={this.props.choiceBoxStyle}>

        </div> : null
    }
}

export default ChoiceBox