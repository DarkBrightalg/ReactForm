import styled from "styled-components"
import * as color from "../style/Colors"
const CButton = ({ children, coloration, margin, onClick }) => {
  return (
    <CustomButton onClick={onClick} margin={margin} coloration={coloration}>
      {children}
    </CustomButton>
  )
}

export default CButton

//styling

export const CustomButton = styled.button`
  margin-left: ${(props) => (props.margin ? props.margin : "0")};
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: ${(props) =>
    props.coloration ? color.Secondary() : "black"};
  color: white;
  text-transform: uppercase;
  font-weight: 200;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: ${(props) => (props.coloration ? color.Secondary() : "black")};
    box-shadow: inset 0 0 0 0.2rem
      ${(props) => (props.coloration ? color.Secondary() : "black")};
  }
`
