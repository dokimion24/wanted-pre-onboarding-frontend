import React from "react";
import TodoHeader from "../../components/TodoHeader";
import * as S from "./style";
import TodoList from "../../components/TodoList";

function TodoPage() {
  return (
    <S.Wrapper>
      <TodoHeader />
      <TodoList />
    </S.Wrapper>
  );
}

export default TodoPage;
