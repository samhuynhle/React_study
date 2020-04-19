import React from 'react'
import Jokes from './Jokes.js'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.jokes = this.props.jokes
    }

    render() {
        let final = []
        let count = 1

        for(let joke in this.jokes){
            if(this.jokes[joke]){
                final.push(<Jokes key={joke} count={count} leader={joke} punchline={this.jokes[joke]}/>)
            } else {
                final.push(<Jokes key={joke} count={count} leader={joke}/>)
            }
            count++
        }
        return(
            <div className="App-footer">
                <h2>Jokes4You:</h2>
                {final}
            </div>
        )
    }
}

export default Footer