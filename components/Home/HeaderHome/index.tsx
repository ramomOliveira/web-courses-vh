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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In labore animi expedita repellendus, similique ea voluptatibus perferendis facere. Molestiae quam non magnam consectetur aliquid debitis dolorum laborum voluptatum dolorem omnis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus molestias, fugit facilis voluptatum optio beatae doloremque earum voluptatem possimus. Nobis hic exercitationem illum! Cum ab ut tenetur vitae ex corrupti?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus neque quis eius voluptatem atque nostrum. Incidunt voluptatum sunt cupiditate quo laborum? Sequi alias voluptatibus omnis nobis obcaecati nisi amet provident?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi beatae incidunt expedita sequi vitae quo unde perferendis, quidem, nulla laudantium saepe facere velit maiores sed labore qui cum. Asperiores, eius.
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
