import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { styled } from "styled-components";
import validation from '../../validation/Validation';
import axios from 'axios' 
import appURL from '../../api/appURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Content = styled.div`
    padding: 7rem 0; 
`;

const StyledH2 = styled.h2`
    font-size: 3.5rem;
    font-weight: 700;
`;

const StyledH3 = styled.h3`
    font-size: 2rem;
    font-weight: 700;
`;

const StyledForm = styled.input`
    border: none;
    border-bottom: 1px solid #d9d9d9;
    padding-left: 0;
    padding-right: 0;
    border-radius: 0;
    margin-bottom: 40px;

    &:active,
    &:focus {
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        border-color: #000;
    }
`;

const StyledSpan = styled.span`
    float: left;
    width: 100%;
    padding: 10px 0;
    display: none;
    font-weight: bold;
    font-size: 12px;
    color: #000;
`;

const StyledButton = styled.input`
    margin-top: 20px;
    color: #fff;
    background-color: #aaa;
    border: none;
    border-radius: 5px;
`;

const StyledLink = styled.a`
    -webkit-transition: .3s all ease;
    -o-transition: .3s all ease;
    transition: .3s all ease; }
   
    &:hover {
      text-decoration: none !important; }
`

class Contact extends Component {

    constructor() {
        super();
        this.state={
            name:"",
            email:"",
            message:"",
        }
    }

        nameOnChange = (event) => {
            let name = event.target.value;
            //alert(name);
            this.setState({name: name})
        }
        
        emailOnChange = (event) => {
            let email = event.target.value;
            //alert(email);
            this.setState({email: email})
        }

        messageOnChange = (event) => {
            let message = event.target.value;
            //alert(message);
            this.setState({message: message})
        }

        onFormSubmit = (event) => {
            // alert("message");
            let name = this.state.name;
            let email = this.state.email;
            let message = this.state.message;
            let sendBtn = document.getElementById('sendBtn');
            let contactForm = document.getElementById('contactForm');

            if(message.length == 0) {
                toast.error("There was a problem delivering your message. Message can't be empty, please try again.");
            } else if(name.length == 0) {
                toast.error("Please write your name.");
            } else if(email.length == 0) {
                toast.error("Please write your email.");
            } else if(!(validation.nameRegex).test(name)) {
                toast.error("Invalid name.");
            } else {
                sendBtn.innerHTML="Sending...";
                let myFormData = new FormData();
                myFormData.append("name", name);
                myFormData.append("email", email);
                myFormData.append("message", message);

                axios.post(appURL.PostContact, myFormData)
                .then(function(response){
                    if(response.status == 200 && response.data == 1) {
                        toast.success("Message sent, thank you for your support.");
                        sendBtn.innerHTML="Send Message";
                        contactForm.reset();
                    } else {
                        toast.error("error");
                        sendBtn.innerHTML="Send Message";
                    }
                })
                .catch(function(error) {
                    toast.error(error);
                    sendBtn.innerHTML="Send Message";
                });
            }

            event.preventDefault();
        }

    render() {
        return (
            <Content>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row align-items-center">
                                <div className="col-lg-7 mb-5 mb-lg-0">
                                    <StyledH2 className="mb-5">
                                        Fill the form. <br /> It's easy.
                                    </StyledH2>

                                    <form
                                        id="contactForm"
                                        onSubmit={this.onFormSubmit}
                                        className="border-right pr-5 mb-5"
                                        // method="post"
                                        id="contactForm"
                                        name="contactForm"
                                    >
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <StyledForm
                                                    onChange={this.nameOnChange}
                                                    type="text"
                                                    className="form-control"
                                                    name="fname"
                                                    id="fname"
                                                    placeholder="First name"
                                                />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <StyledForm
                                                    type="text"
                                                    className="form-control"
                                                    name="lname"
                                                    id="lname"
                                                    placeholder="Last name"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <StyledForm
                                                    onChange={this.emailOnChange}
                                                    type="text"
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <Form.Control as="textarea" rows={4}
                                                    onChange={this.messageOnChange}
                                                    className="form-control"
                                                    name="message"
                                                    id="message"
                                                    cols="30"
                                                    placeholder="Write your message"
                                                ></Form.Control>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <StyledButton
                                                    id="sendBtn"
                                                    type="submit"
                                                    value="Send Message"
                                                    className="btn btn-primary rounded-0 py-2 px-4"
                                                />
                                                <StyledSpan className="submitting"></StyledSpan>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-4 ml-auto">
                                    <StyledH3 className="mb-4">Let's talk about everything.</StyledH3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Nihil deleniti itaque similique magni. Magni, laboriosam
                                        perferendis maxime!
                                    </p>
                                    <p>
                                        <StyledLink href="#">Read more</StyledLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer/>
            </Content>
        );
    }
}

export default Contact;
