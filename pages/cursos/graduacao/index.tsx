import Layout from '../../../components/Layout';
import RangeCarousel from '../../../components/RangeCarousel';
import { Container } from '../../../styles/course/graduate/style';

const listCarouselGraduate = [
  {
    id: 1,
    title: 'Cursos mais procurados',
  },
  {
    id: 2,
    title: 'Para os mais tradicionais',
  },
  {
    id: 3,
    title: 'Cursos Novinhos',
  },

];

export default function UniversityGraduate() {
  return (
    <Layout>
      <Container>
        {listCarouselGraduate.map((item) => (
          <RangeCarousel key={item.id} titleRangeCarousel={item.title} />
        ))}

      </Container>
    </Layout>
  );
}
