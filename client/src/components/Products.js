import { popularProducts } from "../data"
import Product from "./Product"
import styled from 'styled-components'


const Container = styled.div`
   display : flex;
   padding : 20px;
   flex-wrap : wrap;
`

function Products() {
  return (
    <Container>
        {popularProducts.map((item) => {
            return <Product item={item} key={item.id} />
        })}
    </Container>
  )
}

export default Products