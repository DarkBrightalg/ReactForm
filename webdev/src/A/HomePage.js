import { Switch, Route } from "react-router-dom"
import styled from "styled-components"
import Header from "../B/Header"
import ShopSection from "./ShopSection"
import * as color from "../style/Colors"

const HomePage = () => {
  return (
    <HomePageContainer>
      <Header />
      <Switch>
        <Route exact path="/" component={ShopSection} />
      </Switch>
    </HomePageContainer>
  )
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
