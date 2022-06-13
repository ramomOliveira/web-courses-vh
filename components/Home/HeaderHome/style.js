import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: 40% 1fr;
  }
  
`;

export const AsideLeft = styled.aside`
  display: flex;
  flex-direction: column;
  line-height: 24px;
  gap: 15px;

  @media (min-width: 768px) {
    gap: 30px;
    margin-right: 50px;
  }


`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AsideRight = styled.aside`
  width: 100%;
  
  background-image: url("/images/cover.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
