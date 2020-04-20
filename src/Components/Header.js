import React from 'react'
import { Link } from "react-router-dom"
import logo from '../Assets/logo.svg'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            answer: this.props.answer
        }
    }

    render() {
        return(
            <div className="App-background">
                <div className="layer">
                    <img src={logo} className="App-logo" alt="logo" />
                    <nav className="rowC">
                        <h5><Link className="Link" to="/">Home</Link></h5>
                        <h5><Link className="Link" to="/apps">My Apps</Link></h5>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header