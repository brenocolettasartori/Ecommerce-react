import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'
import Cart from '../components/Cart/Cart'

class CartPage extends Component {
  render() {
    return (
      <Fragment>
        <Nav/>
        <Cart/>
        <Footer/>
      </Fragment>
    )
  }
}

export default CartPage