import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {
  
    constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
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
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://images.kabum.com.br/produtos/fotos/92748/cadeira-gamer-husky-snow-black-hsn-bk_1548093996_m.jpg"
                    alt=""
                  />
                  <div class="card-body">
                    <p className="product-name-on-card">Lorem Ipsum</p>
                    <p className="product-price-on-card">Price: $1</p>
                  </div>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://images.kabum.com.br/produtos/fotos/471697/notebook-gamer-acer-nitro-5-an515-47-r5su-amd-ryzen-5-7535hs-8gb-nvidia-rtx-3050-ssd-512gb-15-6-full-hd-win-11-preto-nh-qlhal-001_1689859064_m.jpg"
                    alt=""
                  />
                  <div class="card-body">
                    <p className="product-name-on-card">Lorem Ipsum</p>
                    <p className="product-price-on-card">Price: $1</p>
                  </div>
                </Card>
              </div>
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
