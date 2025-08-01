import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name : '',
      address : '',
      married : false,
      food : 'coconut',
    }
  }
  handleChange = (e) => {
    const {target} =e
    const value = target.type === 'checked' ? target.checked : target.value
    
    const {name} = target
    this.setState({
      [name] : value
    })
  }
  handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            Name :
            <input type='text' name='name' value={this.state.value} onChange={this.handleChange} />
          </label>
          <select onChange={this.handleChange} name='food'>
            <option value='grapefruit'>Grapefruit</option>
            <option value='lime'>Lime</option>
            <option value='coconut'>Coconut</option>
            <option value='mango'>Mango</option>
          </select>
          <input type='file' />
          <input 
          name='married'
          type='checkbox' 
          checked={this.state.married} 
          onChange={this.handleChange} />
          <input type='submit' value='Submit' />
          <br />
          <textarea value={this.state.address} name='address' onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

export default Form
