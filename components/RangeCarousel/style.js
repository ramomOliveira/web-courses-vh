import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 100px;
  > h1 {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 50px;
    font-weight: 900;
    font-family: 'Montserrat', sans-serif;
    color: var(--white);
    margin-bottom: 50px;

    > span {
      font-size: 22px;
    }
  }
`;
