import React from 'react'
import { Link } from "react-router-dom"

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            answer: this.props.answer
        }
    }

    render() {
        return(
            <div className="App-header">
                <p>This is the Header? {this.state.answer} </p>
                <nav>
                    <h5><Link className="Link" to="/">Home</Link></h5>
                    <h5><Link className="Link" to="/apps">My Apps</Link></h5>
                </nav>
            </div>
        )
    }
}

export default Header