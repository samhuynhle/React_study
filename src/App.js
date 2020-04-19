import React from 'react'
import { BrowserRouter as Router, 
         Switch,
         Route}
         from "react-router-dom"
import './App.css'
import MyApps from './Components/MyApps/MyApps.js'
import HomeComponents from './Components/HomePage/HomeComponents.js'
import Footer from './Components/Footer.js'
import Header from './Components/Header.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      "answer": "yes"
    }
  }

  Home() {
    return <HomeComponents/>
  }

  MyApps() {
    return <MyApps/>;
  }

  render() {
    return (
      <Router>
        <div>
          <Header answer={this.state.answer}/>

          <Switch>
            <Route path="/apps">
              <this.MyApps/>
            </Route>
            <Route path="/">
              <this.Home />
            </Route>
          </Switch>

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App
