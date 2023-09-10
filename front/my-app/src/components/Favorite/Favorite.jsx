import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import axios from 'axios'
import appURL from '../../api/appURL';
import cogoToast from 'cogo-toast';
import { Navigate } from 'react-router-dom';

class Favorite extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      userEmail: '',
      pageRefresh: false,
    }
  }

  componentDidMount() {
    window.scroll(0, 0)
    const email = localStorage.getItem('userEmail');

    if (email) {
      this.setState({ userEmail: email });
      this.fetchFavoriteProducts(email);
    } else if (this.props.user.email) {
      this.fetchFavoriteProducts(this.props.user.email);
    }
  }

  fetchFavoriteProducts(email) {
    axios.get(appURL.listFavorite(email))
      .then(response => {
        const uniqueProducts = response.data.filter((product, index, self) =>
        index === self.findIndex(p => p.product_code === product.product_code)
        );
        this.setState({ productData: uniqueProducts });
        localStorage.setItem('userEmail', email);
      })
      .catch(error => {
      });
  }

  componentWillUnmount() {
    localStorage.removeItem('userEmail');
  }

  removeProduct = (event) => {
    let product_code = event.target.getAttribute('data-code')
    let email = this.props.user.email;

    axios.get(appURL.removeFavorite(product_code, email))
    .then(response => {
      cogoToast.success("Product removed successfully.", {position: 'top-right'});
      this.setState({pageRefresh: true})
    })
    .catch(error => {
      cogoToast.error("Something went wrong. Please try again", {position: 'top-right'});
    })
  }

  pageRefresh = () => {
    if (this.state.pageRefresh) {
      window.location.reload();
    }
  };

  render() {
    if(!localStorage.getItem('token')){
      return <Navigate to="/login" />
    }
    
    const myFav = this.state.productData;
    const myView = myFav.map((ProductList, i) => {
      return <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
      <Card className="image-box card w-100">
      <img className="center w-75" src={ProductList.image} />   
      <Card.Body> 
      <p className="product-name-on-card">{ProductList.product_name}</p>
        <Button onClick={this.removeProduct} data-code={ProductList.product_code} className="btn btn-sm"> <i className="fa fa-trash-alt"></i>Remove</Button>   
      </Card.Body>
      </Card>          
      </Col>
    })
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>My Favorite</h2>
            <p>Here's a list of your favorite products</p>
          </div>

          <Row>
            {myView}
          </Row>
        </Container>
        {this.pageRefresh()}
      </Fragment>
    );
  }
}

export default Favorite;
