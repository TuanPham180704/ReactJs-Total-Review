import React from "react"

class Toggle extends React.Component{
  constructor(props){
    super(props)
    this.state = {isToggleOn : true}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState((prevState)=>({
      prevState : !prevState.isToggleOn
    }))
  }
  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'On' : 'Off'}
      </button>
    )
  }
}

export default Toggle