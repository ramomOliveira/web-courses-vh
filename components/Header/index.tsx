import Button from '../Button';
import { Container, WrapperTop, WrapperBottom } from './style';

export default function Header() {
  return (
    <Container>
      <WrapperTop>
        <ul>
          <li>Fale com a gente</li>
          <div>
            <li>0800 000 0000</li>
            <span>|</span>
            <li>0000-0000</li>
          </div>
          <li>Inscreva-se via WhatsApp</li>
          <li>Acompanha sua matrícula</li>
          <li>Área do aluno</li>
        </ul>
      </WrapperTop>
      <WrapperBottom>
        <div>
          <img src="/images/logo.png" alt="Sua Logo" />
          <ul>
            <li>A Empresa</li>
            <li>Cursos</li>
            <li>Estude na Empresa</li>
            <li>Para Começar</li>
          </ul>
        </div>
        <Button>Inscrever-se</Button>
      </WrapperBottom>
    </Container>
  );
}
