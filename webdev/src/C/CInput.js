import styled from "styled-components"
import * as color from "../style/Colors"
const CInput = ({ name, label, type, margin, onChange }) => {
  return (
    <CinputContainer margin={margin}>
      <input
        onChange={onChange}
        className="form-input"
        id="name"
        name={name}
        type={type}
      />
      <label className="form-input-label" htmlFor="name">
        {label}
      </label>
    </CinputContainer>
  )
}

export default CInput
//styling

export const CinputContainer = styled.div`
  position: relative;
  margin-bottom: ${(props) => props.margin};
  position: relative;

  .form-input {
    background: none;
    background-color: white;
    color: ${color.Primary()};
    font-size: 1.6rem;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${color.Primary(0.5)};

    &:focus {
      outline: none;
      border-bottom: 1px solid ${color.Secondary()};
    }

    &:focus ~ .form-input-label {
      top: -2rem;
      font-size: 1.2rem;
      color: ${color.Secondary()};
    }
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: ${color.Primary()};
    font-size: 1.6rem;
    font-weight: 100;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 0rem;
    transition: 300ms ease all;

    &.shrink {
      top: -1.4rem;
      font-size: 12px;
      color: ${color.Primary()};
    }
  }
`
