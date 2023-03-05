import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Input = styled.input``;
export const Add = () => {
  return (
    <Container>
      <Input placeholder="할 일을 입력해 주세요" />
      <div>추가</div>
    </Container>
  );
};
