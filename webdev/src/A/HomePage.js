import React, { Component } from "react"
import styled from "styled-components"
import Header from "../B/Header"
import ShopSection from "./ShopSection"
import * as color from "../style/Colors"
class HomePage extends Component {
  render() {
    return (
      <HomePageContainer>
        <Header />
        <ShopSection />
      </HomePageContainer>
    )
  }
}

export default HomePage

export const HomePageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${color.Background()};
  display: flex;
  align-items: center;
  flex-direction: column;
`
