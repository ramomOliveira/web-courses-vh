import { Container } from './style';

interface IProps {
  showLogo?: boolean;
}

export default function ColumnsUl({ showLogo }: IProps) {
  return (
    <Container hasBackground={showLogo}>
      {showLogo && (<img src="/images/logo.png" alt="Sua Logo" />)}
      <h2>A Empresa</h2>
      <ul>
        <li>Sobre a Empresa</li>
        <li>Unidades</li>
        <li>Sustentabilidade</li>
      </ul>
    </Container>
  );
}
