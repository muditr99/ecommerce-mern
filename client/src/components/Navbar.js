import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Container = styled.div`
   height : 60px;
   margin-bottom : 10px; 
`

const Wrapper = styled.div`
   padding : 10px 20px;
   display : flex;
   justify-content : space-between;
   align-items : center;
`

const Left = styled.div`
   flex : 1;
   display : flex;
   align-items : center;
`

const Language = styled.span`
   font-size : 14px;
   cursor : pointer;
`

const SearchContainer = styled.div`
   border : 0.5px solid lightgrey;
   display : flex;
   align-items : center;
   margin-left : 25px;
   padding : 5px;
`

const Input = styled.input`
   border : none;
`

const Center = styled.div`
   flex : 1;
   text-align : center;
`

const Logo = styled.h1`
   font-weight : bold;
`

const Right = styled.div`
   flex : 1;
   display : flex;
   justify-content : flex-end;
   align-items : center;
`

const MenuItem = styled.div`
   font-size : 14px;
   cursor : pointer;
   margin-left : 25px;
`

function Navbar() {

   const quantity = useSelector((state) => {
      return state.changeTheNumber.quantity;
    });

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{color:"gray", fontSize:"16px"}} />
          </SearchContainer>
        </Left>
        <Center><Logo>Bestcart</Logo></Center>
        <Right>
         <MenuItem><Link to={'/register'} style={{color:"black", textDecoration:"none"}}>Register</Link></MenuItem>
         <MenuItem><Link to={'/login'} style={{color:"black", textDecoration:"none"}}>Sign In</Link></MenuItem>
         <MenuItem>
         <Badge badgeContent={quantity} color="primary">
         <Link to={'/cart'} style={{color:"black", textDecoration:"none"}}><ShoppingCartOutlinedIcon /></Link>
         </Badge>
         </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar