import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  
`;

export const AsideLeft = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-right: 50px;
  line-height: 24px;

`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AsideRight = styled.aside`
  width: 100%;
  
  background-image: url("/images/cover.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
