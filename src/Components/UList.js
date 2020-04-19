import React from 'react'

class UList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.list = []
    }

    render() {
        this.list.push("Food")
        this.list.push("Freedom")
        this.list.push("Love")

        let final = []
        for (let item of this.list) {
            final.push(<li key={item}>{item}</li>)
        }

        return(
            <div>
                <h2> Things I value:</h2>
                <ul>
                    {final}
                </ul>
            </div>
        )
    }
}

export default UList;