import React, { useState } from "react";
import * as S from "./style";
import { AiOutlineLogin } from "react-icons/ai";
import { Button } from "../../styles/common";
import { useValidateInput } from "../../hooks/useValidteInput";
import { signupUser } from "../../apis/auth";
import { useRedirect } from "../../hooks/useRedirect";

function SigninForm() {
  const validateInput = useValidateInput();
  const redirect = useRedirect();
  
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [isValidInput, setIsValidInput] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    // console.log(e.target);
    const { id, value } = e.target;
    setUserInput({
      ...userInput,
      [id]: value,
    });

    setIsValidInput(validateInput(id, value, isValidInput));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signupUser(userInput);
    console.log(res);
    redirect(res);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.IconWrapper>
        <AiOutlineLogin />
        <S.SigninText>Sign up</S.SigninText>
      </S.IconWrapper>
      <S.InputArea>
        <S.Label htmlFor="email">이메일</S.Label>
        <S.Input
          id="email"
          onChange={handleChange}
          value={userInput.email}
          data-testid="email-input"
        />
        {!isValidInput.email && (
          <S.ErrorMessage>이메일에 @을 포함하세요</S.ErrorMessage>
        )}
      </S.InputArea>
      <S.InputArea>
        <S.Label htmlFor="password">비밀번호</S.Label>
        <S.Input
          id="password"
          type="password"
          onChange={handleChange}
          value={userInput.password}
          data-testid="password-input"
        />
        {!isValidInput.password && (
          <S.ErrorMessage>비밀번호를 8자리 이상 입력하세요</S.ErrorMessage>
        )}
      </S.InputArea>
      <S.ButtonWrapper>
        <Button
          type="submit"
          disabled={!isValidInput.email || !isValidInput.password}
          data-testid="signin-button">
          로그인
        </Button>
      </S.ButtonWrapper>
    </S.Form>
  );
}

export default SigninForm;
