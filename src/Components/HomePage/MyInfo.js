import React from 'react'


class MyInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.display = {
            "firstname":"",
            "lastname":"",
            "age": 0,
            "occupation1": "",
            "occupation2": ""
        }
    }

    render() {
        let data = {
            "firstname": "Sam",
            "lastname": "Le",
            "age": 24,
            "occupation1": "Software Engineer",
            "occupation2": "UX/UI Designer"
        }

        for(let item in data) {
            if(item in this.display){
                this.display[item] = data[item]
            }
        }

        return(
            <div>
                <h3> My Name is {this.display.firstname} {this.display.lastname}</h3>
                <p> I am {this.display.age} years old. </p>
                <p> I am a {this.display.occupation1} and {this.display.occupation2}</p>
            </div>
        )
    }
}

export default MyInfo;