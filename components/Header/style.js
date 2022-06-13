import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 6px #2121214d;
  
`;

export const WrapperTop = styled.div`
  background-color: var(--primary);
  padding: 10px 60px;
  color: var(--white);
  font-weight: 600;
  font-size: 14px;

  > ul {
    display: flex;
    justify-content: space-around;

    > div {
      display: flex;
      gap: 10px;
    }

    li {
      &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
    }
  }

  
`;

export const WrapperBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 60px;

  > div {
    display: flex;
    gap: 70px;
    align-items: center;

    > img {
      width: 200px;
    }

    > ul {
      display: flex;
      gap: 50px;
      font-size: 20px;
      font-weight: 600;
      color: var(--primary);

      li {
        &:hover {
        filter: brightness(0.7);
        cursor: pointer;
      }
      }
     
    }
  }
  
`;
