import { Switch, Route, Redirect } from "react-router-dom"
import styled from "styled-components"
import Header from "../B/Header"
import ShopSection from "./ShopSection"
import Shop from "./Shop"
import Sign from "./Sign"
import * as color from "../style/Colors"
import { auth, createUserProfileDocument } from "../Database/Firebase"

import React, { Component } from "react"

class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
    }
  }
  unsubscribefromauth = null

  componentDidMount() {
    this.unsubscribefromauth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: { id: snapshot.id, ...snapshot.data() },
          })
        })
      } else {
        this.setState({ currentUser: null })
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribefromauth()
  }
  render() {
    return (
      <HomePageContainer>
        <Header user={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={ShopSection} />
          <Route exact path="/shop" component={Shop} />
          <Route
            exact
            path="/sign"
            render={() =>
              this.state.currentUser ? <Redirect to="/" /> : <Sign />
            }
          />
        </Switch>
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
