import styled from 'styled-components';
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


const Conatiner = styled.div`

`

const Wrapper = styled.div`
  padding : 50px;
`

const Title = styled.h2`
  font-weight : 300;
  text-align : center;
`

const Top = styled.div`

`

const TopButton = styled.button`

`

const Bottom = styled.div`
  display : flex;
  justify-content : space-between;
`

const Info = styled.div`
  flex : 3;
`

const Product = styled.div`
  display : flex;
  justify-content : space-between;
`

const ProductDetails = styled.div`
  flex : 2;
  display : flex;
`

const Image = styled.img`
  width : 200px;
`

const Details = styled.div`
  padding : 10px;
  display : flex;
  flex-direction : column;
  justify-content : space-around;
  margin-left : 30px;
`

const ProductName = styled.span`
  
`

const ProductId = styled.span`
  
`

const ProductColor = styled.div`
  height : 20px;
  width : 20px;
  border-radius : 50%;
  background-color : ${props => props.color};
`

const ProductSize = styled.span`
  
`

const PriceDetails = styled.div`
  flex : 1;
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
`

const ProductAmountContainer = styled.div`
  display : flex;
`

const ProductAmount = styled.div`
  height : 20px;
  width : 20px;
  border : 1px solid teal;
  border-radius : 40%;
  margin : 0px 5px;
  display : flex;
  justify-content : center;
  align-items : center;
`

const ProductPrice = styled.span`
  margin-top : 10px;
`

const Summary = styled.div`
  flex : 1;
  height : 300px;
  width : 300px;
  border : 0.5px solid lightgrey;
  border-radius : 10px;
  display : flex;
  flex-direction : column;
  justify-content : space-around;
  align-items : center;
  border-bottom : none;
`

const SummaryTitle = styled.h2`
  font-weight : 200;
`

const SummaryItem = styled.div`
  display : flex;
  justify-content : space-between;
  width : 90%;
  font-weight : ${props => props.type == 'total' && 500};
  font-size : ${props => props.type == 'total' && '20px'};
`

const SummaryItemText = styled.span`
 
`

const SummaryItemPrice = styled.span`
  
`

const Hr = styled.hr`
  border : none;
  background-color : #eee;
  height : 1px;
`

const Button = styled.button`
  width : 100%;
  padding : 10px;
  border : none;
  background-color : black;
  color : white;
  cursor : pointer;
  font-size : 18px;
`


function Cart() {
  return (
    <Conatiner>
        <Announcement />
        <Navbar />
        <Wrapper>
            <Title>Your Bag</Title>
            {/* <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopButton>Checkout Now</TopButton>
            </Top> */}
            <Bottom>
                <Info>
                    
                    <Product>
                        <ProductDetails>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7TM5ZnM_z32bCaUiKUe8ieLqlawknynJ9g&usqp=CAU" />
                            <Details>
                                <ProductName><b>Product:</b> Predator</ProductName>
                                <ProductId><b>Id:</b> 5451213</ProductId>
                                <ProductColor color="black" />
                                <ProductSize>8</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <AddCircleOutlineOutlinedIcon />
                                <ProductAmount>2</ProductAmount>
                                <RemoveCircleOutlineOutlinedIcon />
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetails>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7TM5ZnM_z32bCaUiKUe8ieLqlawknynJ9g&usqp=CAU" />
                            <Details>
                                <ProductName><b>Product:</b> Predator</ProductName>
                                <ProductId><b>Id:</b> 5451213</ProductId>
                                <ProductColor color="black" />
                                <ProductSize>8</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <AddCircleOutlineOutlinedIcon />
                                <ProductAmount>2</ProductAmount>
                                <RemoveCircleOutlineOutlinedIcon />
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetails>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7TM5ZnM_z32bCaUiKUe8ieLqlawknynJ9g&usqp=CAU" />
                            <Details>
                                <ProductName><b>Product:</b> Predator</ProductName>
                                <ProductId><b>Id:</b> 5451213</ProductId>
                                <ProductColor color="black" />
                                <ProductSize>8</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <AddCircleOutlineOutlinedIcon />
                                <ProductAmount>2</ProductAmount>
                                <RemoveCircleOutlineOutlinedIcon />
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetails>
                    </Product>

                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal:</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping:</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount:</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total:</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <Button>Checkout</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Conatiner>
  )
}

export default Cart