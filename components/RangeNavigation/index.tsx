import { useState } from 'react';
import Link from 'next/link';
import { Container, Navigation, CardsNavigation } from './style';

interface IProps {
  titlePage: string;
}

export default function RangeNavigation({ titlePage }: IProps) {
  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <Navigation>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <span className="material-icons-outlined">
            chevron_right
          </span>
          <Link href="/">
            <li>
              Cursos
            </li>
          </Link>
          <span className="material-icons-outlined">
            chevron_right
          </span>
          <li className="selected">{titlePage}</li>
        </ul>
      </Navigation>

      <h1>{titlePage}</h1>

      <CardsNavigation>
        <div onClick={() => setSelected(0)} className={selected === 0 ? 'selected' : ''}>
          <span className="material-icons-outlined">
            emoji_events
          </span>
          <h2>Destaques</h2>
        </div>
        <div onClick={() => setSelected(1)} className={selected === 1 ? 'selected' : ''}>
          <span className="material-icons-outlined">
            grid_view
          </span>
          <h2>Tudo</h2>
        </div>
        <div onClick={() => setSelected(2)} className={selected === 2 ? 'selected' : ''}>
          <span className="material-icons-outlined">
            calculate
          </span>
          <h2>Exatas</h2>
        </div>
        <div onClick={() => setSelected(3)} className={selected === 3 ? 'selected' : ''}>
          <span className="material-icons-outlined">
            medical_services
          </span>
          <h2>Biomedicas</h2>
        </div>
        <div onClick={() => setSelected(4)} className={selected === 4 ? 'selected' : ''}>
          <span className="material-icons-outlined">
            history_edu
          </span>
          <h2>Humanas</h2>
        </div>

      </CardsNavigation>
    </Container>
  );
}
