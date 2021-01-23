import styled from "styled-components"
import * as color from "../style/Colors"
import { connect } from "react-redux"

const CartDownItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item
  return (
    <CartItemContainer>
      <div className="imageContainer">
        <img src={imageUrl} alt={name} />
      </div>

      <div className="DetailsContainer">
        <span className="details">{name}</span>
        <span className="details">
          {quantity} X ${price}
        </span>
      </div>
    </CartItemContainer>
  )
}

export default connect()(CartDownItem)

//________________________________________________________________________________________________________________________
//styling

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 10rem;
  margin-bottom: 1rem;

  .imageContainer {
    width: 8rem;
    height: 10rem;
    margin-right: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: 9rem;
    }
  }
  .DetailsContainer {
    display: flex;
    flex-direction: column;
    .details {
      color: ${color.Primary()};
    }
  }
`
