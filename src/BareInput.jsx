import React from "react";
import PropTypes from "prop-types";
// class BareInput extends React.Component{
//   render(){
//     const {type,...rest} = this.props
//     return <input {...rest}/>
//   }
// }

function BareInput(props){
  const {type : TypeInput,...rest} = props
  return(
    <input {...rest} type={TypeInput}/>
  )
}
BareInput.prototype = {
  type : PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired,
  className : PropTypes.string,
}
export default BareInput