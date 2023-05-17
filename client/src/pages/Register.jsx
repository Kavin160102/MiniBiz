import styled from "styled-components";
import { mobile } from "../responsive";
import { Button, TextField } from '@material-ui/core'
import './register.css'
// import { useEffect } from 'react'
// import axios from 'axios'
// import { publicRequest } from "../requestMethods";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Register = () => {

  // useEffect(() => {

  //   //GET PRODUCT API CONNECT
  //   const register = async () => {
  //     try {
  //       const res = await publicRequest.post("/auth/register");
  //       setProduct(res.data);
  //     } catch { }
  //   };
  //   getProduct();
  // }, [id]);

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <TextField className="textfield" id="outlined-basic" label="name" variant="outlined" />
          <TextField className="textfield" id="outlined-basic" label="last name" variant="outlined" />
          <TextField className="textfield" id="outlined-basic" label="username" variant="outlined" />
          <TextField className="textfield" id="outlined-basic" label="email" variant="outlined" />
          <TextField className="textfield" id="outlined-basic" label="password" variant="outlined" />
          <TextField className="textfield" id="outlined-basic" label="confirm password" variant="outlined" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button className='center' variant='contained' color='primary'>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;