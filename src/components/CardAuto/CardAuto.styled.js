import styled from "styled-components";
import variables from "../common/Variables";

export const Container = styled.div`
  margin: auto;
  width: 274px;
`;

export const WrapImg = styled.div`
  position: relative;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
  overflow: hidden;
  border: 1px solid #ccc;
  margin-bottom: 14px;
`;

export const HeartSvg = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  fill: ${variables.whitePrimary};
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
