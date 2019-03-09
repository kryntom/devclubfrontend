import React, { Component } from 'react';
import './App.css';
import index from './index.jpg';
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
          <img className = "firstimage" src = {index}  alt = "image cannot be displayed!"></img>
          <div class = "imagecontenthead"> <h2>MONEYAKER</h2></div>
          <div class = "imagecontentbody"><p>Ever wonder that where all your money goes? Have no idea on where the money was spent?<br/>
          Don't worry, introducing the first of it's kind wallet management app "MONEYAKER". A smart app that keeps all of your
          spendings within the swipe of your fingers. Explore more to find out.</p></div>
          <FirstComponent displaytext="First Component Data"/>
          <SecondComponent />
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
