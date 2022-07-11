import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


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
        <Center><Logo>ECommerce App</Logo></Center>
        <Right>
         <MenuItem>Register</MenuItem>
         <MenuItem>Sign In</MenuItem>
         <MenuItem>
         <Badge badgeContent={4} color="primary">
           <ShoppingCartOutlinedIcon />
         </Badge>
         </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar