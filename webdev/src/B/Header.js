import styled from "styled-components"
import { withRouter } from "react-router-dom"
import { ReactComponent as Logo } from "../style/Assets/Logo.svg"
import { ReactComponent as ShopIcon } from "../style/Assets/shopIcon-01.svg"
import * as color from "../style/Colors"
import MenuItem from "../C/HeaderMenuItem"
const Header = ({ history }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo onClick={() => history.push("/")} />
      </LogoContainer>
      <MenuContainer>
        <MenuItem link="/shop">Shop</MenuItem>
        <MenuItem>Sign up</MenuItem>
        <MenuItem>Sign in</MenuItem>
        <MenuItem>Contact</MenuItem>
        <MenuItem>Sign out</MenuItem>
        <ShopIconContainer>
          <ShopIcon />
        </ShopIconContainer>
      </MenuContainer>
    </HeaderContainer>
  )
}

export default withRouter(Header)

//styling

export const ShopIconContainer = styled.div`
  width: 3rem;
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
`
