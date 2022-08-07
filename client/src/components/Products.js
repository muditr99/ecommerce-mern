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
          setProducts(res.data.products);
      }catch(err){
          console.log(err);
      }
  }
  getProducts();
  }, [props.cat]);
  

  useEffect(() => {
    props.cat && setFilterProducts(

    products.filter((item) => {
      let ans;
      Object.entries(props.filter).forEach(([key, value]) => {
        ans = item[key].includes(value);
      })
      if(ans){
        return true;
      }
      return false;
    })

    )

  }, [products, props.cat, props.filter]);


  useEffect(() => {
    if(props.sort === "newest"){
      setFilterProducts((prev) => {
        return [...prev].sort((a, b) => {
          return a.createdAt - b.createdAt;
        })
      })
    }else if (props.sort === "asc") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [props.sort])


  return (
    <Container>
        {props.cat ? filterProducts.map((item) => {
            return <Product item={item} key={item.id} />
        }) : 
        products.slice(0, 8).map((item) => {
          return <Product item={item} key={item.id} />
        })
        }
    </Container>
  )
}

export default Products