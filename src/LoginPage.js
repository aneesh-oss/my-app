// LoginPage.js
// LoginPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
  background-image: url('https://example.com/login-background.jpg');
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
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

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginForm>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button>Login</Button>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </LoginForm>
    </LoginPageContainer>
  );
}

export default LoginPage;


// import React from 'react';
// import styled from 'styled-components';

// const LoginPageContainer = styled.div`
//   background-image: url('your-background-image.jpg');
//   background-size: cover;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const LoginForm = styled.form`
//   /* Add your login form styles here */
// `;

// const LoginPage = () => {
//   return (
//     <LoginPageContainer>
//       <LoginForm>
//         {/* Login form fields */}
//       </LoginForm>
//     </LoginPageContainer>
//   );
// }

// export default LoginPage;
