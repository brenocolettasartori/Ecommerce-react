import React, { Component } from "react";
import { styled } from "styled-components";

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
                                        className="border-right pr-5 mb-5"
                                        method="post"
                                        id="contactForm"
                                        name="contactForm"
                                    >
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <StyledForm
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
                                                <textarea
                                                    className="form-control"
                                                    name="message"
                                                    id="message"
                                                    cols="30"
                                                    rows="7"
                                                    placeholder="Write your message"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <StyledButton
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
            </Content>
        );
    }
}

export default Contact;
