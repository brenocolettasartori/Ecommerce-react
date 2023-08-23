import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";

const Container = styled.div`
  margin: 50px auto;
  text-align: center;
`;

const Panel = styled.div`
  min-height: 380px;
  box-shadow: 20px 20px 80px rgb(218, 218, 218);
  border-radius: 12px;
`;

const InputIcon = styled.i`
  margin-right: 10px;
`;

class Profile extends Component {
  render() {

    let name;
    let email;

    if(this.props.user){
      name = this.props.user.name;
      email = this.props.user.email;
    }

    if(!localStorage.getItem('token')){
      return <Navigate to={'/login'}/>
    }
    
    return (
      <div>
        <Container>
          <div className="row">
            <div className="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3">
              <Panel>
                <div className="panel-heading">
                  <h3 className="pt-3 font-weight-bold">Profile</h3>
                </div>
                <ul class="list-group">
                  <li class="list-group-item">Name: {name}</li>
                  <li class="list-group-item">Email: {email}</li>
                </ul>
              </Panel>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Profile;
