import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer class TestView extends Component {
    state = {
        value: '',
        count: [3,2,3]
    }
    constructor() {
        super()
        this.name = 'eugene'
    }
    render() {
        return(
            <div>
                <input type="text" value={this.state.value}  onChange={this.changeHandle}/>
                <input type="button" value="add" onClick={this.addHandle}/>
                <br/>
                <span>{ this.state.value }</span><br/>
                <ul>
                    {
                        this.state.count.map((e,i) => <li key={i}>{ e }</li>)
                    }
                </ul>
            </div>
        )
    }
    changeHandle = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    addHandle = (e) => {
        var newArray = this.state.count.slice();
        newArray.push(this.state.value);
        this.setState(() => {
            return {value: '', count: newArray}
        })
    }
}

export default TestView
