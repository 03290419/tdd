import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import { Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  const route = '/';
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );
  const linkElement = screen.getByText('할 일 목록');
  expect(linkElement).toBeInTheDocument();
});
