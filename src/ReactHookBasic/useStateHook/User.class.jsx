import React, { Component } from 'react'

export class UserClassComponent  extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstName : 'TuanDev',
       age : 21
    }
  }
  handleClickUpAge = () => {
   this.setState((prevState)=>({
    age : prevState.age + 1
   }))
  }
  render() {
    const {firstName,age} = this.state
    return (
      <div>
        <h1>User class component</h1>
        <ul>
          <li> First Name : {firstName}</li>
          <li> Age : {age}</li>
        </ul>
        <button onClick={this.handleClickUpAge}>Up Age</button>
      </div>
    )
  }
}

export default UserClassComponent 