import React, { Component, Fragment } from 'react'
import Contact from '../components/common/Contact'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'

export class ContactPage extends Component {

    componentDidMount() {
        window.scroll(0, 0);
      }
      
  render() {
    return (
      <Fragment>
        <Nav/>
        <Contact/>
        <Footer/>
      </Fragment>
    )
  }
}

export default ContactPage