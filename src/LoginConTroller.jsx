import React from 'react'

class LoginButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Login</button>
  }
}
class LogOutButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>LogOut</button>
  }
}

class LoginConTroller extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoggedIn: false }
  }
  handleLogOut = () => {
    this.setState({
      isLoggedIn: false
    })
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }
  render() {
    const { isLoggedIn } = this.state
    const {hidden} = this.props
    if(hidden) return null
    let isActive = isLoggedIn ? (
      <LogOutButton onClick={this.handleLogOut} />
    ) : (
      <LoginButton onClick={this.handleLogin} />
    )
    return <div className='login-controller'>{isActive}</div>
  }
}

export default LoginConTroller
