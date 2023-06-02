import React from "react";
import * as S from "./style";
import { AiOutlineLogin } from "react-icons/ai";
import { Button } from "../../styles/common";

function SigninForm() {
  return (
    <S.Form>
      <S.IconWrapper>
        <AiOutlineLogin />
        <S.SigninText>Sign in</S.SigninText>
      </S.IconWrapper>
      <S.InputArea>
        <S.Label htmlFor="email">이메일</S.Label>
        <S.Input id="email" data-testid="email-input" />
      </S.InputArea>
      <S.InputArea>
        <S.Label htmlFor="password">비밀번호</S.Label>
        <S.Input id="password" data-testid="password-input" />
      </S.InputArea>
      <S.ButtonWrapper>
        <Button data-testid="signin-button">로그인</Button>
      </S.ButtonWrapper>
    </S.Form>
  );
}

export default SigninForm;
