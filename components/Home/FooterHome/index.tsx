import {
  Container, AsideImg, Wrapper, Header, WrapperCourses,
} from './style';

interface CoursesProps {
  id: number;
  name: string;
}

const courses: Array<CoursesProps> = [
  {
    id: 1,
    name: 'Administração',
  },
  {
    id: 2,
    name: 'Ciências da Computação',
  },
  {
    id: 3,
    name: 'Ciências Contábeis',
  },
  {
    id: 4,
    name: 'Ciências Económicas',
  },
  {
    id: 5,
    name: 'Direito',
  },
  {
    id: 6,
    name: 'Engenharia Civil',
  },
  {
    id: 7,
    name: 'Engenharia de Produção',
  },
  {
    id: 8,
    name: 'Pedagogia',
  },
  {
    id: 9,
    name: 'Analise e Desenvolvimento de Sistemas',
  },
  {
    id: 10,
    name: 'Gestão Comercial',
  },
  {
    id: 11,
    name: 'Gestão de Recursos Humanos',
  },
  {
    id: 12,
    name: 'Gestão Financeira',
  },
  {
    id: 13,
    name: 'Logística',
  },
  {
    id: 14,
    name: 'Redes de Computadores',
  },
];

export default function FooterHome() {
  return (
    <Container>
      <AsideImg />

      <Wrapper>
        <Header>
          <h1>Cursos Graduação</h1>
        </Header>
        <WrapperCourses>
          {courses.map((item) => (

            <p key={item.id}>
              <div />
              {item.name}
            </p>

          ))}
        </WrapperCourses>
      </Wrapper>
    </Container>
  );
}
