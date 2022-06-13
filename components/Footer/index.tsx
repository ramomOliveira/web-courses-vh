import ColumnsUl from './ColumnsUl';
import { Container, CSpan } from './style';

export default function Footer() {
  return (
    <>
      <Container>

        <main>
          <ColumnsUl showLogo />
          <ColumnsUl />
          <ColumnsUl />
        </main>
      </Container>
      <CSpan> 2022 © Press Start</CSpan>
    </>
  );
}
