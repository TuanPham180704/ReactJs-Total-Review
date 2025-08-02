import React, { Component } from 'react'

class Button extends Component {
  handleClick = (e) => {
    console.log(e.target)
  }
  render() {
    const { className = '', children } = this.props
    return (
      <button className={`btn ${className}`} onClick={this.handleClick}>
        {children} Button
      </button>
    )
  }
}

class Layout extends Component {
  render() {
    const { left, right } = this.props
    return (
      <div className='layout'>
        <div className='layout-left'>{left}</div>
        <div className='layout-right'>{right}</div>
      </div>
    )
  }
}
export class Composition extends Component {
  render() {
    return (
      <div>
        Composition
        <Button />
        <Button className='btn-Yellow'>Yellow</Button>
        <Layout
          left={<Button className='btn-left'>Left</Button>}
          right={<Button className='btn-Right'>Right</Button>}
        />
      </div>
    )
  }
}

export default Composition
