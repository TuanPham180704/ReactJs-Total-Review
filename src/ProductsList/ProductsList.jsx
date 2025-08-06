import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productList: [
        {
          id: '1a',
          name: 'Sony',
          avatar: '📍'
        },
        {
          id: '2b',
          name: 'Iphone',
          avatar: '🎉'
        },
        {
          id: '3c',
          name: 'Samsung',
          avatar: '🎁'
        }
      ]
    }
  }
  orderProductList = () => {
    this.setState((prevState)=> ({
      productList : prevState.productList.sort((a,b)=>{
        if(a.name < b.name) return -1
        if(a.name > b.name) return 1
        return 0
      })
    }))
  }
  addProductList = () => {
    this.setState((prevState)=>({  
      productList : [{
        id : '4d',
        name : 'Oppo',
        avatar : '🍏'
      },...prevState.productList]   
    }))
  }
  render() {
    return (
      <div>
        <h1>ProductsList</h1>
        <button onClick={this.orderProductList}>Order Product</button>
        <button onClick={this.addProductList}>Add Product</button>
        <div className='products-item'>
          {this.state.productList.map((products) => (
            <ProductItem products={products} key={products.id} />
          ))}
        </div>
      </div>
    )
  }
}
