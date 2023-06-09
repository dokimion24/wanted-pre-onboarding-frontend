import React, { useEffect, useState } from "react";
import TodoHeader from "../../components/TodoHeader";
import * as S from "./style";
import TodoList from "../../components/TodoList";
import { getTodos } from "../../apis/todo";

function TodoPage() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  // const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await getTodos();
      setTodos(res);
    };

    fetchTodos();
  }, []);

  return (
    <S.Wrapper>
      <TodoHeader todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </S.Wrapper>
  );
}

export default TodoPage;
