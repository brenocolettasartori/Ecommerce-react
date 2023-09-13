import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav';
import Footer from '../components/common/Footer';
import OrderList from '../components/Cart/OrderList';

class OrderListPage extends Component {

 componentDidMount(){
  window.scroll(0,0)
 } 

  render() {

    const user = this.props.user;

    return (
      <Fragment>
        <Nav/>
        <OrderList user={user}/>
        <Footer/>
      </Fragment>
    )
  }
}

export default OrderListPage