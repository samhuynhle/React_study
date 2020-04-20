import React from "react"

class ToDoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isCompleted: this.props.completed,
            name: this.props.goal,
        }
        this.goal = this.props.goal
        this.image = `https://picsum.photos/id/${this.props.random}/100/100`
        this.handleCheck.bind(this)
    }
            
    handleCheck () {
        if(this.state.isCompleted) {
            this.setState(state => ({
                isCompleted: false
            }))
        } else {
            this.setState(state => ({
                isCompleted: true
            }))
        }
        this.props.handleChange(this.state.isCompleted)
    }

    render() {
        return(
            <div>
                <input 
                    type="checkbox"
                    defaultChecked={this.state.isCompleted}
                    onChange={() => {
                        this.handleCheck(this.state.isCompleted, this.state.name)
                    }} 
                    value={this.state.name}
                    className={'ToDo-list-checkbox'}
                />
                <label htmlFor="mind">{this.goal}</label>
                <br></br>
                <img src={this.image} alt="~~~" className="ToDo-list-img"></img>
            </div>
        )
    }
}

export default ToDoItem