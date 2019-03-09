import React, {Component} from 'react';
import './SecondComponent.css'

export default class SecondComponent extends Component {

constructor(props) {
    super(props)
  }

render() {
      return (
        <div class="topnav">
 <a class="active" href="#home">Home</a>
 <a href="#about">About</a>
 <a href="#passbook">Passbook</a>
 <a href="#contact">Contact</a>
</div>
      )
  }
}
