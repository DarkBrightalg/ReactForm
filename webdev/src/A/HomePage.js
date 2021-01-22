import { Switch, Route, Redirect } from "react-router-dom"
import styled from "styled-components"
import Header from "../B/Header"
import ShopSection from "./ShopSection"
import Shop from "./Shop"
import Sign from "./Sign"
import * as color from "../style/Colors"
import { auth, createUserProfileDocument } from "../Database/Firebase"
import { setCurrentUser } from "../Redux/User"
import { connect } from "react-redux"
import React, { Component } from "react"

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
const mapstatetoprops = (state) => ({
  currentUser: state.User.currentUser,
})
export default connect(mapstatetoprops, mapdispatch)(HomePage)

//---------------------------------------------------------------------------------------------
//styling
export const HomePageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${color.Background()};
  display: flex;
  align-items: center;
  flex-direction: column;
`
