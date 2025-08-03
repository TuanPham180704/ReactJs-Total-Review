import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    const {  searchText, inStock, handleChange} = this.props
    return (
      <div>
        <form>
          <input type='text' placeholder='Search' value={searchText} onChange={handleChange('searchText')} />
          <div>
            <input type='checkbox' value={inStock} onChange={handleChange('inStock')} />
            On show products in stock
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
