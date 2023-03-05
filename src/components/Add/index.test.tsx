import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import { Add } from './index';

/**
 * 1. 할 일을 입력할 수 있는 입력창이 있다. 할 일 입력창은 기본적으로 '할 일을 입력해 주세요'라는 문구를 표시한다.
 * 2. 할 일을 추가할 수 있는 추가 버튼이 있다.
 * 3. 할 일을 입력하고, 추가 버튼을 누르면 할 일을 localStorage에 저장하고 할 일 목록 페이지로 이동한다.
 * 4. 아무 할 일이 없는 경우에는 할 일 추가 버튼을 클릭하여도 빈 할 일이 저장되지 않으며 할 일 목록 페이지로 이동하지 않는다.
 */

describe('<Add />', () => {
  it('1. 할 일을 입력할 수 있는 입력창이 있다. 할 일 입력창은 기본적으로 "할 일을 입력해 주세요"라는 문구를 표시한다.', () => {
    render(<Add />);
    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    expect(input).toBeInTheDocument();
  });
  it('2. 할 일을 추가할 수 있는 추가 버튼이 있다.', () => {
    render(<Add />);
    const button = screen.getByText('추가');
    expect(button).toBeInTheDocument();
  });
});
