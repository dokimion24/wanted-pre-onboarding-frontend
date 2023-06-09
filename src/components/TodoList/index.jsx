import React from "react";
import * as S from "./style";

import TodoItem from "../TodoItem";

function TodoList({ todos, setTodos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </ul>
  );
}

export default TodoList;
