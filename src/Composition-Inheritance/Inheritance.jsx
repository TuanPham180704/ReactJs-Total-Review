// Kế Thừa các thuộc tính phương thức từ một lớp cha  

import React, { Component } from 'react'

class Button extends Component {
   handleClick = (e) => {
      console.log(e.target);
   }
   render(){
    return (
      <button onClick={this.handleClick} className='btn'>Button</button>
    )
   }
}
class YelloButton extends Button {
   render(){
    return (
      <button onClick={this.handleClick} className='btn btn-yellow'>YelloButton </button>
    )
   }
}

export class Inheritance extends Component {
  render() {
    return (
      <div>Inheritance
        <Button/>
        <YelloButton/>
      </div>
    )
  }
}

export default Inheritance