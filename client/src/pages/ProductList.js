import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'


const Container = styled.div`
  
`

const Title = styled.h2`
   padding : 20px;
`

const FilterContainer = styled.div`
   display : flex;
   justify-content : space-between;
   padding : 20px;
`

const Filter = styled.div`
   
`

const FilterText = styled.span`
   font-size : 20px;
   font-weight : 600;
`

const Select = styled.select`
   padding : 10px;
   margin-right : 20px;
`

const Option = styled.option`
   
`


function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filter, setFilter] = useState({});

  const handleFilterColor = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      color : value,
    })
  }

  const handleFilterSize = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      size : value,
    })
  }

  const handleFilterSort = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      sort : value,
    })
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products : </FilterText>
          <Select name="color" onChange={handleFilterColor}>
            <Option disabled>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilterSize}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort  Products : </FilterText>
          <Select name="sort" onChange={handleFilterSort}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="dec">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter}/>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList