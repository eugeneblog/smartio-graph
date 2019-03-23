import React, { Component } from 'react'
import { Collapse } from 'antd';
import {Link} from 'react-router-dom'

const Panel = Collapse.Panel;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function callback(key) {
    console.log(key);
}

class Shapes extends Component {
    state = {
        shapesList: [{
            id: '1',
            header: 'This is panel header 1',
            context: text
        }, {
            id: '2',
            header: 'This is panel header 2',
            context: text
        }]
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
                            <svg width={50} height={50}>
                                <use xlinkHref="#icon-GLOBE"></use>
                            </svg>
                            <Link to="/test">test</Link>
                        </Panel>
                    )
                }
            </Collapse>
        )
    }
}

export default Shapes