import styled from "styled-components";
import variables from "../common/Variables";

const ButtonStyle = styled.button`
  display: flex;
  max-width: 274px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${variables.bluePrimary};
  border: none;

  color: ${variables.whitePrimary};
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  &:hover {
    background: ${variables.blueSecondary};
  }
  &:focus {
    outline: none;
    background: ${variables.blueSecondary};
  }
`;

const Button = ({ text, paddingVertical, paddingHorizontal, onClick }) => {
  const inlineStyle = {
    paddingTop: paddingVertical,
    paddingBottom: paddingVertical,
    paddingLeft: paddingHorizontal,
    paddingRight: paddingHorizontal,
  };
  return (
    <>
      <ButtonStyle style={inlineStyle} onClick={onClick}>
        {text}
      </ButtonStyle>
    </>
  );
};

export default Button;
