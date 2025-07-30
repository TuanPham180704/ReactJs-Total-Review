import React from 'react'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconnds: {
        created: new Date().getSeconds()
      },
      name : this.props.name
    }
    this.date = '30/07/2025'
    this.getTime = this.getTime.bind(this)
   
  }
  getTime(){
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString()
      },
      second : {
        created: new Date().getSeconds()
      }
    }
    this.setState(newState)
  }

  render() {
    console.log(this.props); 
    return (
      <div>
        <h3>Hello World ! {this.props.name}</h3>
        <h4>Hom nay la {this.state.time.created}</h4>
        <h4>Giay Thu : {this.state.second.created}</h4>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    )
  }
}
