import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Nav from '../components/common/Nav';
import Footer from '../components/common/Footer';
import About from '../components/others/About';

class AboutPage extends Component {

    componentDidMount() {
        window.scroll(0, 0);
    }

  render() {
    return (
      <Fragment>
        <Nav/>
        <About/>
        <Footer/>
      </Fragment>
    )
  }
}

export default AboutPage