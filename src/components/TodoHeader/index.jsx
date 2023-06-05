import React from "react";
import { Button } from "../../styles/common";
import { AiOutlinePlus } from "react-icons/ai";
import * as S from "./style";

function TodoHeader() {
  return (
    <S.Container>
      <S.Header>Todolist</S.Header>
      <S.InputArea>
        <S.Input type="text" />
        <Button>
          <AiOutlinePlus />
        </Button>
      </S.InputArea>
    </S.Container>
  );
}

export default TodoHeader;
