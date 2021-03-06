import React from "react"
import ToDoItem from "./ToDoItem"

class ToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.count = 0
        this.ToDoList = ["Upgrade Mind", "Upgrade Body", "Upgrade Soul", "Upgrade Spirit", "Upgrade Skill"]
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(completion) {
        if(completion === false){
            this.count++
        } else {
            this.count--
        }
        if(this.count === this.ToDoList.length) {
            alert("All Tasks Completed!")
        }
    }

    render() {
        let final = []
        let random
        for(var item of this.ToDoList) {
            random = Math.floor(Math.random() * 100)
            
            //passing down data through props from ToDo into ToDoItem
            final.push(<ToDoItem key={item} goal={item} random={random} completed={false} handleChange={this.handleChange}/>)
        }

        return(
            <div className="ToDo-list">
                <h1>To Do List: </h1>
                <div className="rowC">
                    {final}
                </div>
            </div>
        )
    }
}

export default ToDo