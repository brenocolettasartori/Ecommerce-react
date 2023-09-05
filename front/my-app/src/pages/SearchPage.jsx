import React, { Fragment, useState, useEffect } from 'react'
import Nav from '../components/common/Nav';
import Footer from '../components/common/Footer';
import { useParams } from 'react-router-dom';
import SearchList from '../components/Products/SearchList';
import axios from 'axios';
import appURL from '../api/appURL';


function SearchPage() {
    const { key } = useParams();
    const [productData, setProductData] = useState([]);
  
    useEffect(() => {
      window.scroll(0, 0);
    axios.get(appURL.searchByProduct(key)) 
    .then(response => {
      setProductData(response.data);
    })
    .catch(error => {

    });
    }, [key]);
  
    return (
      <Fragment>
        <Nav />
        <SearchList seKey={key} productData={productData}/>
        <Footer />
      </Fragment>
    );
  }
  
  export default SearchPage;