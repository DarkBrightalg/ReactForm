import styled from "styled-components"
import { withRouter } from "react-router-dom"
const ShopSectionItem = ({
  title,
  color,
  imageUrl,
  big,
  linkUrl,
  history,
  match,
}) => {
  return (
    <ShopSectionItemContainer
      big={big}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <ShopSectionItemRight color={color}>{title}</ShopSectionItemRight>
      <ShopSectionItemLeft imageUrl={imageUrl} />
    </ShopSectionItemContainer>
  )
}

export default withRouter(ShopSectionItem)

//styling

export const ShopSectionItemLeft = styled.span`
  width: 50%;
  height: 100%;
  overflow: hidden;
  background-image: url(${(props) => props.imageUrl});
  background-size: 150%;
  background-position: center;
  transition: background-size 1s ease-in-out;
`
export const ShopSectionItemRight = styled.div`
  width: 50%;
  height: 100%;
  color: white;
  letter-spacing: 1rem;
  font-size: 2rem;
  font-weight: 100;
  text-transform: uppercase;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ShopSectionItemContainer = styled.div`
  min-width: 40rem;
  flex: 1;
  height: ${(props) => (props.big ? "30rem" : "20rem")};
  display: flex;
  flex-direction: row-reverse;
  background-color: white;
  margin: 1rem;

  cursor: pointer;
  &:hover {
    span {
      background-size: 170%;
      background-position: center;
    }
  }
`
