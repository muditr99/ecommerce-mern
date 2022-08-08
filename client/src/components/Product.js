import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';


const Info = styled.div`
    opacity : 0;
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
    transition : all 0.5s ease;
    cursor : pointer;
`

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

   &:hover ${Info}{
    opacity : 0.8;
   }
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
   cursor : pointer;

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
                <Link to={`/product/${props.item._id}`}>
                <SearchOutlinedIcon />
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon />
            </Icon>   
        </Info>
    </Container>
  )
}

export default Product