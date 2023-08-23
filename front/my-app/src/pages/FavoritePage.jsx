import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'
import Favorite from '../components/Favorite/Favorite'

class FavoritePage extends Component {
  render() {
    return (
      <Fragment>
        <Nav/>
        <Favorite/>
        <Footer/>
      </Fragment>
    )
  }
}

export default FavoritePage