import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';

const Container = styled.div`
   display : flex;
   height : 100vh;
   width : 100%;
   position : relative;
`

const Arrow = styled.div`
   width : 50px;
   height : 50px;
   background-color : #fff7f7;
   border-radius : 50%;
   display : flex;
   justify-content : center;
   align-items : center;
   position : absolute;
   top : 0;
   bottom : 0;
   left : ${props => props.direction === "left" && "10px"};
   right : ${props => props.direction === "right" && "10px"};
   margin : auto;
   cursor : pointer;
   opacity : 0.5;
`

const Wrapper = styled.div`
   height : 100%;
`

const Slide = styled.div`
   display : flex;
   height : 100vh;
   width : 100vw;
`
const ImgContainer = styled.div`
   height : 100%;
   flex : 1;
`
const InfoContainer = styled.div`
   flex : 1;
`
const Image = styled.img`
   height : 80%;
   width : 65%;
`

function Slider() {
  return (
    <Container>
        <Arrow direction="left">
          <ArrowLeftOutlinedIcon />  
        </Arrow>
        <Wrapper>
            <Slide>
            <ImgContainer>
            <Image src="data:image/jpeg;base64,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" />
            </ImgContainer>
            <InfoContainer>

            </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
          <ArrowRightOutlinedIcon />  
        </Arrow>
    </Container>
  )
}

export default Slider