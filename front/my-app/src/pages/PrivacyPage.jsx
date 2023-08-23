import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav';
import Footer from '../components/common/Footer';
import Privacy from '../components/others/Privacy';


class PrivacyPage extends Component {

    componentDidMount() {
        window.scroll(0, 0);
      }

  render() {
    return (
      <Fragment>
        <Nav/>
        <Privacy/>
        <Footer/>
      </Fragment>
    )
  }
}

export default PrivacyPage