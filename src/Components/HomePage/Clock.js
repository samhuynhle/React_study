import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let date = new Date()
        let hours = date.getHours()
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
                <h1>
                    {hours % 12}:{minutes} {timeofday}
                </h1>
            </div>
        )
    }
}

export default Clock
