import { useState } from 'react';
import Button from '../../../Button';
import { Container, Wrapper, WrapperCard } from './style';

interface IProps {
  optionOne: () => void;
  optionTwo: () => void;
  selectedNumber?: number;
  onToSave?: () => void;

}

export default function CardSelected({
  optionOne, optionTwo, selectedNumber, onToSave,
}: IProps) {
  return (
    <Container>
      <WrapperCard>
        <div className={selectedNumber === 1 ? 'selected' : ''} onClick={optionOne}>
          Graduação
        </div>
        <div className={selectedNumber === 2 ? 'selected' : ''} onClick={optionTwo}>
          Pós-Graduação
        </div>
      </WrapperCard>
      <Wrapper><Button onClick={onToSave}>Salvar</Button></Wrapper>
    </Container>
  );
}
