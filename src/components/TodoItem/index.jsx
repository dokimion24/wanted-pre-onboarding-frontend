import React, { useState } from "react";
import { Button } from "../../styles/common";
import { deleteTodo, updateTodo } from "../../apis/todo";
import * as S from "./style";

function TodoItem({ todo, todos, setTodos }) {
  const [isClickedUpdateBtn, setIsClickedUpdateBtn] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.todo);
  const [isChecked, setIsChecked] = useState(todo.isCompleted);

  const handleChangeCompleted = async (todo, isCompleted, id) => {
    await updateTodo(todo, !isCompleted, id);
    setIsChecked((prev) => !prev);
  };

  const handleClickDelete = async (id) => {
    console.log(id);
    await deleteTodo(id);
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleClickUpdate = async (todo, isCompleted, id) => {
    const res = await updateTodo(todo, isCompleted, id);
    setTodos(todos.map((item) => (item.id === id ? { ...res } : item)));
    setIsClickedUpdateBtn((prev) => !prev);
  };

  const handleClickCancel = () => {
    setNewTodo(todo.todo);
    setIsClickedUpdateBtn((prev) => !prev);
  };

  return (
    <S.Todo>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() =>
            handleChangeCompleted(todo.todo, todo.isCompleted, todo.id)
          }
        />
        {isClickedUpdateBtn ? (
          <>
            <S.Input
              data-testid="modify-input"
              onChange={handleChange}
              value={newTodo}
            />
          </>
        ) : (
          <span>{todo.todo}</span>
        )}
      </label>
      {isClickedUpdateBtn ? (
        <S.ButtonWrapper>
          <Button
            onClick={() =>
              handleClickUpdate(newTodo, todo.isCompleted, todo.id)
            }
            data-testid="submit-button">
            제출
          </Button>
          <Button onClick={handleClickCancel} data-testid="cancel-button">
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
