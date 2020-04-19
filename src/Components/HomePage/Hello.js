import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render(){
    return (
      <div className="Hello">
        <h1> Hello World </h1>
      </div>
    )
  }
}

export default Hello;