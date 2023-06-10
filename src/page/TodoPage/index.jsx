import React from 'react';
import TodoHeader from '../../components/TodoHeader';
import TodoList from '../../components/TodoList';
import useTodos from '../../hooks/useTodos';
import Loading from '../../components/Common/Loading';
import { Wrapper } from '../../styles/common';

function TodoPage() {
  const [todos, setTodos, isLoading] = useTodos();

  return (
    <Wrapper>
      <TodoHeader todos={todos} setTodos={setTodos} />
      {isLoading ? <Loading /> : <TodoList todos={todos} setTodos={setTodos} />}
    </Wrapper>
  );
}

export default TodoPage;
