import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Container = styled.div`
   flex : 1;
   margin : 5px;
   min-width : 280px;
   heigth : 350px;
   display : flex;
   justify-content : center;
   align-items : center;
   background-color : #f5fbfd;
   position : relative;
`

const Circle = styled.div`
   height : 200px;
   width : 200px;
   border-radius : 50%;
   background-color : white;
   position : absolute;
   left : ;
   top : ;
`

const Image = styled.img`
   height : 75%;
   width : 100%;
   z-index : 3;
`

const Info = styled.div`
    height : 100%;
    width : 100%;
    background-color : rgba(0, 0, 0, 0.2);
    position : absolute;
    left : 0;
    top : 0;   
    z-index : 4;
    display : flex;
    justify-content : center;
    align-items : center;
`

const Icon = styled.div`
   height : 40px;
   width : 40px;
   border-radius : 50%;
   background-color : white;
   display : flex;
   justify-content : center;
   align-items : center;
   margin : 10px;
   transition : all 0.5s ease;

   &:hover{
    background-color : #e9f5f5;
    transform : scale(1.1);
   }
`

function Product(props) {
  return (
    <Container>
        <Circle></Circle>
        <Image src={props.item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon />
            </Icon>
            <Icon>
                <SearchOutlinedIcon />
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon />
            </Icon>   
        </Info>
    </Container>
  )
}

export default Product