import React, { Component } from 'react';
import './App.css';
import FirstComponent from './FirstComponent.js';
import SecondComponent from './SecondComponent.js'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'Loading',

    };
  }
  render() {
    return (
        <div className="App">
            <SecondComponent id = "about"/>
            <FirstComponent id = "home"/>
         </div>
    );
 }

  componentDidMount() {
    const API = 'https://devclub.iitd.ac.in/db.json';

    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

}


export default App;
