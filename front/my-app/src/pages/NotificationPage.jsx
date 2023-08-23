import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav';
import Footer from '../components/common/Footer';
import Notification from '../components/notification/Notification';

class NotificationPage extends Component {

    componentDidMount() {
        window.scroll(0, 0);
      }
      
  render() {
    return (
      <Fragment>
        <Nav/>
        <Notification/>
        <Footer/>
      </Fragment>
    )
  }
}

export default NotificationPage