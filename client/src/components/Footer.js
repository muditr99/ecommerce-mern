import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import RoomIcon from '@mui/icons-material/Room';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


const Container = styled.div`
   padding: 20px;
   display : flex;
`


const Left = styled.div`
   flex : 1;
   display : flex;
   flex-direction : column;
   padding : 20px;
`
const Logo = styled.h2`

`
const Desc = styled.p`
   margin-bottom : 20px;
`
const Socialcontainer = styled.div`
    display : flex;
`
const Socialicon = styled.div`
    margin-right : 18px;
    cursor : pointer;
`


const Center = styled.div`
   flex : 1;
   padding : 20px;
`
const Title = styled.h2`
   margin-bottom : 30px;
`
const List = styled.ul` 
   margin : 0px;
   padding : 0px;
   list-style : none;
   display : flex;
   flex-wrap : wrap;
`
const ListItem = styled.li`
   width : 50%;
   cursor : pointer;
   margin-bottom : 10px;
`


const Right = styled.div`
   flex : 1;
   padding : 20px;
`
const ContactItem = styled.div`
   margin-bottom : 18px;
`
const Room = styled.div`
 
`
const Payment = styled.img`
  margin-top : 10px;
`


function Footer() {
  return (
    <Container>
        <Left>
        <Logo>Bestcart</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </Desc>
        <Socialcontainer>
         <Socialicon>
           <FacebookIcon />
         </Socialicon>
         <Socialicon>
           <InstagramIcon />
         </Socialicon>
         <Socialicon>
           <TwitterIcon />
         </Socialicon>
         <Socialicon>
           <RedditIcon />
         </Socialicon>
        </Socialcontainer>
        </Left>
        <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
        </Center>
        <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{marginRight : '10px'}} /> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <PhoneOutlinedIcon style={{marginRight : '10px'}} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{marginRight : '10px'}} /> contact@lama.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer