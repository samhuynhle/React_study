import React from "react"

class Random2 extends React.Component {
    constructor(props){
        super(propes)
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        let wordDisplay
        if (this.state.isLoggedIn) {
            wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }
        return (
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
}

export default Random2