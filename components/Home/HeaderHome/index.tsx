import TitleHome from '../TitleHome';
import Button from '../../Button';
import {
  Container, AsideLeft, AsideRight, WrapperButton,
} from './style';

export default function HeaderHome() {
  return (
    <Container>
      <AsideLeft>
        <TitleHome />
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
          Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat.
        </p>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.

        </p>

        <WrapperButton>
          <Button>Quero fazer minha matricula</Button>
          <Button disabled>Baixar edital</Button>

        </WrapperButton>
      </AsideLeft>
      <AsideRight />
    </Container>
  );
}
