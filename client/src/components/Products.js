import { popularProducts } from "../data"
import Product from "./Product"
import styled from 'styled-components'
import { useEffect, useState } from "react"
import axios from "axios"


const Container = styled.div`
   display : flex;
   padding : 20px;
   flex-wrap : wrap;
`

function Products(props) {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try{
          const res = await axios.get(
            props.cat ? `http://localhost:8000/products/find?category=${props.cat}` : "http://localhost:8000/products/find"
          );
          console.log(res);
      }catch(err){
          console.log(err);
      }
  }
  getProducts();
  }, [props.cat]);
  
  return (
    <Container>
        {popularProducts.map((item) => {
            return <Product item={item} key={item.id} />
        })}
    </Container>
  )
}

export default Products