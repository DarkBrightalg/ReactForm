import styled from "styled-components"
import * as color from "../style/Colors"
import CInput from "../C/CInput"
import CButton from "../C/CButton"
import React, { useState } from "react"
import { signinwithgoogle } from "../Database/Firebase"
const SignIn = () => {
  const [inputs, setInputs] = useState({})
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault()
    }
    console.log("Signin ", inputs)
  }
  const handleSubmitGoogle = (event) => {
    if (event) {
      event.preventDefault()
    }
    signinwithgoogle()
  }
  const handleInputChange = (event) => {
    event.persist()
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }))
  }
  return (
    <SignInContainer>
      <SignInHeader>
        <Gras>I already have an account</Gras>
        <Title>Sign in with email and password.</Title>
      </SignInHeader>
      <CInput
        onChange={handleInputChange}
        name="email"
        type="email"
        label="Email"
        margin="3rem"
        required
      />
      <CInput
        onChange={handleInputChange}
        name="password"
        type="password"
        label="Password"
        required
        margin="5rem"
      />
      <ButtonsContainer>
        <CButton onClick={handleSubmit}>sign in</CButton>
        <CButton onClick={handleSubmitGoogle} coloration margin="1rem">
          sign in with google
        </CButton>
      </ButtonsContainer>
    </SignInContainer>
  )
}

export default SignIn
//styling
export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const SignInContainer = styled.div`
  margin: 3rem;
  min-width: 30rem;
  border-radius: 3rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  color: ${color.Primary()};
  &:hover {
    box-shadow: 0 0 3rem ${color.Primary(0.1)};
  }
`
export const SignInHeader = styled.div`
  height: 5rem;
  display: flex;
  line-height: 2rem;
  flex-direction: column;
  margin-bottom: 3rem;
`
export const Gras = styled.span`
  font-size: 2.3rem;
  font-weight: 800;
`
export const Title = styled.span`
  font-size: 2rem;
  font-weight: 100;
`
