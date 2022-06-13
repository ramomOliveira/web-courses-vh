import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: ${(props) => (props.hasBackground ? 'var(--tertiary)' : 'transparent')};
  padding: 48px 20px;
  max-width: 300px;

  > img {
    width: 100px;
    position: absolute;
  }

  > h2 {
    color: ${(props) => (props.hasBackground ? 'var(--black)' : 'var(--tertiary)')};
    font-size: 25px;
    margin-bottom: 20px;
    margin-top: 80px;
  }

  > ul {
    display: inline-flex;
    flex-direction: column;
    gap: 8px;

    > li {
      color: var(--white);
      font-size: 18px;

      &:hover {
        text-decoration: underline;
        color: var(--primary);
        cursor: pointer;
      }
    }
  }
`;
