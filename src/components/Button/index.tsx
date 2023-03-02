import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  readonly backgroundColor: string;
  readonly hoverColor: string;
}

interface ButtonProps {
  readonly label: string;
  readonly backgroundColor?: string;
  readonly hoverColor?: string;
  readonly onClick?: () => void;
}

const Container = styled.div<ContainerProps>`
  text-align: center;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
const Label = styled.div`
  color: #fff;
  font-size: 16px;
`;

export const Button = ({
  label,
  backgroundColor = '#304ffe',
  hoverColor = '#1e40ff',
  onClick,
}: ButtonProps) => {
  return (
    <Container backgroundColor={backgroundColor} hoverColor={hoverColor} onClick={onClick}>
      <Label>{label}</Label>
    </Container>
  );
};
