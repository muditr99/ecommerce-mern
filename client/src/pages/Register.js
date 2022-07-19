import styled from "styled-components";


const Container = styled.div`
  height : 100vh;
  width : 100vw;
  display : flex;
  justify-content : center;
  align-items : center;
  background : url("https://images.mid-day.com/images/images/2022/jul/football-stock-a_d.jpg") no-repeat center;
  background-size : cover;
`

const Wrapper = styled.div`
  width : 40%;
  padding : 20px;
  background-color: white;
`

const Title = styled.h2`
  font-size : 24px;
  font-weight : 300;
  text-align : center;
`

const Form = styled.form`
  display : flex;
  flex-wrap : wrap;
`

const Input = styled.input`
  flex : 1;
  min-width : 40%;
  margin : 20px 10px 0px 0px;
  padding : 10px;
`

const Button = styled.button`
  width : 40%;
  border : none;
  background-color : teal;
  color : white;
  cursor : pointer;
  margin-top : 30px;
  margin-left : 28%;
  padding : 15px 20px;
`


function Register() {
  return (
    <Container>
        <Wrapper>
            <Title>Create Account</Title>
            <Form>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="Username" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register