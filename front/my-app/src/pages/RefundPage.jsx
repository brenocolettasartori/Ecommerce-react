import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav';
import Footer from '../components/common/Footer';
import Refund from '../components/others/Refund';


class RefundPage extends Component {

    componentDidMount() {
        window.scroll(0, 0);
      }

  render() {
    return (
      <Fragment>
            <Nav/>
            <Refund/>
            <Footer/>
      </Fragment>
    )
  }
}

export default RefundPage