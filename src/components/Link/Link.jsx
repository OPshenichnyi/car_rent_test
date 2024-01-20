import styled from "styled-components";
import variables from "../common/Variables";

const LinkStyle = styled.button`
  background: none;
  color: ${variables.bluePrimary};
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 16px;
  text-decoration: underline;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  &:hover {
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
  }
`;

const Link = ({ onClick, text }) => {
  return (
    <>
      <LinkStyle onClick={onClick}>{text}</LinkStyle>
    </>
  );
};

export default Link;
