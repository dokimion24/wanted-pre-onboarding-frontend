import styled from "styled-components";

export const Todo = styled.li`
  display: flex;
  height: 32px;
  margin-bottom: 8px;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;
`;

export const InputArea = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  margin-right: 8px;
  height: 30px;

  &:focus {
    outline: none;
  }
`;

export const TodoText = styled.div`
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CheckBox = styled.input`
  display: block;
`;

export const Label = styled.label`
  display: flex;
`;
