import styled from "styled-components"
import ShopSectionItem from "../C/ShopSectionItem"
import sections from "../Data/ShopSectionData"

const ShopSection = () => {
  return (
    <ShopSectionContainer>
      {sections ? (
        sections.map(({ id, ...otherSectionPops }) => (
          <ShopSectionItem key={id} {...otherSectionPops} />
        ))
      ) : (
        <img
          src="https://i.pinimg.com/originals/f9/41/ae/f941ae9d16fd7d2957eea6e5b1100d1e.gif"
          alt="loader"
        />
      )}
    </ShopSectionContainer>
  )
}

export default ShopSection
//styling

export const ShopSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 1rem;
`
