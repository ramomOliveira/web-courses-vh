import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;

  > div {
    background-image: ${(props) => `url(${props.image})`} ;
    width: 100%;
    height: 280px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-color: black;
    border-radius: 8px;
    padding: 5px;
    > p {
      color: var(--white);
      font-size: 14px;
      background-color: rgba(255, 255, 255, 0.3);
      padding: 3px 5px;
      border-radius: 4px;
      display: inline-block;
    }
  }

  > h2 {
    font-size: 15px;
    color: var(--white);
    margin-top: 10px;
  }

  @media (min-width: 768px) {

    > div { 
      width: 400px;
      height: 280px;
      padding: 10px;
    }
    > h2 {
      font-size: 18px;
      color: var(--white);
      margin-top: 20px;
    }

  }
`;
