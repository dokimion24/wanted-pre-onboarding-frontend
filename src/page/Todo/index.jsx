import React, { useEffect, useState } from "react";
import TodoHeader from "../../components/TodoHeader";
import * as S from "./style";
import TodoList from "../../components/TodoList";
import { getTodos } from "../../apis/todo";

function TodoPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await getTodos();
      setTodos(res);
    };

    fetchTodos();
  }, []);

  return (
    <S.Wrapper>
      <TodoHeader />
      <TodoList todos={todos} />
    </S.Wrapper>
  );
}

export default TodoPage;
