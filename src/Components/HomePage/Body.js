import React from 'react'
import Hello from './Hello.js'
import UList from './UList.js'
import MyInfo from './MyInfo.js'
import Clock from './Clock.js'


class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          count: 0
        }
        this.list = [[<Hello/>,"Hello"], [<MyInfo/>,"MyInfo"], [<UList/>,"UList"],[<Clock/>,"Clock"]]
    }

    render(){
        let final = []
        for (let item of this.list) {
            final.push(<div key={item[1]}>{item[0]}</div>)
        }
        return (
            <div  className="App-body">
                {final}
            </div>
        )
    }
}

export default Body