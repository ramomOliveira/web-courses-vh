import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--primary);
  border-radius: 8px;
  
  padding: 10px;
  margin-top: 50px;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-items: center;

  @media (min-width: 768px) {
    padding: 30px;
    margin-top: 100px;
    grid-template-columns: 30% 1fr;
    height: 350px;
    
  }
`;

export const AsideImg = styled.div`
  background-image: url("/images/person-studying.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;

  @media (min-width: 768px) {
    width: 350px;
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  
  @media (min-width: 768px) {
    margin-left: 60px;
    
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 30px;

  > h1 {
    font-size: 30px;
    color: var(--white);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    
  }
`;

export const WrapperCourses = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px; 

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  > p {
    font-size: 18px;
    color: var(--white);
    display: flex;
    align-items: center;
    gap: 8px;

    > span {
      width: 15px;
      height: 4px;
      background-color: var(--black);
      border-radius: 8px;
    }
  }
  

`;
