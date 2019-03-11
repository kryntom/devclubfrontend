import React, {Component} from 'react';
import './ThirdComponent.css'
export default class ThridComponent extends Component {


constructor(props) {
    super(props)
  }

render() {
      return (

        <img className = "firstimage" src = {index}  alt = "image cannot be displayed!"></img>
        <div class = "imagecontenthead"> <h2>MONEYAKER</h2></div>
        <div class = "imagecontentbody"><p>Ever wonder that where all your money goes? Have no idea on where the money was spent?<br/>
        Don't worry, introducing the first of it's kind wallet management app "MONEYAKER". A smart app that keeps all of your
        spendings within the swipe of your fingers. Explore more to find out.</p></div>
      )
  }
}
