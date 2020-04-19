import React from "react"

class ToDoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.goal = this.props.goal
        this.image = `https://picsum.photos/id/${this.props.random}/50/50`
    }

    render() {

        return(
            <div>
                <input type="checkbox" value={this.props.name} className="ToDo-list-checkbox"/>
                <label htmlFor="mind">{this.goal}</label>
                <br></br>
                <img src={this.image} className="ToDo-list-img"></img>
            </div>
        )
    }
}

export default ToDoItem