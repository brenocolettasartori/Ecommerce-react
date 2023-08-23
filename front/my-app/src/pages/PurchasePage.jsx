import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav';
import Footer from '../components/common/Footer';
import Purchase from '../components/others/Purchase';

class PurchasePage extends Component {

  componentDidMount() {
      window.scroll(0, 0);
   }

  render() {
    return (
        <Fragment>
            <Nav/>
            <Purchase/>
            <Footer/>
        </Fragment>
    )
  }
}

export default PurchasePage