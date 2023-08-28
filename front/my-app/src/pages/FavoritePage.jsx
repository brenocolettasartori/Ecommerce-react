import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'
import Favorite from '../components/Favorite/Favorite'

class FavoritePage extends Component {
  
  componentDidMount() {
    window.scroll(0, 0);
  }

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