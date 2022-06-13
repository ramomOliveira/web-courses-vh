import styled from 'styled-components';

const getBackground = (props) => {
  if (props.download) {
    return 'var(--gray)';
  }
  if (props.link) {
    return 'transparent';
  }
  return 'var(--secondary)';
};

const getColor = (props) => {
  if (props.link) {
    return 'var(--secondary)';
  }
  return 'var(--white)';
};

export const Container = styled.button`
  background-color: ${(props) => getBackground(props)};
  color: ${(props) => getColor(props)};
  display: flex;
  width: max-content;
  height: min-content;
  padding: 18px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;

  &:hover {
    filter: brightness(1.1);
    
  }
`;
