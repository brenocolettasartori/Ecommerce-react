import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import appURL from "../../api/appURL";
import { toast } from "react-toastify";
import { ToastContainer } from "react-bootstrap";

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

class ForgetPassword extends Component {

  state = {
    email:'',
    message:'',
  }

  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
    }

    axios.post(appURL.userForget, data)
      .then((response) => {
        this.setState({message:response.data.message})
        toast.success(this.state.message,{
            position: "top-right"
       });
        document.getElementById("forgetform").reset();
      })
      .catch((error) => {
        this.setState({message:error.response.data.message})
      });
  }

  render() {

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
                  <h3 className="pt-3 font-weight-bold">Forgot your password?</h3>
                <h9>Enter the registered email and <br></br>we'll send you a link to reset your password</h9>
                </div>
                <div className="panel-body p-3">
                  <form onSubmit={this.formSubmit} id="forgetform">
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
                    <StyledButton
                      type="submit"
                      className="btn btn-primary btn-block mt-3"
                    >
                      Reset Password
                    </StyledButton>
                    <div className="text-center pt-4 text-muted">
                      
                      <Link to="/login">Back to sign in</Link>{" "}
                    </div>
                    <br></br>
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

export default ForgetPassword;
