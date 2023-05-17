import { Badge, InputBase } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import './navbar.css';
import { Button, IconButton } from '@material-ui/core'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 0.5em;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-family: 'Dancing Script', cursive;
  font-size: 2.5em;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {

  //FROM REDUX STORE CART AVAILABLE WITH PRODUCTS QUANTITY AND TOTAL
  const quantity = useSelector(state => state.cart.quantity)
  const { isFetching } = useSelector((state) => state.user);
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <InputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
            <Search style={{ color: "gray", fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MiniBiz.</Logo>
        </Center>
        <Right>
          <Link to='/register' style={{ textDecoration: 'none' }}>
            <MenuItem><Button variant="contained">Register</Button></MenuItem>
          </Link>
          {isFetching ?
            <Link to='/login' style={{ textDecoration: 'none' }}>
              <MenuItem><Button variant="contained" >Login</Button></MenuItem>
            </Link> : null
          }

          <Link to='/logout' style={{ textDecoration: 'none' }}>
            <MenuItem><Button variant="contained">Logout</Button></MenuItem>
          </Link>
          <Link to='/cart'>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <IconButton><ShoppingCartOutlined /></IconButton>
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;