import styled from "styled-components"
import { useState } from "react"
import { withRouter } from "react-router-dom"
import { ReactComponent as Logo } from "../style/Assets/Logo.svg"
import { ReactComponent as ShopIcon } from "../style/Assets/shopIcon-01.svg"
import * as color from "../style/Colors"
import MenuItem from "../C/HeaderMenuItem"
import { auth } from "../Database/Firebase"
import { connect } from "react-redux"
import CartDownSmall from "../B/CartDownSmall"
import { selCartItemsCount } from "../Redux/Cart"
import { selCurrentUser } from "../Redux/User"
import { createStructuredSelector } from "reselect"

const Header = ({ history, currentUser, ItemsCount }) => {
  const [CartDownStatus, setCartDownStatus] = useState(false)

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo onClick={() => history.push("/")} />
      </LogoContainer>
      <MenuContainer>
        <MenuItem onClick={() => history.push("/shop")}>Shop</MenuItem>
        <MenuItem>Contact</MenuItem>
        {currentUser ? (
          <MenuItem onClick={() => auth.signOut()}>Sign out</MenuItem>
        ) : (
          <MenuItem onClick={() => history.push("/sign")}>
            Sign in & Sign up
          </MenuItem>
        )}

        <ShopIconContainer onClick={() => setCartDownStatus(!CartDownStatus)}>
          <ShopNumber>{ItemsCount}</ShopNumber>
          <ShopIcon />
        </ShopIconContainer>
      </MenuContainer>
      <CartDownSmall
        display={CartDownStatus.toString()}
        CartStatus={CartDownStatus}
        setCartDownStatus={setCartDownStatus}
      />
    </HeaderContainer>
  )
}
const mapstate = createStructuredSelector({
  currentUser: selCurrentUser,
  ItemsCount: selCartItemsCount,
})

export default withRouter(connect(mapstate)(Header))

//---------------------------------------------------------------------------------------------------
//styling
export const ShopNumber = styled.span`
  font-size: 1.1rem;
  position: absolute;
  top: 1.3rem;
  left: 1.3rem;
  text-align: center;
  font-weight: 600;
  color: ${color.Primary()};
`
export const ShopIconContainer = styled.div`
  position: relative;
  width: 4rem;
  fill: ${color.Secondary()};
  transition: all 0.1s ease-in;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`

export const MenuContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`
export const LogoContainer = styled.div`
  width: 13%;

  cursor: pointer;
`
export const HeaderContainer = styled.div`
  width: 100%;
  height: 10rem;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  background-color: white;
  border-bottom: 1px solid #ededed;
  position: relative;
`
