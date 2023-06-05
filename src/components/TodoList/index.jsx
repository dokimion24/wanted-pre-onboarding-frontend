import React from "react";
import * as S from "./style";
import { Button } from "../../styles/common";

function TodoList() {
  return (
    <>
      <S.TodoWrapper>
        <label>
          <input type="checkbox" />
          <span>TODO 1</span>
        </label>
        <S.ButtonWrapper>
          <Button data-testid="modify-button">수정</Button>
          <Button data-testid="delete-button">삭제</Button>
        </S.ButtonWrapper>
      </S.TodoWrapper>
    </>
  );
}

export default TodoList;