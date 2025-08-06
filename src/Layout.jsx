import PropTypes from "prop-types"
import React from "react"

// class Layout extends React.Component {
//   render() {
//     return <div className='layout'>{this.props.children}</div>
//   }
// }

function Layout({children}){
  return (
    <div className="layout">
       {children}
    </div>
  )
}
Layout.prototype = {
  children :  PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element) 
  ])
}
export default Layout