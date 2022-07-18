import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


const Container = styled.div`
  
`
const Wrapper = styled.div`
  padding : 20px;
  display : flex;
`
const ImageContainer = styled.div`
  flex : 1;
`
const Image = styled.img`
  height : 80vh;
  width : 100%;
  object-fit : cover;
`

const InfoContainer = styled.div`
  flex : 1;
  padding : 0px 50px;
`
const Title = styled.h2`
  font-weight : 300;
`
const Desc = styled.p`
  margin : 30px 0px;
`
const Price = styled.span`
  font-weight : 100;
  font-size : 40px;
`

const FilterContainer = styled.div`
  width : 50%;
  display : flex;
  justify-content : space-between;
  margin-top : 50px;
`
const Filter = styled.div`
  display : flex;
  align-items : center;
`
const FilterTitle = styled.span`
  font-size : 18px;
  font-weight : 200;
  margin-right : 6px;
`
const FilterColor = styled.div`
  height : 20px;
  width : 20px;
  border-radius : 50%;
  background-color : ${(props) => {return props.color}};
  cursor : pointer;
  margin-right : 5px;
`
const FilterSize = styled.select`
  padding : 5px;
  cursor : pointer;
`
const FilterSizeOption = styled.option`
  
`
const AddContainer = styled.div`
  width : 50%;
  display : flex;
  justify-content : space-between;
  margin-top : 50px;
`
const AmountContainer = styled.div`
  display : flex;
  align-items : center;
`
const Amount = styled.span`
  font-weight : 600;
  height : 30px;
  width : 30px;
  border-radius : 40%;
  border : 1px solid teal;
  margin : 0px 5px;
  display : flex;
  justify-content : center;
  align-items : center;
`
const Button = styled.button`
  padding : 15px;
  cursor : pointer;
  background-color : transparent;
  border : 1px solid grey;
  color : teal;
  font-weight : 700;

  &:hover{
    background-color : #f8f4f4;
  }
`


function Product() {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <ImageContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImageContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                tristique tortor pretium ut. Curabitur elit justo, consequat id
                condimentum ac, volutpat ornare.
                </Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter>
                     <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                     </Filter>
                </FilterContainer>
                <AddContainer>
                  <AmountContainer>
                    <RemoveCircleOutlineOutlinedIcon style={{cursor : 'pointer'}} />
                    <Amount>1</Amount>
                    <AddCircleOutlineOutlinedIcon style={{cursor : 'pointer'}} />
                  </AmountContainer>
                  <Button>Add To Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product