import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const WraperNavBar = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: auto;
  width: 1280px;
  padding: 10px 25px;

  ul {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
  }
`;

export const Logo = styled.span`
  color: black;
  font-size: 22px;
  font-weight: 600;
  text-shadow: 4px 4px 12px rgba(232, 232, 245, 1);
`;

export const BtnNavBar = styled(NavLink)`
  text-decoration: none;

  color: black;
  &:hover {
    color: black;
  }
`;
