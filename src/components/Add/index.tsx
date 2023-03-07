import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'components/Button';

const Container = styled.div``;
const Input = styled.input``;
export const Add = () => {
  const [toDo, setToDo] = useState('');
  const addTodo = (): void => {
    localStorage.setItem('ToDoList', JSON.stringify([toDo]));
  };

  return (
    <Container>
      <Input placeholder="할 일을 입력해 주세요" onChange={(e) => setToDo(e.target.value)} />
      <Button label="추가" onClick={addTodo} />
    </Container>
  );
};
