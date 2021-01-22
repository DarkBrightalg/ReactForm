import styled from "styled-components"
import SignIn from "../B/SignIn"
import SignUp from "../B/SignUp"
const Sign = () => {
  return (
    <SignContainer>
      <SignIn />
      <SignUp />
    </SignContainer>
  )
}

export default Sign
//styling

export const SignContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
