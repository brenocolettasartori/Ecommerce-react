import React, { Component, Fragment } from "react";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import HomeTop from "../components/home/HomeTop";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import appURL from "../api/appURL";
import axios from 'axios';

class HomePage extends Component {

  componentDidMount() {
    window.scroll(0, 0);
    this.GetVisitorDetails();
  }

  GetVisitorDetails = () => {
    axios.get(appURL.VisitorDetails)
      .then()
      .catch()
  }

  render() {
    return (
      <Fragment>
        <Nav/>
        <NewArrival />
        {/* <HomeTop/> */}
        <FeaturedProducts />
        <Categories />
        <Collection />
        <Footer/>
      </Fragment>
    );
  }
}

export default HomePage;
