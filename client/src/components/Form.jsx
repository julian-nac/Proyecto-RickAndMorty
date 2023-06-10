import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import validate from './validation';

const StyledForm = styled.form`
  background-image: url(https://www.xtrafondos.com/wallpapers/paisaje-de-rick-y-morty-9415.jpg);
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
-webkit-text-stroke: 1.2px black;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 26px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1.5px 1.5px #000;
`;

const Input = styled.input`
  width: 24%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
`;

const Button = styled.button`
  width: 25%;
  padding: 0.5rem;
  margin-top: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #008c26;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #005f16;
  }
`;
const ErrorMsg = styled.p`
color: red;
font-size: 18px;
font-weight: bold;
-webkit-text-stroke: 1px black;
`;
const LoginForm = ({ login }) => {
    const [userData, setUserData] = useState({ username: "", password: "" });
  
    const [errors, setErrors] = useState({ username: "", password: ""});
  
    const handleInputChange = (event) => {
      setUserData({
        ...userData,
        [event.target.name]: event.target.value,
      });
      setErrors(validate({
        ...userData,
        [event.target.name]: event.target.value,
      }));
    };

    const handleSubmit = (event) => {
      event.preventDefault()
      login(userData)
    } 

    return (
    <StyledForm onSubmit={handleSubmit}>
      <Label htmlFor="username">Username:</Label>
      <Input type="text" name="username" value={userData.username} onChange={handleInputChange} />
      {errors.username && <ErrorMsg style={{color: 'red'}}>{errors.username}</ErrorMsg>}

      <Label htmlFor="password">Password:</Label>
      <Input type="password" name="password" value={userData.password} onChange={handleInputChange} />
      {errors.password && <ErrorMsg style={{color: 'red'}}>{errors.password}</ErrorMsg>}

      <Button type="submit">Log In</Button>
    </StyledForm>
  );
} 
  


export default LoginForm;
