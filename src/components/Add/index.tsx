import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'components/Button';

const Container = styled.div``;
const Input = styled.input``;
export const Add = () => {
  const navigate = useNavigate();
  const [toDo, setToDo] = useState('');
  const addTodo = (): void => {
    const list = JSON.parse(localStorage.getItem('ToDoList') || '[]');
    localStorage.setItem('ToDoList', JSON.stringify([...list, toDo]));
    navigate('/');
  };

  return (
    <Container>
      <Input placeholder="할 일을 입력해 주세요" onChange={(e) => setToDo(e.target.value)} />
      <Button label="추가" onClick={addTodo} />
    </Container>
  );
};
