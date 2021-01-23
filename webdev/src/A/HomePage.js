import { Switch, Route, Redirect } from "react-router-dom"
import styled from "styled-components"
import Header from "../B/Header"
import ShopSection from "./ShopSection"
import Shop from "./Shop"
import Sign from "./Sign"
import * as color from "../style/Colors"
import { auth, createUserProfileDocument } from "../Database/Firebase"
import { setCurrentUser } from "../Redux/User"
import CheckoutPage from "./CheckoutPage"
import { connect } from "react-redux"
import React, { Component } from "react"
import { selCurrentUser } from "../Redux/User"
import { createStructuredSelector } from "reselect"

class HomePage extends Component {
  unsubscribefromauth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribefromauth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribefromauth()
  }
  render() {
    const { currentUser } = this.props
    return (
      <HomePageContainer>
        <Header />
        <Switch>
          <Route exact path="/" component={ShopSection} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/sign"
            render={() => (currentUser ? <Redirect to="/" /> : <Sign />)}
          />
        </Switch>
      </HomePageContainer>
    )
  }
}
const mapdispatch = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})
const mapstate = createStructuredSelector({ currentUser: selCurrentUser })

export default connect(mapstate, mapdispatch)(HomePage)

//---------------------------------------------------------------------------------------------
//styling
export const HomePageContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${color.Background()};
  display: flex;
  align-items: center;
  flex-direction: column;
`
