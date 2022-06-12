import { Container } from './style';

interface ButtonProps {
  children: string
  disabled?: boolean
  onClick?: () => void
}

export default function Button({ children, disabled = false, onClick }: ButtonProps) {
  return (
    <Container onClick={onClick} disable={disabled} type="button">
      {children}
    </Container>
  );
}
