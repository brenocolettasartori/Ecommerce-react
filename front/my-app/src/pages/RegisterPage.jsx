import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav'
import Register from '../components/common/Register'
import Footer from '../components/common/Footer'

export class RegisterPage extends Component {
  render() {

    const setUser = this.props.setUser;
    const user = this.props.user;

    return (
      <Fragment>
        <Nav/>
        <Register setUser={setUser} user ={user}/>
        <Footer/>
      </Fragment>
    )
  }
}

export default RegisterPage