import styled from "styled-components"
import * as color from "../style/Colors"
import CInput from "../C/CInput"
import CButton from "../C/CButton"
import React, { useState } from "react"
import { auth, createUserProfileDocument } from "../Database/Firebase"
const SignUp = () => {
  const [inputs, setInputs] = useState({})

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault()
    }
    const { displayName, password, ConfirmPassword, email } = inputs
    if (password !== ConfirmPassword) {
      alert("password dont match")
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserProfileDocument(user, { displayName })
    } catch (err) {
      console.log("SignUp erreur au niveau de la creation de profile ", err)
    }
  }
  const handleInputChange = (event) => {
    event.persist()
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }))
  }
  return (
    <SignUpContainer>
      <SignUpHeader>
        <Gras>I don't have an account </Gras>
        <Title>Sign up with your email and password</Title>
      </SignUpHeader>
      <CInput
        onChange={handleInputChange}
        type="text"
        label="Display Name"
        name="displayName"
        margin="3rem"
        required
      />
      <CInput
        onChange={handleInputChange}
        name="email"
        type="email"
        label="Email"
        margin="3rem"
        required
      />
      <CInput
        name="password"
        onChange={handleInputChange}
        type="password"
        label="Password"
        required
        margin="3rem"
      />
      <CInput
        name="ConfirmPassword"
        onChange={handleInputChange}
        type="password"
        label="Confirm password"
        required
        margin="5rem"
      />
      <CButton onClick={handleSubmit}>sign up</CButton>
    </SignUpContainer>
  )
}

export default SignUp
//styling

export const SignUpContainer = styled.div`
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
export const SignUpHeader = styled.div`
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
