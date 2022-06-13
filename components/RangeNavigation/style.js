import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 30px 0 30px;
  background-color: var(--tertiary);

  > h1 {
    font-size: 40px;
    font-weight: 900;
    font-family: 'Montserrat', sans-serif;
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    padding: 48px 60px 0 60px;

    > h1 {
      font-size: 90px;
      font-weight: 900;
      font-family: 'Montserrat', sans-serif;
      margin-top: 25px;
    }
  }
`;

export const Navigation = styled.div`
  > ul {
    display: none;
    align-items: center;
    

    > li {
      display: flex;
      align-items: center;
      font-weight: 400;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }

      &.selected {
        font-weight: 900;
      }
    }

    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

export const CardsNavigation = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 24px;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    
    > h2 {
      display: none;
      font-size: 20px;
      font-weight: 900;
    }

    > span {
      font-size: 30px;
    }

    &:hover {
      background-color: var(--primary);
      color: var(--tertiary);
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      cursor: pointer;
    }

    &.selected {
      background-color: var(--primary);
      color: var(--tertiary);
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }

  @media (min-width: 768px) {
    gap: 50px;
    margin-top: 48px;
    > div {
      padding: 20px 30px;

      > span {
        font-size: 40px;
      }
      > h2 {
        display: flex;
      }
    }
  }
`;
