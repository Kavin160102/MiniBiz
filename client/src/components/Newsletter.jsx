import styled from "styled-components";
import { mobile } from "../responsive";
import { Button, TextField } from "@material-ui/core"

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 50vw;
  ${mobile({ width: "80%" })}
`;


const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter.</Title>
      <Desc>Get timely updates of your favorite products.</Desc>
      <InputContainer>
        <TextField id="filled-basic" label="EMAIL ID" variant="filled" fullWidth />
      </InputContainer>
      <Button variant='contained' color='primary' style={{ margin: 8 }}>
        Submit
      </Button>
    </Container>
  );
};

export default Newsletter;
