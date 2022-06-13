import ColumnsUl from './ColumnsUl';
import { Container } from './style';

export default function Footer() {
  return (
    <Container>

      <main>
        <ColumnsUl showLogo />
        <ColumnsUl />
        <ColumnsUl />
      </main>
      <span> 2022 © Press Start</span>
    </Container>
  );
}
