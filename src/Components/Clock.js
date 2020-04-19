import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let date = new Date()
        let hours = date.getHours() % 12
        let minutes = date.getMinutes() % 60
        let timeofday = ""

        if (hours < 12) {
            timeofday = "AM"
        } else {
            timeofday = "PM"
        }

        if (minutes < 10) {
            minutes = "0" + minutes
        }

        return(
            <div>
                <p>It is: </p>
                <h2>
                    {hours}:{minutes} {timeofday}
                </h2>
            </div>
        )
    }
}

export default Clock