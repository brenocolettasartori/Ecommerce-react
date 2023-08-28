import React, { Fragment, useState, useEffect } from 'react'
import Nav from '../components/common/Nav';
import Footer from '../components/common/Footer';
import { useParams } from 'react-router-dom';
import Category from '../components/Products/Category';
import axios from 'axios';
import appURL from '../api/appURL';


function CategoryPage() {
    const { category } = useParams();
    const [productData, setProductData] = useState([]);
  
    useEffect(() => {
      window.scroll(0, 0);
    //   console.log('Selected category:', category);
    //   alert(category)
    axios.get(appURL.ProductListByCategory(category)) 
    .then(response => {
      setProductData(response.data);
    })
    .catch(error => {

    });
    }, [category]);
  
    return (
      <Fragment>
        <Nav />
        <Category Category={category} productData={productData}/>
        <Footer />
      </Fragment>
    );
  }
  
  export default CategoryPage;
