import React, { Component } from 'react'

const fetchComments = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(['A', 'B', 'C']), 1000)
})

export default class CorrectlyState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      comment : []
    }
  }
  componentDidMount() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
    fetchComments().then(res => {
      this.setState({
        comment : res
      })
    })
  }
  render() {
    console.log(this.state);
    
    return <div>CorrectlyState Count : {this.state.count}</div>
  }
}
