import Button from '../Button';
import {
  Container, WrapperTop, WrapperBottom, Li,
} from './style';

export default function Header() {
  return (
    <Container>
      <WrapperTop>
        <ul>
          <Li dNone>Fale com a gente</Li>
          <div>
            <li>0800 000 0000</li>
            <span>|</span>
            <li>0000-0000</li>
          </div>
          <Li>Inscreva-se via WhatsApp</Li>
          <span>|</span>
          <Li>Acompanha sua matrícula</Li>
          <Li dNone>Área do aluno</Li>
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
