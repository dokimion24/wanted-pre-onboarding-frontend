import React, { useState } from "react";
import { Button } from "../../styles/common";
import { deleteTodo, updateTodo } from "../../apis/todo";
import * as S from "./style";

function TodoItem({ todo, setIsChanged }) {
  const [isClickedUpdateBtn, setIsClickedUpdateBtn] = useState(false);

  const handleChangeCompleted = async (todo) => {
    await updateTodo(todo);
    setIsChanged((prev) => !prev);
  };

  const handleClickDelete = async (id) => {
    console.log(id);
    await deleteTodo(id);
    setIsChanged((prev) => !prev);
  };

  const handleChange = () => {};

  return (
    <S.Todo>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => handleChangeCompleted(todo)}
        />
        {isClickedUpdateBtn ? (
          <>
            <S.Input
              data-testid="modify-input"
              onChange={handleChange}
              value={todo.todo}
            />
          </>
        ) : (
          <span>{todo.todo}</span>
        )}
      </label>
      {isClickedUpdateBtn ? (
        <S.ButtonWrapper>
          <Button data-testid="submit-button">제출</Button>
          <Button
            onClick={() => setIsClickedUpdateBtn((prev) => !prev)}
            data-testid="cancel-button">
            취소
          </Button>
        </S.ButtonWrapper>
      ) : (
        <S.ButtonWrapper>
          <Button
            onClick={() => setIsClickedUpdateBtn((prev) => !prev)}
            data-testid="modify-button">
            수정
          </Button>
          <Button
            onClick={() => handleClickDelete(todo.id)}
            data-testid="delete-button">
            삭제
          </Button>
        </S.ButtonWrapper>
      )}
    </S.Todo>
  );
}

export default TodoItem;
