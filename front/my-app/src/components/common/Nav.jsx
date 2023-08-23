import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const StyledCartButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  padding-right: 10px;
`;

const StyledIcon = styled.i`
  font-size: 16px; 
  margin-right: 5px; 
`;

class Nav extends Component {
  state = {
    loggedout: "",
  };

  logout = () => {
    localStorage.clear();
    this.props.setUser(null);
  };

  render() {
    let buttons;

    if (localStorage.getItem("token")) {
      buttons = (
        <div>
          <Link
            onClick={this.logout}
            className="nav-link active"
            aria-current="page"
            to="/"
          >
            Logout
          </Link>
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
          <Link to="/cart" className="btn"><StyledIcon className="fa fa-shopping-cart"><sup><span style={{ marginLeft: '5px' }} className="badge text-white bg-danger">3</span></sup></StyledIcon></Link>
          </li>
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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              React E-commerce
            </Link>
            <StyledSearchBar>
              <StyledInput 
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </StyledSearchBar>

            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>
              <span className="navbar-text">{buttons}</span>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
