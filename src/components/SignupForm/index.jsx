import React from "react";
import * as S from "./style";
import { AiOutlineLogin } from "react-icons/ai";
import { Button } from "../../styles/common";

function SignupForm() {
  return (
    <S.Form>
      <S.IconWrapper>
        <AiOutlineLogin />
        <S.SigninText>Sign up</S.SigninText>
      </S.IconWrapper>
      <S.InputArea>
        <S.Label htmlFor="email">이메일</S.Label>
        <S.Input id="email" data-testid="email-input" />
      </S.InputArea>
      <S.InputArea>
        <S.Label htmlFor="password">비밀번호</S.Label>
        <S.Input id="password" data-testid="password-input" />
      </S.InputArea>
      <S.InputArea>
        <S.Label htmlFor="passwordConfirm">비밀번호 확인</S.Label>
        <S.Input id="passwordConfirm" data-testid="password-input" />
      </S.InputArea>
      <S.ButtonWrapper>
        <Button data-testid="signin-button">회원 가입</Button>
      </S.ButtonWrapper>
    </S.Form>
  );
}

export default SignupForm;
