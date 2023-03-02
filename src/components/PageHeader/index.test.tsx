import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import App from 'App';
import { PageHeader } from './index';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

// 주어진 URL에 해당하는 페이지 제목을 표시한다. ('/': 할 일 목록, /add: 할 일 추가, '/detail/:id': 할 일 상세, 기타 URL: 에러)
describe('<PageHeader />', () => {
  it('renders component correctly', () => {
    const route = '/';
    render(
      <MemoryRouter initialEntries={[route]}>
        <PageHeader />
      </MemoryRouter>,
    );
    const label = screen.getByText('할 일 목록');
    expect(label).toBeInTheDocument();
    const goBack = screen.queryByText('돌아가기');
    expect(goBack).not.toBeInTheDocument();
  });
  it('renders component correctly with /add URL', () => {
    const route = '/add';
    render(
      <MemoryRouter initialEntries={[route]}>
        <PageHeader />
      </MemoryRouter>,
    );
    const label = screen.getByText('할 일 추가');
    expect(label).toBeInTheDocument();
    const goBack = screen.queryByText('돌아가기');
    expect(goBack).toBeInTheDocument();
    expect(goBack?.getAttribute('href')).toBe('/');
  });
  it('renders component correctly with /detail:id URL', () => {
    const route = '/detail/1';
    render(
      <MemoryRouter initialEntries={[route]}>
        <PageHeader />
      </MemoryRouter>,
    );
    const goBack = screen.queryByText('돌아가기');
    expect(goBack).toBeInTheDocument();
    expect(goBack?.getAttribute('href')).toBe('/');
    const label = screen.getByText('할 일 상세');
    expect(label).toBeInTheDocument();
  });

  it('renders component correctly with NotFound', () => {
    const route = '/not_found';
    render(
      <MemoryRouter initialEntries={[route]}>
        <PageHeader />
      </MemoryRouter>,
    );
    const goBack = screen.queryByText('돌아가기');
    expect(goBack).toBeInTheDocument();
    expect(goBack?.getAttribute('href')).toBe('/');
    const label = screen.getByText('에러');
    expect(label).toBeInTheDocument();
  });
  it('renderes component correctly with goBack link', () => {
    const route = '/not_found';
    render(
      <MemoryRouter initialEntries={[route]}>
        <PageHeader />
      </MemoryRouter>,
    );
    const goBack = screen.getByText('돌아가기');
    fireEvent.click(goBack);

    const label = screen.getByText('할 일 목록');
    expect(label).toBeInTheDocument();
    expect(goBack).not.toBeInTheDocument();
  });
});
