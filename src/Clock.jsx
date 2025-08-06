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
    console.log('constructor')
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconnds: {
        created: new Date().getSeconds()
      },
      name: this.props.name,
      lists: [],
      darkMode: false
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
    console.log('componentDidMount')
    const seconds = document.getElementById('seconds')
    fetchAPI().then((res) =>
      this.setState((prevState) => ({
        ...prevState,
        list: res
      }))
    )
  }
  componentDidUpdate() {
    // if (this.setState.darkMode) {
    //   const value = document.querySelector('input').value
    //   console.log('Value input', value)
    // }
    console.log('componentDidUpdate d')
    if (this.state.list.length === 0) {
      fetchAPI().then((res) =>
        this.setState((prevState) => ({
          ...prevState,
          list: res
        }))
      )
    }
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  toggelDarkMode = () => {
    this.setState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode
    }))
  }
  handleChangInput = () => {
   // console.log('input text')
  }
  render() {
    console.log('render')
    return (
      <div>
        <h3>Hello World ! {this.props.name}</h3>
        <h4 id='seconds'>Hom nay la {this.state.time.created}</h4>
        <h4>Giay Thu : {this.state.seconnds.created}</h4>
        <button onClick={this.getTime}>Get Time</button>
        <button onClick={this.toggelDarkMode}>Toggle</button>
        {this.state.darkMode && <input value={this.state.darkMode} onChange={this.handleChangInput} />}
      </div>
    )
  }
}
