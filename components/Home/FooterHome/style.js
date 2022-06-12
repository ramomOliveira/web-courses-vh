import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--primary);
  border-radius: 8px;
  height: 350px;
  padding: 30px;
  margin-top: 100px;

  display: grid;
  grid-template-columns: 30% 1fr;
  align-items: center;
`;

export const AsideImg = styled.div`
  background-image: url("/images/person-studying.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 350px;
  height: 100%;
`;

export const Wrapper = styled.div`
  margin-left: 60px;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 30px;

  > h1 {
    font-size: 30px;
    color: var(--white);
  }
`;

export const WrapperCourses = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px; 

  > p {
    font-size: 18px;
    color: var(--white);
    display: flex;
    align-items: center;
    gap: 8px;

    > div {
      width: 15px;
      height: 4px;
      background-color: var(--black);
      border-radius: 8px;
    }
  }
  

`;
