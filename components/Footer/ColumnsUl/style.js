import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: var(--tertiary);
  padding: 0px 20px;
  max-width: 100%;

  @media (min-width: 768px) {
    max-width: 300px;
    background-color: ${(props) => (props.hasBackground ? 'var(--tertiary)' : 'transparent')};
    padding: 48px 20px;
    
    > h2 {
      color: ${(props) => (props.hasBackground ? 'var(--black)' : 'var(--tertiary)')};
      font-size: 25px;
      margin-bottom: 20px;
      margin-top: 80px;
    }
  }

  > img {
    width: 100px;
    position: absolute;
  }

  > h2 {
    color: var(--black);
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 80px;
  }

  > ul {
    display: inline-flex;
    flex-direction: column;
    gap: 8px;

    > li {
      color: var(--white);
      font-size: 14px;

      &:hover {
        text-decoration: underline;
        color: var(--primary);
        cursor: pointer;
      }

      @media (min-width: 768px) {
        font-size: 18px;
      }
    }
  }
  
`;
