import React from 'react'

const lists = ['BWM', 'TOYOTA', 'MERCEDES']

const fetchAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lists)
    }, 1000)
  })
}
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
      name: this.props.name,
      lists: []
    }
    this.date = '30/07/2025'
    this.getTime = this.getTime.bind(this)
  }
  getTime() {
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconnds: {
        created: new Date().getSeconds()
      }
    }
    this.setState(newState)
  }
  componentDidMount() {
    const seconds = document.getElementById('seconds')
    console.log(seconds)
    fetchAPI().then((res) =>
      this.setState((prevState) => ({
        ...prevState,
        list: res
      }))
    )
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <h3>Hello World ! {this.props.name}</h3>
        <h4 id='seconds'>Hom nay la {this.state.time.created}</h4>
        <h4>Giay Thu : {this.state.seconnds.created}</h4>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    )
  }
}
