import React, { useState, useEffect } from 'react';
import { Button } from 'components/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  align-items: center;
`;

const Label = styled(Link)`
  flex: 1;
  font-size: 16px;
  margin-right: 20px;
  text-decoration: none;
`;
const ToDoList = styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #bdbdbd;
  margin-bottom: 20px;
`;
const ToDoItem = styled.div`
  display: flex;
  border-bottom: 1px solid #bdbdbd;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;
const AddButton = styled(Link)`
  font-size: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  cursor: pointer;
  position: absolute;
  bottom: -30px;
  background-color: #304ffe;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  &:hover {
    background-color: #1e40ff;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const List = () => {
  const [toDoList, setTodoList] = useState<Array<string>>([]);

  useEffect(() => {
    const list = localStorage.getItem('ToDoList');
    if (list) {
      setTodoList(JSON.parse(list));
    }
  }, []);
  const onDelete = (index: number) => {
    let list = [...toDoList];
    list.splice(index, 1);
    setTodoList(list);
    localStorage.setItem('ToDoList', JSON.stringify(list));
  };
  return (
    <Container>
      <ToDoList>
        {toDoList.map((todo, index) => (
          <ToDoItem key={todo}>
            <Label to={`/detail/${index}`}>{todo}</Label>
            <Button
              label="삭제"
              backgroundColor="#ff1744"
              hoverColor="#f01440"
              onClick={() => {
                onDelete(index);
              }}
            />
          </ToDoItem>
        ))}
      </ToDoList>
      <AddButton to="/add">+</AddButton>
    </Container>
  );
};
