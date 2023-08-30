import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import appURL from "../../api/appURL";
import axios from "axios";
import { Link } from "react-router-dom";

class NewArrival extends Component {
  
    constructor(props) {
    super(props);
    this.state={
      ProductData:[]
    }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  componentDidMount(){
    axios.get(appURL.ProductListByType("news")).then(response =>{

         this.setState({ProductData:response.data});         

    }).catch(error=>{

    });
} 

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const newList = this.state.ProductData;
    const myView = newList.map((newList, i) => {
      if(newList.discount=="na"){
        return <div>
          <Card className="image-box card">
          <Link to={"/productdetails/" + newList.id}>
          <img
            className="center"
            src={newList.image}
            alt=""
          />
          <div class="card-body">
            <p className="product-name-on-card">{newList.title}</p>
            <p className="product-price-on-card">Price: {newList.price}</p>
          </div>
          </Link>
        </Card>
        </div>
      } else {
        return <div>
          <Card className="image-box card">
          <Link to={"/productdetails/" + newList.id}>
          <img
            className="center"
            src={newList.image}
            alt=""
          />
              <div class="card-body">
              <p className="product-name-on-card">{newList.title}</p>
              <p className="product-price-on-card"><strike className="text-secondary">Price: {newList.price}</strike></p>
              </div>
              </Link>
            </Card>
        </div>
      }
    });

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>New arrival</h2>
            <a className="btn btn-sm ml2 site-btn" onClick={this.previous}>
              <i className="fa fa-angle-left"></i>
            </a>
            <a className="btn btn-sm ml2 site-btn" onClick={this.next}>
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
          <Row>
            <Slider ref={c=>(this.slider=c)}{...settings}>
              {myView}
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
              <div>
                <h3>7</h3>
              </div>
              <div>
                <h3>8</h3>
              </div>
            </Slider>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default NewArrival;
