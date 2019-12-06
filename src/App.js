import React, { Component } from 'react'

class App extends Component {
    state = {
        people: []
    }

    render() {
        return(
        <div>
            {this.state.people.map(person => `Name: ${person.name}, Craft: ${person.craft}`)}
        </div>)
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(json => this.savePeople(json.people))
            .then(() => console.log(this.state.people))
            .catch(error => console.log(error))
    }

    savePeople = (people) => {
        people.forEach(person => {
            this.setState(previousState => ({
                // people: previousState.people.concat(person)})
                people: [...previousState.people, person]})
            )
        })
    }
}

export default App
