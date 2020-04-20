import React from "react"

class Random1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            names: ["Sam", "Ben", "Andy", "Tammy", "Dan"],
            count: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.state.count)
        alert(this.state.names[this.state.count] + " is here!")
        if(this.state.count < this.state.names.length - 1) {
            this.setState(state => ({
                count: state.count + 1
            }))
        } else {
            this.setState(state => ({
                count: 0
            }))
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.names[this.state.count]}</h1>
                <button className="btn btn-secondary" onClick={this.handleClick}>
                    Click Me
                </button>
            </div>
        )
    }
}

export default Random1