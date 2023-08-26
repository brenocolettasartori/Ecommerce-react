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


class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route exact path="/login" element={ <LoginPage /> } />
          <Route exact path="/contact" element={ <ContactPage /> } />
          <Route exact path="/purchase" element={ <PurchasePage /> } />
          <Route exact path="/privacy" element={ <PrivacyPage /> } />
          <Route exact path="/refund" element={ <RefundPage /> } />
          <Route exact path="/productdetails" element={ <ProductDetailsPage /> } />
          <Route exact path="/notification" element={ <NotificationPage /> } />
          <Route exact path="/favorite" element={ <FavoritePage /> } />
          <Route exact path="/cart" element={ <CartPage /> } />
          <Route exact path="/about" element={ <AboutPage /> } />
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute