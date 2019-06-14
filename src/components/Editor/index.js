/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Card, Checkbox } from 'antd'

class Editor extends Component {
    constructor() {
        super()
        this.state = {
            checked: true,
            disabled: false,
        }
    }
    render() {
        const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${
            this.state.disabled ? 'Disabled' : 'Enabled'
        }`
        return (
            <div style={{ background: 'white', width: "250px", borderLeft: "1px solid #dadcdf" }}>
                <Card
                size="small"
                title="View"
                style={{ width: 250 }}
                >
                    <p>
                        <Checkbox
                            checked={this.state.checked}
                            disabled={this.state.disabled}
                            onChange={this.onChange}
                        >
                            {label}
                        </Checkbox>
                    </p>
                    <p>
                        <Checkbox
                            checked={this.state.checked}
                            disabled={this.state.disabled}
                            onChange={this.onChange}
                        >
                            {label}
                        </Checkbox>
                    </p>
                    <p>
                        <Checkbox
                            checked={this.state.checked}
                            disabled={this.state.disabled}
                            onChange={this.onChange}
                        >
                            {label}
                        </Checkbox>
                    </p>
                    <p>
                        <Checkbox
                            checked={this.state.checked}
                            disabled={this.state.disabled}
                            onChange={this.onChange}
                        >
                            {label}
                        </Checkbox>
                    </p>
                </Card>
                <Card
                size="small"
                title="Options"
                style={{ width: 25000 }}
                >
                    <p>
                        <Checkbox
                            checked={this.state.checked}
                            disabled={this.state.disabled}
                            onChange={this.onChange}
                        >
                            {label}
                        </Checkbox>
                    </p>
                    <p>
                        <Checkbox
                            checked={this.state.checked}
                            disabled={this.state.disabled}
                            onChange={this.onChange}
                        >
                            {label}
                        </Checkbox>
                    </p>
                    <p>
                        <Checkbox
                            checked={this.state.checked}
                            disabled={this.state.disabled}
                            onChange={this.onChange}
                        >
                            {label}
                        </Checkbox>
                    </p>
                </Card>
            </div>
        )
    }

    onChange = e => {
        this.setState({
          checked: e.target.checked,
        })
    }
}

export default Editor