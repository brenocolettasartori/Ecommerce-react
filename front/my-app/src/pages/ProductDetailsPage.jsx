import React, { Component, Fragment, useEffect, useState } from 'react'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'
import ProductDetails from '../components/Products/ProductDetails'
import SuggestedProduct from '../components/Products/SuggestedProduct'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import appURL from '../api/appURL'

function ProductDetailsPage(props) {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
  window.scroll(0, 0);

  axios.get(appURL.ProductDetails(id)) 
  .then(response => {
    setProductData(response.data);
  })
  .catch(error => {
    console.error("Error fetching product details:", error);
  });
  }, [id]);

  const user = props.user;

  return (
    <Fragment>
        <Nav/>
        <ProductDetails productData={productData} user={user}/>
        {/* <SuggestedProduct/> */}
        <Footer/>
    </Fragment>
  );
}

export default ProductDetailsPage;
