import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'
import Reset from '../components/common/Reset'

class ResetPwPage extends Component {
  render() {
    return (
      <Fragment>
        <Nav/>
        <Reset/>
        <Footer/>
      </Fragment>
    )
  }
}

export default ResetPwPage