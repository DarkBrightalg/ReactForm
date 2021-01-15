import styled from "styled-components"
import ShopSectionItem from "../C/ShopSectionItem"
import { SectionItems } from "../Data/Menu"
import sections from "../Data/ShopSectionData"
const ShopSection = () => {
  return (
    <ShopSectionContainer>
      {sections ? (
        sections.map((el) => (
          <ShopSectionItem
            key={el.id}
            texte={el.title}
            color={el.color}
            imageUrl={el.imageUrl}
            big={el.big}
          />
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
