import styled from 'styled-components';

const getBackground = (props) => {
  if (props.disable) {
    return 'var(--gray)';
  }
  return 'var(--secondary)';
};

export const Container = styled.button`
  background-color: ${(props) => getBackground(props)};
  color: var(--white);
  display: flex;
  width: max-content;
  padding: 18px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;

  &:hover {
    filter: brightness(1.1);
    cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
  }
`;
