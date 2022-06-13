import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--black);
  padding: 10px 0;

  > main {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 0 30px;
  }

  > span {
    display: flex;
    justify-content: center;
    background-color: var(--white);
    padding: 10px;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
  }

  @media (min-width: 768px) {
    padding: 0;
    > main {
      grid-template-columns: repeat(3, 1fr);
      padding: 0 60px;
    }
  }
`;
