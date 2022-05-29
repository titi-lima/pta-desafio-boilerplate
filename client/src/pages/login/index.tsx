import React from "react";
import { LoginContainer, Form, Container, H2, ButtonStyled } from "./styles";
import { Team } from "../../assets";
import { Button, Input } from 'antd';

export const Login: React.FC = () => {
  return (
    <>
      <H2>Your Logo</H2>
      <Container>
        <LoginContainer>
          <h3>Welcome!</h3>
          <h2>Sign up to</h2>
          <p>Lorem Ipsum is simply</p>
          <Form>
            <h6>Email</h6>
            <input type="email" name="Email" placeholder="Enter your email" />
          </Form>
          <Form>
            <h6>Username</h6>
            <input type="text" name="Username" placeholder="Enter your username" />
          </Form>
          <Form>
            <h6>Password</h6>
           <Input.Password placeholder='Enter your password'/>
          </Form>
          <Form>
            <h6>Password</h6>
           <Input.Password placeholder='Confirm your password'/>
          </Form>
          <ButtonStyled type="primary" htmlType="submit">
                Register
          </ButtonStyled>
          <p id="pid">Already have an account? <span id="myspan">Login</span> </p>
        </LoginContainer>
        <img src={Team} alt="" />
      </Container>
      <br />
      <br />
      <br />
    </>
  );
};
