// SignupPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignupPageContainer = styled.div`
  background-image: url('https://example.com/signup-background.jpg');
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupForm = styled.form`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

const SignupPage = () => {
  return (
    <SignupPageContainer>
      <SignupForm>
        <Input type="text" placeholder="Username" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign Up</Button>
        <p>Already have an account? <Link to="/">Log in</Link></p>
      </SignupForm>
    </SignupPageContainer>
  );
}

export default SignupPage;
