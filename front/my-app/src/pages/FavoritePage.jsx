import React, { Component, Fragment } from 'react'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'
import Favorite from '../components/Favorite/Favorite'

class FavoritePage extends Component {
  
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const user = this.props.user;

    return (
      <Fragment>
        <Nav/>
        <Favorite user = {user}/>
        <Footer/>
      </Fragment>
    )
  }
}

export default FavoritePage