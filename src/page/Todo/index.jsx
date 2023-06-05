import React, { useEffect, useState } from "react";
import TodoHeader from "../../components/TodoHeader";
import * as S from "./style";
import TodoList from "../../components/TodoList";
import { getTodos } from "../../apis/todo";

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [isChanged, setIsChanged] = useState(false);

  console.log({ isChanged });

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await getTodos();
      setTodos(res);
    };

    fetchTodos();
  }, [isChanged]);

  return (
    <S.Wrapper>
      <TodoHeader setIsChanged={setIsChanged} />
      <TodoList setIsChanged={setIsChanged} todos={todos} />
    </S.Wrapper>
  );
}

export default TodoPage;
