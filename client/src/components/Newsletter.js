import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';


const Container = styled.div`
   height : 60vh;
   background-color : #fcf5f5;
   display : flex;
   justify-content : center;
   align-items : center;
   flex-direction : column;
`
const Title = styled.h1`
   font-size : 70px;
   margin-bottom : 20px;
`
const Desc = styled.div`
   font-size : 24px;
   font-weight : 300;
   margin-bottom : 20px;
`
const InputContainer = styled.div`
   width : 50%;
   display : flex;
   justify-content : space-between;
   background-color : white;
   height : 40px;
   border : 1px solid lightgrey;
`
const Input = styled.input`
   flex : 8;
   border : none;
   padding : 20px;
`
const Button = styled.button`
   flex : 1;
   cursor : pointer;
   border : none;
   background-color : teal;
   color : white;
`

function Newsletter() {
  return (
    <Container>
        <Title>NEWSLETTER</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
           <Input placeholder='Your Email' />
           <Button>
             <SendIcon />
           </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter