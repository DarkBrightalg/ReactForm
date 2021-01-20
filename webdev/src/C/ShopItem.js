import styled from "styled-components"
import * as color from "../style/Colors"

const ShopItem = ({ imageUrl, name, price }) => {
  return (
    <ShopItemContainer image={imageUrl}>
      <div className="AddToCartButtonContainer">
        <AddToCartButtonBackground></AddToCartButtonBackground>
      </div>
      <div className="ImageBackgroundContainer" />
      <BlocTexte>
        <Texte>{name}</Texte>
        <Texte>${price}</Texte>
      </BlocTexte>
    </ShopItemContainer>
  )
}

export default ShopItem
//styling

export const AddToCartButtonBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.7;
`
export const Texte = styled.span`
  color: ${color.Primary};
  font-weight: 100;
`
export const BlocTexte = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ShopItemContainer = styled.div`
  margin: 2rem;
  flex: 1 0 21%;
  height: 40rem;
  display: flex;
  position: relative;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;

  .ImageBackgroundContainer {
    flex: 0.9;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 1s ease;
  }
  .AddToCartButtonContainer {
    position: absolute;
    z-index: 3;
    width: 70%;
    height: 15%;
    border: 1px solid white;
    top: 60%;
    left: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.1s ease-in;
  }
  &:hover {
    .AddToCartButtonContainer {
      border: 3px solid white;
    }
    .ImageBackgroundContainer {
      transform: scale(1.2);
    }
  }
`
