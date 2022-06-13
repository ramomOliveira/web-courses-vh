import { ReactNode } from 'react';
import { Container } from './style';

interface ButtonProps {
  children: ReactNode;
  download?: boolean
  link?: boolean
  onClick?: () => void
}

export default function Button({
  children, download, link, onClick,
}: ButtonProps) {
  return (
    <Container onClick={onClick} link={link} download={download} type="button">
      {children}
    </Container>
  );
}
