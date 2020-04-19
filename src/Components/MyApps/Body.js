import React from 'react'
import ToDo from './ToDo.js'
import jokes from '../../Services/jokelist.js'
import Jokes from './Jokes.js'
import Random1 from '../RandomComponents/Random1.js'

class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.jokes = jokes()
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
            <div className="App-body">
                <ToDo/>
                <div className="Jokes-container">
                    <h1>Jokes for You: </h1>
                    {final}
                </div>
                <Random1/>
            </div>
        )
    }
}

export default Body