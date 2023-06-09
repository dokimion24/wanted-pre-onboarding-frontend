import React from "react";
import * as S from "./style";
import SignForm from "../../components/SignForm";

function SigninPage() {
  return (
    <S.Wrapper>
      <SignForm signin={true} />
    </S.Wrapper>
  );
}

export default SigninPage;
