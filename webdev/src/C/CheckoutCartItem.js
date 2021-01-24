import styled from "styled-components"
import * as color from "../style/Colors"
import { connect } from "react-redux"
import {
  RemoveItemFromCart,
  AddItemToCart,
  MinusItemToCart,
} from "../Redux/Cart"

const CheckoutCartItem = ({ item, dispatch }) => {
  const { imageUrl, name, quantity, price } = item

  return (
    <CartItemContainer>
      <div className={`Global`}>
        <div className="detailsContainer">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="detailsContainer">{name}</div>
        <div className="detailsContainer">
          <span
            className="subbutton"
            onClick={() =>
              item.quantity < 2
                ? dispatch(RemoveItemFromCart(item))
                : dispatch(MinusItemToCart(item))
            }
          >
            &#10094;
          </span>
          &nbsp;&nbsp;{quantity}&nbsp;&nbsp;
          <span
            className="subbutton"
            onClick={() => dispatch(AddItemToCart(item))}
          >
            &#10095;
          </span>
        </div>
        <div className="detailsContainer">${price}</div>
        <div className="detailsContainer">
          <span
            className="subbutton"
            onClick={() => dispatch(RemoveItemFromCart(item))}
          >
            &#10005;
          </span>
        </div>
      </div>
    </CartItemContainer>
  )
}

export default connect()(CheckoutCartItem)

//________________________________________________________________________________________________________________________
//styling

export const CartItemContainer = styled.div`
  .Global {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    width: 100%;
  }
  .ItemAnimation {
    background-color: green;
    animation: puff-in-hor 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }

  .detailsContainer {
    font-size: 2rem;
    display: flex;
    color: ${color.Primary()};
    align-items: center;
    overflow: hidden;
    font-size: 2rem;
    height: 20rem;
    flex: 1;
    margin-right: 0.1rem;
    img {
      width: 20rem;
    }
    &:not(:first-child) {
      justify-content: center;
    }
    &:first-child {
      margin-right: 2rem;
    }
    &:last-child {
      flex: 0.4;
    }
    .subbutton {
      cursor: pointer;
    }
  }
  @-webkit-keyframes puff-in-hor {
    0% {
      -webkit-transform: scaleX(2);
      transform: scaleX(2);
      -webkit-filter: blur(4px);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes puff-in-hor {
    0% {
      -webkit-transform: scaleX(2);
      transform: scaleX(2);
      -webkit-filter: blur(4px);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
`
