import styled from "styled-components"
import * as color from "../style/Colors"
import ShopItem from "../C/ShopItem"
import { withRouter } from "react-router-dom"

const ShopList = ({ routName, title, items, history, match }) => {
  return (
    <ShopListContainer>
      <SectionTitle onClick={() => history.push(`${match.url}/${routName}`)}>
        {title}
      </SectionTitle>
      <ItemsList>
        {items
          ? items
              .filter((item, idx) => idx < 4)
              .map((item) => <ShopItem key={item.id} item={item} />)
          : null}
      </ItemsList>
    </ShopListContainer>
  )
}

export default withRouter(ShopList)
//styling

export const ItemsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* You can set flex-wrap and
      flex-direction individually */
  flex-direction: row;
  flex-wrap: wrap;
  /* Or do it all in one line
     with flex flow */
  flex-flow: row wrap;
  /* tweak where items line
      up on the row
      valid values are: flex-start,
      flex-end, space-between,
      space-around, stretch */
  align-content: flex-end;
`
export const SectionTitle = styled.div`
  font-size: 3rem;
  cursor: pointer;
  font-weight: 400;
  color: ${color.Primary};
  text-transform: uppercase;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
`

export const ShopListContainer = styled.div`
  display: flex;
  flex-direction: column;
`
