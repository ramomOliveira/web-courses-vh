import { Container } from './style';

interface ButtonProps {
  children: string
  disabled?: boolean
}

export default function Button({ children, disabled = false }: ButtonProps) {
  return (
    <Container disable={disabled} type="button">
      {children}
    </Container>
  );
}
