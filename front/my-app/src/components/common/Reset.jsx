import React, { Component } from "react";
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import appURL from "../../api/appURL";

const Container = styled.div`
  margin: 50px auto;
  text-align: center;
`;

const Panel = styled.div`
  min-height: 380px;
  box-shadow: 20px 20px 80px rgb(218, 218, 218);
  border-radius: 12px;
`;

const InputField = styled.div`
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #ddd;
  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  box-shadow: none;
  width: 100%;
  height: 35px;
`;

const StyledButton = styled.button`
  margin-top: 20px;
  border-radius: 15px;
  width: 100%;
  background-color: #000;
  border-color: #000;

  &:hover{
    background-color: #000;
    border-color: #000;
  }
`;

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
`;

const StyledDiv = styled.div`
  border-top: 1px solid #aaa;
  position: relative;
  text-align: center;

  &:after {
    content: "or connect with";
    position: absolute;
    top: -13px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    padding: 0px 8px;
  }
`;

const InputIcon = styled.i`
  margin-right: 10px;
`;

class Reset extends Component {

  state = {
    token:'',
    email:'',
    password:'',
    password_confirmation:'',
    message:'',
  }

  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      token: this.state.token,
      email: this.state.email,
      password: this.state.password,
      password_confirmation:this.state.password_confirmation
    }

    axios.post(appURL.userReset, data)
      .then((response) => {
        this.setState({message:response.data.message})
        document.getElementById("formsubmit").reset()
      })
      .catch((error) => {
        this.setState({message:error.response.data.message})
      });
  }

  render() {

    if(this.state.loggedIn){
      return <Navigate to={'/profile'}/>
    }

    let error="";
    if(this.state.message) {
      error = (
        <div>
          <div className="alert alert-danger" role="alert">{this.state.message}</div>
        </div>
      )
    }
    return (
      <div>
        <Container>
          <div className="row">
            <div className="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3">
              <Panel>
                <div className="panel-heading">
                  <h3 className="pt-3 font-weight-bold">Reset account password</h3>
                </div>
                <div className="panel-body p-3">
                  <form onSubmit={this.formSubmit} id="formsubmit">
                    <div className="form-group py-2">
                      <InputField>
                        <span className="p-2">
                          <InputIcon className="fa fa-map-marker"></InputIcon>
                          <StyledInput
                            type="text"
                            placeholder="Pin Code"
                            required
                            onChange={(e)=>{this.setState({token:e.target.value})}}
                          />
                        </span>
                      </InputField>
                    </div>
                    <div className="form-group py-1 pb-2">
                      <InputField>
                        <span className="px-2">
                          <InputIcon className="fa fa-envelope"></InputIcon>
                          <StyledInput
                            type="email"
                            placeholder="Email"
                            required
                            onChange={(e)=>{this.setState({email:e.target.value})}}
                          />
                        </span>
                      </InputField>
                    </div>
                    <div className="form-group py-1 pb-2">
                      <InputField>
                        <span className="px-2">
                          <InputIcon className="fas fa-lock"></InputIcon>
                          <StyledInput
                            type="password"
                            placeholder="New Password"
                            required
                            onChange={(e)=>{this.setState({password:e.target.value})}}
                          />
                        </span>
                      </InputField>
                    </div>
                    <div className="form-group py-1 pb-2">
                      <InputField>
                        <span className="px-2">
                          <InputIcon className="fas fa-lock"></InputIcon>
                          <StyledInput
                            type="password"
                            placeholder="Confirm New Password"
                            required
                            onChange={(e)=>{this.setState({password_confirmation:e.target.value})}}
                          />
                        </span>
                      </InputField>
                    </div>
                    <StyledButton
                      type="submit"
                      className="btn btn-primary btn-block mt-3"
                    >
                      Reset
                    </StyledButton>
                    <div className="text-center pt-4 text-muted">
                      Already have an account?{" "}
                      <Link to="/login">Login</Link>{" "}
                    </div>
                    <div className="text-center pt-4 text-muted">
                      <Link
                        to="/forget"
                        id="forgot"
                        className="font-weight-bold"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </form>
                  { error }
                </div>
                <StyledDiv>
                  <div className="text-center py-3">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      className="px-2"
                    >
                      {" "}
                      <StyledImg
                        src="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.google.com"
                      target="_blank"
                      className="px-2"
                    >
                      {" "}
                      <StyledImg
                        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                        alt=""
                      />{" "}
                    </a>
                    <a
                      href="https://www.github.com"
                      target="_blank"
                      className="px-2"
                    >
                      {" "}
                      <StyledImg
                        src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png"
                        alt=""
                      />
                    </a>
                  </div>
                </StyledDiv>
              </Panel>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Reset;
