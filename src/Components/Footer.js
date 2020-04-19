import React from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div className="App-footer App-background">
                <div className="layer">
                <p>This is the Footer</p>
                </div>
            </div>
        )
    }
}

export default Footer