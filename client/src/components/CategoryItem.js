import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  flex : 1;
  margin : 3px;
  height : 70vh;
  position : relative;
`
const Image = styled.img`
  width : 100%;
  height : 100%;
  object-fit : cover;
`
const Info = styled.div`
  position : absolute;
  width : 100%;
  height : 100%;
  top : 0;
  left : 0;
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
`
const Title = styled.h1`
  color : white;
  margin-bottom : 20px;
`
const Button = styled.button`
  border : none;
  padding : 10px;
  background-color : white;
  color : grey;
  font-weight : 600;
  cursor : pointer;
`

function CategoryItem(props) {
  return (
    <Container>
        <Image src={props.item.img} />
        <Link to={`/products/${props.item.cat}`}>
        <Info>
            <Title>{props.item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem