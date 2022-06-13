import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--black);
  

  > main {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 0 30px;
  }

  @media (min-width: 768px) {
    padding: 0;
    > main {
      grid-template-columns: repeat(3, 1fr);
      padding: 0 60px;
    }
  }
`;

export const CSpan = styled.span`
  display: flex;
  justify-content: center;
  background-color: var(--white);
  padding: 10px;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
`;
