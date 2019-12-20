// create your App component here
import React, { Component } from 'react';


//no need to modify anything in this component
class App extends Component {


  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
    }

  render() {
  }

}

export default App;
