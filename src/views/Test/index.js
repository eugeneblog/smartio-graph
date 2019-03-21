import React, { Component } from 'react';

class TestView extends Component {
    constructor() {
        super()
        this.name = 'eugene'
    }
    render() {
        return(
            <div>
                <button > + </button>
                <button > - </button>
            </div>
        )
    }
}

export default TestView
