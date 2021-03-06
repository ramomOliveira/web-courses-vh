import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;

`;

export const WrapperCard = styled.div`
  display: flex;
  justify-content: space-between;
  
  > div {
    border-radius: 8px;
    box-shadow: 0px 3px 6px #2121214d;
    width: 130px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: var(--primary);

    @media (min-width: 768px) {
      width: 200px;
      height: 100px;
    }
   

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
      box-shadow: 0px 3px 6px var(--secondary);
      color: var(--secondary);
    }
    &.selected {
      box-shadow: 0px 3px 6px var(--secondary);
      color: var(--secondary);
    }
  }
  

`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;
