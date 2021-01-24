import styled from "styled-components"
import CButton from "../C/CButton"
import { connect } from "react-redux"
import CartDownItem from "../C/CartDownItem"
import { createStructuredSelector } from "reselect"
import { selCartItems } from "../Redux/Cart"
import { withRouter } from "react-router-dom"

const CartDownSmall = ({
  display,
  CartItems,
  history,
  CartStatus,
  setCartDownStatus,
}) => {
  return (
    <CartDownSmallContainer display={display}>
      {CartItems.length ? (
        <CartDropDownListItems>
          {CartItems.map((item) => (
            <CartDownItem key={item.id} item={item} />
          ))}
        </CartDropDownListItems>
      ) : (
        <EmptyMessage>Your Cart is empty</EmptyMessage>
      )}

      <CButton
        className="buttonCheckout"
        onClick={() => {
          history.push("/checkout")
          setCartDownStatus(!CartStatus)
        }}
      >
        Go to checkout
      </CButton>
    </CartDownSmallContainer>
  )
}
const mapstate = createStructuredSelector({ CartItems: selCartItems })

export default withRouter(connect(mapstate)(CartDownSmall))
//----------------------------------------------------------------------------------------------------
//styling
export const EmptyMessage = styled.span`
  color: #ccc;
  height: 100%;
  font-size: 2rem;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const CartDropDownListItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 80%;
  overflow: auto;
`
export const CartDownSmallContainer = styled.div`
  display: ${(props) => (props.display === "false" ? "none" : "flex")};
  width: 30rem;
  height: 40rem;
  background-color: white;
  border: 2px solid black;
  top: 100%;
  left: 78%;
  position: absolute;
  padding: 3rem;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  flex-direction: column;
  justify-content: space-between;

  .buttonCheckout {
    justify-self: flex-end;
  }

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
