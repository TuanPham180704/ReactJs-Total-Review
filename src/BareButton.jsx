import React from "react"
class BareButton extends React.Component{
  constructor(props){
    super(props)
  }
  
  handleClick(event,value)  {
    console.log(event)
    console.log(value)
  }

  //Currying
  handle_Click = (value) => () => {
    console.log(value);
  }
  handle__Click = (value) => {
    return()=> {
      console.log(value);
    }
  }
  render() {
    return (
      <div>
        <button onClick={(event)=>this.handleClick(event,'Add')}>Add</button>
        <button onClick={this.handleClick.bind(this,'Edit')}>Edit</button>
        <button onClick={this.handleClick.bind(this,'Delete')}>Delete</button>
      </div>  
    )
  }
}

export default BareButton