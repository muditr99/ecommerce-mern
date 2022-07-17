import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'


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
  
`
const Filter = styled.div`
  
`
const FilterTitle = styled.span`
  
`
const FilterColor = styled.div`
  
`
const FilterSize = styled.select`
  
`
const FilterSizeOption = styled.option`
  
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
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product