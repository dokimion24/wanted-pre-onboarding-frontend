import styled from "styled-components";

export const Button = styled.button`
  font-weight: bold;
  color: #fff;
  background-color: #3399ff;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    background-color: #237fdf;
  }

  &:disabled {
    background: #ccc;
    cursor: no-drop;
  }
`;
