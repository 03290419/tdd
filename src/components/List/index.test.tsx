import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { MemoryRouter, useLocation } from 'react-router-dom';

import { List } from './index';

/**
 * 1. 할 일 목록을 보여준다. (할 일 목록은 localStorage에 저장되어 있다.)
 * 2. 할 일 목록은 할 일 뿐만 아니라 해당 할 일을 삭제할 수 있는 삭제 버튼을 가지고 있다.
 * 3. 각각의 할 일 목록을 클릭하면 할 일 상세페이지('/detail/:id')로 이동한다.
 * 4. 추가 버튼('+')을 가지고 있다.
 * 5. 추가 버튼을 누르면 할 일 추가 페이지('/add')로 이동한다.
 */

describe('<List />', () => {
  it('1. 할 일 목록을 보여준다.', () => {
    localStorage.setItem('ToDoList', '["Todo 1", "Todo 2", "Todo 3"]');

    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>,
    );

    const toDoItem1 = screen.getByText('Todo 1');
    expect(toDoItem1).toBeInTheDocument();

    const toDoItem2 = screen.getByText('Todo 2');
    expect(toDoItem2).toBeInTheDocument();

    const toDoItem3 = screen.getByText('Todo 3');
    expect(toDoItem3).toBeInTheDocument();
  });
  it('2. 할 일 목록은 할일 뿐만 아니라 해당 할 일을 삭제할 수 있는 삭제 버튼을 가지고 있다.', () => {
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>,
    );
    expect(screen.getAllByText('삭제').length).toBe(3);
  });
  it('2-2. 삭제 버튼을 누르면 해당 todo가 삭제된다.', () => {
    localStorage.setItem('ToDoList', '["Todo 1", "Todo 2", "Todo 3"]');
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>,
    );

    const toDoItem = screen.getByText('Todo 2');
    expect(toDoItem).toBeInTheDocument();
    fireEvent.click(toDoItem.nextElementSibling as HTMLElement);

    expect(toDoItem).not.toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('ToDoList') as string)).not.toContain('Todo 2');
  });
  it('3. 각각의 할 일 목록을 클릭하면 할 일 상세페이지("/detail/:id")로 이동한다.', () => {
    localStorage.setItem('ToDoList', '["Todo 1", "Todo 2", "Todo 3"]');
    const TestComponent = (): JSX.Element => {
      const { pathname } = useLocation();
      return <div>{pathname}</div>;
    };

    render(
      <MemoryRouter>
        <TestComponent />
        <List />
      </MemoryRouter>,
    );

    const url = screen.getByText('/');
    expect(url).toBeInTheDocument();

    const toDoItem1 = screen.getByText('Todo 2');
    expect(toDoItem1.getAttribute('href')).toBe('/detail/1');

    fireEvent.click(toDoItem1);
    expect(url.textContent).toBe('/detail/1');
  });
  it('4. 추가 버튼("+")을 가지고 있다.', () => {
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>,
    );
    const addButton = screen.getByText('+');
    expect(addButton).toBeInTheDocument();
  });
  it('5. 추가 버튼을 누르면 할 일 추가 페이지("/add")로 이동한다.', () => {
    const TestComponent = (): JSX.Element => {
      const { pathname } = useLocation();
      return <div>{pathname}</div>;
    };

    const { container } = render(
      <MemoryRouter>
        <TestComponent />
        <List />
      </MemoryRouter>,
    );

    const url = screen.getByText('/');
    expect(url).toBeInTheDocument();

    const addButton = screen.getByText('+');
    expect(addButton.getAttribute('href')).toBe('/add');

    fireEvent.click(addButton);
    expect(url.textContent).toBe('/add');

    expect(container).toMatchSnapshot();
  });
});
