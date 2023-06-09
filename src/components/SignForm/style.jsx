import styled from "styled-components";

export const Form = styled.form`
  padding: 0 32px;
`;

export const IconWrapper = styled.div`
  font-size: 32px;
  display: flex;
  margin-bottom: 32px;
  justify-content: center;
  align-items: center;
`;

export const SigninText = styled.div`
  margin-left: 8px;
`;

export const InputArea = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  width: 100%;
  font-size: 12px;
  margin: 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;

  &:focus {
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  font-size: 12px;
  color: #d9381e;
`;
