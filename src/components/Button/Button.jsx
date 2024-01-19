import styled from "styled-components";

const ButtonStyle = styled.button`
  display: flex;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  border: none;

  color: var(--White, #fff);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

const Button = ({ text, width }) => {
  return (
    <>
      <ButtonStyle width={width}>{text}</ButtonStyle>
    </>
  );
};

export default Button;
