import styled from "styled-components";
import variables from "../common/Variables";

export const Container = styled.div`
  width: 274px;
  margin: auto;
  position: relative;
`;

export const TitleCard = styled.div`
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${variables.blackPrimary};
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  span {
    color: ${variables.bluePrimary};
  }
`;

export const WrapDescription = styled.div`
  margin-bottom: 28px;
`;
