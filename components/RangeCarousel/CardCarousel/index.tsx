import { Container } from './style';

interface CardCarouselProps {
  courser: string
  image?: string
}

export default function CardCarousel({ courser, image }: CardCarouselProps) {
  return (
    <Container image={image}>
      <div>
        <p>Mais procurados</p>
      </div>
      <h2>{courser}</h2>
    </Container>
  );
}
