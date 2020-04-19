import React from 'react'
import logo from '../Assets/logo.svg'
import Hello from './Hello.js'
import UList from './UList.js'
import MyInfo from './MyInfo.js'


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          count: 0
        }
    this.list = [[<Hello/>,"Hello"], [<MyInfo/>,"MyInfo"], [<UList/>,"UList"]]
      }

    render(){
        let final = []
        for (let item of this.list) {
            final.push(<div key={item[1]}>{item[0]}</div>)
        }
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {final}
            </header>
        )
    }
}

export default Header