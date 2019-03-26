import React from 'react'

const style={
    minWidth: '2000px',
    minHeight: '2000px',
    background:"#f3f3f3",
    backgroundImage: "linear-gradient(white 2px,transparent 0),linear-gradient(90deg, white 2px,transparent 0),linear-gradient(hsla(0,0%,100%,.3) 1px,transparent 0),linear-gradient(90deg,hsla(0,0%,100%,.3) 1px,transparent 0)",
    backgroundSize: "75px 75px,75px 75px,15px 15px,15px 15px"
}
class ActionPanel extends React.Component {
    render() {
        return(
            <div className="action-container">
                <svg style={style}>
                    
                </svg>
            </div>
        )
    }
}

export default ActionPanel