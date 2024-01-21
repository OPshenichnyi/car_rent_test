import styled from "styled-components";
import variables from "../common/Variables";

export const CardModalContainer = styled.div`
  width: 541px;
  height: 752px;
  padding: 40px;
  margin: auto;
  position: relative;
  background-color: ${variables.whitePrimary};
  border-radius: 24px;
  .first-container {
    margin-bottom: 8px;
  }
  .second-container {
    margin-bottom: 24px;
  }
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
  margin-bottom: 14px;
`;
export const ContainerDescription = styled.div`
  margin-bottom: 24px;
  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
  }
`;
export const TitleAccessoires = styled.p`
  margin-bottom: 8px;
`;

export const ContainerAccessoires = styled.div`
  margin-bottom: 24px;
`;

export const ContainerRental = styled.div`
  display: flex;
  column-gap: 8px;
  row-gap: 8px;
`;

export const WrapText = styled.div`
  background-color: #f9f9f9;
  padding: 7px 14px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
`;
