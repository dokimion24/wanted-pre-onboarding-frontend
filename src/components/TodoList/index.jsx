import React from "react";
import * as S from "./style";

import TodoItem from "../TodoItem";

function TodoList({ todos, setIsChanged }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setIsChanged={setIsChanged} />
      ))}
    </ul>
  );
}

export default TodoList;
