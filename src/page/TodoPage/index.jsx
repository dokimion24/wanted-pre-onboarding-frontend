import React from 'react';
import TodoHeader from '../../components/TodoHeader';
import * as S from './style';
import TodoList from '../../components/TodoList';
import useTodos from '../../hooks/useTodos';
import Loading from '../../components/Common/Loading';

function TodoPage() {
  const [todos, setTodos, isLoading] = useTodos();

  return (
    <S.Wrapper>
      <TodoHeader todos={todos} setTodos={setTodos} />
      {isLoading ? <Loading /> : <TodoList todos={todos} setTodos={setTodos} />}
    </S.Wrapper>
  );
}

export default TodoPage;
