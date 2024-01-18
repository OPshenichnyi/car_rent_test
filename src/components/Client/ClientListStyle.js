import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  th,
  td {
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2); // Fon color
    color: black; // Text color
  }
  th {
    text-align: left;
    color: white;
  }
  thead th {
    background-color: #616771;
  }
  tbody tr :hover {
    background-color: #d1cecd;
  }
  tbody td {
    position: relative;
  }
  tbody tr:hover {
    background-color: #d1cecd;
  }
  tbody td:hover:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -9999px;
    bottom: -9999px;
    background-color: #d1cecd;
    z-index: -1;
  }
`;
