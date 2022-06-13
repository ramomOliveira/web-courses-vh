import styled from 'styled-components';

export const WrapperModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: var(--white);
  box-shadow: 0px 3px 6px #00000029;
  color: var(--black);
  border-radius: 8px;
  padding: 24px;
  margin: 0 16px;
  width: 600px;
`;

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-size: 24px;
    margin-right: 27px;
  }
`;
