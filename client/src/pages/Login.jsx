import styled from "styled-components";
import { mobile } from "../responsive";
import { TextField, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import './login.css'
import { login } from "../redux/apiCalls";
import { useState } from 'react'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <TextField onChange={(e) => setUsername(e.target.value)} id="outlined-basic" label="username" variant="outlined" />
          <TextField type="password" onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="password" variant="outlined" />
          <Button onClick={handleClick} disabled={isFetching} variant='contained' color='primary'>LOGIN</Button>

          {error && <Error>Something went wrong...</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link to='/register'>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;