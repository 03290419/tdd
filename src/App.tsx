import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import { PageHeader } from 'components';

const Container = styled.div`
  min-height: 100vh;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
function App() {
  return (
    <Container>
      <PageHeader />
    </Container>
  );
}

export default App;
