import styled from "styled-components"
import * as color from "../style/Colors"
import { withRouter } from "react-router-dom"
const HeaderMenuItem = ({ children, onClick }) => {
  return (
    <MenuItemContainer>
      <MenuItem onClick={onClick}>{children}</MenuItem>
    </MenuItemContainer>
  )
}

export default withRouter(HeaderMenuItem)
//styling
export const MenuItem = styled.span`
  color: ${color.Primary(1)};
  font-weight: 100;
  transition: all 0.1s ease-in;
  &:hover {
    transform: scale(1.1);
    color: ${color.Secondary()};
  }
`
export const MenuItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 2rem;
  }
`
