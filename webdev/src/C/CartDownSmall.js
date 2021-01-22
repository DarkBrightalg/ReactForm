import styled from "styled-components"
import CButton from "./CButton"
const CartDownSmall = ({ display }) => {
  return (
    <CartDownSmallContainer display={display}>
      CartDown
      <CButton className="buttonCheckout">Go to checkout</CButton>
    </CartDownSmallContainer>
  )
}

export default CartDownSmall
//----------------------------------------------------------------------------------------------------
//styling

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
