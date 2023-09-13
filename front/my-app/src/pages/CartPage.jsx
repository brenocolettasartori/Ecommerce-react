import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'
import Cart from '../components/Cart/Cart'

class CartPage extends Component {

  componentDidMount() {
    window.scroll(0, 0);
  }
  
  render() {
    const user = this.props.user;
    
    return (
      <Fragment>
        <Nav/>
        <Cart user={user}/>
        <Footer/>
      </Fragment>
    )
  }
}

export default CartPage