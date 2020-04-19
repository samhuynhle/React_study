import React from 'react'

class Jokes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.leader = this.props.leader
        this.haspunchline = false
        this.count = this.props.count

        if(this.props.punchline){
            this.punchline = this.props.punchline
            this.haspunchline = true
        }
    }

    render() {
        if(this.haspunchline) {
            return (
                <div>
                    <p className="Jokes-leader">{this.count}. {this.leader}</p>
                    <p>...</p>
                    <p>{this.punchline}</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p className="Jokes-leader">{this.count}. {this.leader}</p>
                </div>
            )
        }
    }
}

export default Jokes