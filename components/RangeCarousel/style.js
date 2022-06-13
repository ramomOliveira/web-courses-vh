import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;
  
  > h1 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-weight: 900;
    font-family: 'Montserrat', sans-serif;
    color: var(--white);
    margin-bottom: 25px;

    > span {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 100px;

    > h1 {
      gap: 15px;
      font-size: 50px;
      margin-bottom: 50px;

      > span {
        font-size: 22px;
      }
    }
  }
`;
