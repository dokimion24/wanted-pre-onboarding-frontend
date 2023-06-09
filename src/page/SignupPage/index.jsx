import React from "react";
import * as S from "./style";
import SignForm from "../../components/SignForm";

function SignupPage() {
  return (
    <S.Wrapper>
      <SignForm signin={false} />
    </S.Wrapper>
  );
}

export default SignupPage;
