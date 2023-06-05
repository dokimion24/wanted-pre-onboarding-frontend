import React from "react";
import * as S from "./style";
import { Button } from "../../styles/common";
import { updateTodo } from "../../apis/todo";

function TodoList({ todos, setIsChanged }) {
  const handleChangeCompleted = async (todo) => {
    await updateTodo(todo);
    setIsChanged((prev) => !prev);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <S.Todo key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleChangeCompleted(todo)}
            />
            <span>{todo.todo}</span>
          </label>
          <S.ButtonWrapper>
            <Button data-testid="modify-button">수정</Button>
            <Button data-testid="delete-button">삭제</Button>
          </S.ButtonWrapper>
        </S.Todo>
      ))}
    </ul>
  );
}

export default TodoList;
