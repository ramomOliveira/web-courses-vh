import {
  Navigation,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardCarousel from './CardCarousel';
import { Container } from './style';

import 'swiper/css/navigation';

interface CoursesProps {
  id: number;
  name: string;
  image?: string;
}

const courses: Array<CoursesProps> = [
  {
    id: 1,
    name: 'Administração',
    image: '/images/imgCard/card1.png',
  },
  {
    id: 2,
    name: 'Ciências da Computação',
    image: '/images/imgCard/card2.png',
  },
  {
    id: 3,
    name: 'Ciências Contábeis',
    image: '/images/imgCard/card3.png',
  },
  {
    id: 4,
    name: 'Ciências Económicas',
    image: '/images/imgCard/card4.png',
  },
  {
    id: 5,
    name: 'Direito',
    image: '/images/imgCard/card5.png',
  },
  {
    id: 6,
    name: 'Engenharia Civil',
    image: '/images/imgCard/card6.png',
  },
  {
    id: 7,
    name: 'Engenharia de Produção',
    image: '/images/imgCard/card7.png',
  },
  {
    id: 8,
    name: 'Pedagogia',
    image: '/images/imgCard/card1.png',
  },
  {
    id: 9,
    name: 'Analise e Desenvolvimento de Sistemas',
    image: '/images/imgCard/card2.png',
  },
  {
    id: 10,
    name: 'Gestão Comercial',
    image: '/images/imgCard/card3.png',
  },
  {
    id: 11,
    name: 'Gestão de Recursos Humanos',
    image: '/images/imgCard/card4.png',
  },
  {
    id: 12,
    name: 'Gestão Financeira',
    image: '/images/imgCard/card5.png',
  },
  {
    id: 13,
    name: 'Logística',
    image: '/images/imgCard/card6.png',
  },
  {
    id: 14,
    name: 'Redes de Computadores',
    image: '/images/imgCard/card7.png',
  },
];

export default function RangeCarousel({ titleRangeCarousel }: { titleRangeCarousel: string }) {
  return (
    <Container>
      <h1>
        {titleRangeCarousel}
        <span>{`( ${courses.length} cursos )`}</span>
      </h1>
      <div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {courses.map((item) => (
            <SwiperSlide key={item.id}>
              <CardCarousel courser={item.name} image={item.image} />
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </Container>
  );
}
