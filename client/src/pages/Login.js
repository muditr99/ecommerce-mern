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
  width : 30%;
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
  flex-direction : column;
  padding : 10px;
`

const Input = styled.input`
  min-width : 30%;
  max-width : 80%;
  margin : 20px 20px;
  padding : 10px;
`

const Button = styled.button`
  width : 30%;
  border : none;
  background-color : teal;
  color : white;
  cursor : pointer;
  margin-top : 15px;
  margin-left : 35%;
  margin-bottom : 10px;
  padding : 15px 20px;
  font-size : 17px;
`

const LinkContainer = styled.div`
  display : flex;
  justify-content : space-between;
  align-items : center;
  margin : 10px;
`

const Link = styled.a`
  padding : 10px;
  cursor : pointer;
  text-decoration : underline;
  font-size : 16px;
`


function Login() {
  return (
    <Container>
      <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Button>Login</Button>
                <LinkContainer>
                <Link>Forgot Password?</Link>
                <Link>Signup</Link>
                </LinkContainer>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login