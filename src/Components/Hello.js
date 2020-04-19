import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render(){
    return (
      <div className="Hello">
        <h2> Hello World </h2>
      </div>
    )
  }
}

export default Hello;