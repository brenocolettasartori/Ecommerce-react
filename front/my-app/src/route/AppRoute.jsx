import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import ContactPage from '../pages/ContactPage'
import PurchasePage from '../pages/PurchasePage'
import PrivacyPage from '../pages/PrivacyPage'
import RefundPage from '../pages/RefundPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import NotificationPage from '../pages/NotificationPage'
import FavoritePage from '../pages/FavoritePage'
import CartPage from '../pages/CartPage'
import AboutPage from '../pages/AboutPage'
import CategoryPage from '../pages/CategoryPage'
import SearchPage from '../pages/SearchPage'
import RegisterPage from '../pages/RegisterPage'
import ForgetPwPage from '../pages/ForgetPwPage'
import ProfilePage from '../pages/ProfilePage'
import axios from 'axios'
import appURL from '../api/appURL'
import ResetPwPage from '../pages/ResetPwPage'



class AppRoute extends Component {

  constructor() {
    super();
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    axios.get(appURL.userData).then(response => {
      this.setUser(response.data);
    }).catch(error => {

    });
  }

  setUser = (user) => {
    this.setState({user: user});
  }

  render() {
    return (
      <Fragment>
        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route exact path="/login" element={ <LoginPage user={this.state.user} setUser={this.setUser} /> } />
          <Route exact path="/register" element={ <RegisterPage user={this.state.user} setUser={this.setUser} /> } />
          <Route exact path="/forget" element={ <ForgetPwPage /> } />
          <Route exact path="/reset/:id" element={ <ResetPwPage /> } />
          <Route exact path="/profile" element={ <ProfilePage user={this.state.user} setUser={this.setUser} /> } />
          <Route exact path="/contact" element={ <ContactPage /> } />
          <Route exact path="/purchase" element={ <PurchasePage /> } />
          <Route exact path="/privacy" element={ <PrivacyPage /> } />
          <Route exact path="/refund" element={ <RefundPage /> } />
          <Route exact path="/productdetails/:id" element={ <ProductDetailsPage user={this.state.user} /> } />
          <Route exact path="/notification" element={ <NotificationPage /> } />
          <Route exact path="/favorite" element={ <FavoritePage /> } />
          <Route exact path="/cart" element={ <CartPage /> } />
          <Route exact path="/about" element={ <AboutPage /> } />
          <Route exact path="/recommended/:category" element={<CategoryPage/>} />
          <Route exact path="/pdsearch/:key" element={<SearchPage/>} />
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute