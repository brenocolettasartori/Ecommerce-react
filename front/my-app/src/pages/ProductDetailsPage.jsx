import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'
import ProductDetails from '../components/Products/ProductDetails'
import SuggestedProduct from '../components/Products/SuggestedProduct'

class ProductDetailsPage extends Component {
  render() {
    return (
      <Fragment>
        <Nav/>
        <ProductDetails/>
        <SuggestedProduct/>
        <Footer/>
      </Fragment>
    )
  }
}

export default ProductDetailsPage