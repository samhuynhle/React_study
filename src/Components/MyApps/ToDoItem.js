import React from "react"

class ToDoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isCompleted: this.props.completed,
            name: this.props.goal,
            visible:true
        }
        this.goal = this.props.goal
        this.image = `https://picsum.photos/id/${this.props.random}/100/100`
    }


    render() {
        
        var handleCheck = (completed, name) => {
            if(completed) {
                console.log(name + " was unchecked")
            } else {
                console.log(name + " was checked")
                this.setState(state => ({
                    isCompleted: true
                }))
                this.setState(state => ({
                    visible: false
                }))
            }
        }
        return(
            <div className={this.state.visible?'fadeIn':'fadeOut'}>
                <input 
                    type="checkbox"
                    defaultChecked={this.state.isCompleted}
                    onChange={() => {handleCheck(this.state.isCompleted, this.state.name)}} value={this.state.name}
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