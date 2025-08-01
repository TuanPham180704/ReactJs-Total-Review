import React, { Component } from 'react'

export class ProductItem extends Component {
  render() {
    const {products} = this.props
    return (
     <div className='products-list' >
        <input />
        {products.name} - {products.avatar}
      </div>
    )
  }
}

export default ProductItem