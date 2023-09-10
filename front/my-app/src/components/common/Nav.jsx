import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios' 
import appURL from "../../api/appURL";

const StyledSearchBar = styled.div`
  margin-left: 100px;
  width:900px;
  max-height: 45px;
  background: rgba(255, 255, 255, 0.2);
  display:flex;
  align-items: center;
  border-radius: 15px;
  padding: 10px 20px;
`;

const StyledInput = styled.input`
  max-height: 20px;
  background:transparent;
  flex:1;
  border: 0;
  outline: none;
  padding: 24px 20px;
  font-size: 20px;
  color: #cac7ff;

  &::placeholder
  color: #cac7ff;
  font-weight: bold;
`;

const StyledIcon = styled.i`
  font-size: 16px; 
  margin-right: 5px; 
`;

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      loggedout: "",
      key: "",
      searchStatus: false,
      cartCount: 0,
    };
    this.Search = this.Search.bind(this);
    this.executeSearch = this.executeSearch.bind(this);
    this.searchRedirect = this.searchRedirect.bind(this);
  }

  logout = () => {
    localStorage.clear();
  };

  Search(event) {
    let key = event.target.value;
    //console.log(key);
    this.setState({key: key});
  }

  executeSearch () {
    if(this.state.key.length >= 2) {
      this.setState({searchStatus: true})
    }
  }

  searchRedirect() {
    if(this.state.searchStatus === true) {
      return <Navigate to={"/pdsearch/" + this.state.key}/>
    }
  }

  componentDidMount(){
    let product_code = this.props.product_code;
    axios.get(appURL.cartCount(product_code))
    .then((response) => {
         this.setState({cartCount:response.data})
    })
}

  render() {
    let buttons;

    if (localStorage.getItem("token")) {
      buttons = (
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/favorite" className="btn"><StyledIcon className="fa h4 fa-heart"></StyledIcon><sup><span className="badge text-white bg-danger"></span></sup></Link>
          </li>
          <li className="nav-item">
          <Link to="/notification" className="btn"><StyledIcon className="fa h4 fa-bell"></StyledIcon><sup><span className="badge text-white bg-danger"></span></sup></Link>
          </li>
          <Link to="/cart" className="btn"><StyledIcon className="fa fa-shopping-cart"><sup><span style={{ marginLeft: '5px' }} className="badge text-white bg-danger">{this.state.cartCount}</span></sup></StyledIcon></Link>
          <li className="nav-item">
          <Link
            onClick={this.logout}
            className="nav-link active"
            aria-current="page"
            to="/"
          >
            Logout
          </Link>
          </li>
          </ul>
        </div>
      );
    } else {
      buttons = (
        <div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/favorite" className="btn"><StyledIcon className="fa h4 fa-heart"></StyledIcon><sup><span className="badge text-white bg-danger"></span></sup></Link>
          </li>
          <li className="nav-item">
          <Link to="/notification" className="btn"><StyledIcon className="fa h4 fa-bell"></StyledIcon><sup><span className="badge text-white bg-danger"></span></sup></Link>
          </li>
          <Link to="/cart" className="btn"><StyledIcon className="fa fa-shopping-cart"><sup><span style={{ marginLeft: '5px' }} className="badge text-white bg-danger"></span></sup></StyledIcon></Link>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
      );
    }

    return (
      <div>
        <nav fixed={"top"} className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              React E-commerce
            </Link>
            <StyledSearchBar>
              <StyledInput 
                onChange={this.Search}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button onClick={this.executeSearch} className="btn btn-outline-light" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </StyledSearchBar>

            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>
              <span className="navbar-text">{buttons}</span>
            </div>
          </div>
          {this.searchRedirect()}
        </nav>
      </div>
    );
  }
}

export default Nav;
