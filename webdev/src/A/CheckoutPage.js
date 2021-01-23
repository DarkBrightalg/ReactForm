import styled from "styled-components"
import * as color from "../style/Colors"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selCartItems, selCartTotal } from "../Redux/Cart"
import CheckoutCartItem from "../C/CheckoutCartItem"

const CheckoutPage = ({ CartItems, CartTotal }) => {
  return (
    <CheckoutPageContainer>
      <div className="Titles">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      <div className="itemList">
        {CartItems.map((item) => (
          <CheckoutCartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="Total">
        <span>total: ${CartTotal}</span>
      </div>
    </CheckoutPageContainer>
  )
}

const mapstate = createStructuredSelector({
  CartItems: selCartItems,
  CartTotal: selCartTotal,
})

export default connect(mapstate)(CheckoutPage)

//styling
export const CheckoutPageContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  .itemList {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 10rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .Titles {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid #ccc;

    span {
      flex: 1;
      margin-right: 0.1rem;
      font-size: 2rem;
      color: ${color.Primary()};
      &:first-child {
        margin-right: 2rem;
      }
      &:not(:first-child) {
        text-align: center;
      }
      &:last-child {
        flex: 0.4;
      }
    }
  }
  .Total {
    display: flex;
    padding-top: 2rem;
    border-top: 1px solid #ccc;
    justify-content: flex-end;
    span {
      font-size: 3rem;
      color: ${color.Primary()};
      text-transform: uppercase;
    }
  }
`
