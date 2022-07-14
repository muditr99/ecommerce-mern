import styled from 'styled-components'

const Container = styled.div`
   padding: 20px;
   display : flex;
`
const Left = styled.div`
   flex : 1;
`
const Center = styled.div`
   flex : 1;
`
const Right = styled.div`
   flex : 1;
`

function Footer() {
  return (
    <Container>
        <Left>hello</Left>
        <Center>hello</Center>
        <Right>hello</Right>
    </Container>
  )
}

export default Footer