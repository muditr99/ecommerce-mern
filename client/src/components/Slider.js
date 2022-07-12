import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from '../data';
import { useState } from 'react';

const Container = styled.div`
   display : flex;
   height : 100vh;
   width : 100%;
   position : relative;
   overflow : hidden;
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
   opacity : 0.3;
   z-index : 1000;
`

const Wrapper = styled.div`
   height : 100%;
   display : flex;
   transform : translatex(${(props) => {return props.slideIndex * -100}}vw);
   transition : all 1.5s ease;
`
// background-color : #${props => props.bg};
const Slide = styled.div`
   display : flex;
   height : 100vh;
   width : 100vw;
`

const ImgContainer = styled.div`
   height : 100%;
   flex : 1;
`

const Image = styled.img`
   height : 75%;
   width : 65%;
   opacity : 0.9;
   margin-top : 15px;
   border-radius : 10px;
   box-shadow : 3px 4px;
`

const InfoContainer = styled.div`
   flex : 1;
   padding : 50px;
`

const Title = styled.h1`
   font-size : 70px;
`

const Desc = styled.p`
   margin : 50px 0px;
   font-size : 20px;
   font-weight : 500;
   letter-spacing : 3px;
`
// color : lightblue;
const Button = styled.button`
   padding : 10px;
   font-size : 20px;
   background : transparent;
   border : 1px solid lightgrey;
   color : orange; 
   cursor : pointer;
`

function Slider() {

   const [slideIndex, setSlideIndex] = useState(0);

   const handleClick = (direction) => {
      if(direction === "left"){
         if(slideIndex === 0){
            setSlideIndex(sliderItems.length-1);
         }else{
            setSlideIndex(slideIndex - 1);
         }
      }else{
         if(slideIndex === sliderItems.length-1){
            setSlideIndex(0);
         }else{
            setSlideIndex(slideIndex + 1);
         }
      }
   }

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlinedIcon />  
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => {
           return <Slide bg={item.bg}>
            <ImgContainer>
            <Image src="https://pbs.twimg.com/media/ERZaFQ9W4AAyzEo.jpg" />
            </ImgContainer>
            <InfoContainer>
               <Title>{item.title}</Title>
               <Desc>{item.desc}</Desc>
               <Button>Shop Now</Button>
            </InfoContainer>
            </Slide>
          })}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlinedIcon />  
        </Arrow>
    </Container>
  )
}

export default Slider