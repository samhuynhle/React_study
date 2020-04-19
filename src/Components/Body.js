import React from 'react'
import ToDo from './ToDo.js'
import Clock from './Clock.js'

class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div className="App-body">
                <ToDo/>
                <Clock/>
            </div>
        )
    }
}

export default Body