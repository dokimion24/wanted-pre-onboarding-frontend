import React from "react";
import { Button } from "../../styles/common";
import * as S from "./style";

function TodoHeader() {
  return (
    <S.Container>
      <S.Header>Todolist</S.Header>
      <S.InputArea>
        <S.Input type="text" data-testid="new-todo-input" />
        <Button data-testid="new-todo-add-button">추가</Button>
      </S.InputArea>
    </S.Container>
  );
}

export default TodoHeader;
