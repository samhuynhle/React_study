import React from 'react'
import './App.css'
import Header from './Components/Header.js'
import Body from './Components/Body.js'
import Footer from './Components/Footer.js'
import jokes from './Services/jokelist.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.jokes = jokes()
  }

  render () {

    return (
      <div className="App">
        <Header/>
        <Body/>
        <Footer jokes={this.jokes}/>
      </div>
    )
  }
}

export default App;