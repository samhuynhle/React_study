import React from "react"

class Random3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div>
                <img src="https://www.fillmurray.com/200/100"/>
                <br/>
                <br/>
                <button onClick={()=> console.log("Hello")}>Click Me</button>
            </div>
        )
    }
}

export default Random3