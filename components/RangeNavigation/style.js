import styled from 'styled-components';

export const Container = styled.div`
  padding: 48px 60px 0 60px;
  background-color: var(--tertiary);

  > h1 {
    font-size: 90px;
    font-weight: 900;
    font-family: 'Montserrat', sans-serif;
    margin-top: 25px;
  }
`;

export const Navigation = styled.div`
  > ul {
    display: flex;
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
  }
`;
export const CardsNavigation = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 48px;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px 30px;
    

    > h2 {
      font-size: 20px;
      font-weight: 900;
    }

    > span {
      font-size: 40px;
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
`;
