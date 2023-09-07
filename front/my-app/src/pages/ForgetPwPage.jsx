import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'
import ForgetPassword from '../components/common/ForgetPassword'

class ForgetPwPage extends Component {
  render() {
    return (
      <Fragment>
        <Nav/>
        <ForgetPassword/>
        <Footer/>
      </Fragment>
    )
  }
}

export default ForgetPwPage