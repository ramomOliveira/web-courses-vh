import { Container, Navigation, CardsNavigation } from './style';

export default function RangeNavigation() {
  return (
    <Container>
      <Navigation selected>
        <ul>
          <li>Home</li>
          <span className="material-icons-outlined">
            chevron_right
          </span>
          <li>
            Cursos
          </li>
          <span className="material-icons-outlined">
            chevron_right
          </span>
          <li>Graduação</li>
        </ul>
      </Navigation>
      <h1>Graduação</h1>
      <CardsNavigation>
        <div>
          <span className="material-icons-outlined">
            emoji_events
          </span>
          <h2>Destaques</h2>
        </div>
        <div>
          <span className="material-icons-outlined">
            grid_view
          </span>
          <h2>Tudo</h2>
        </div>
        <div>
          <span className="material-icons-outlined">
            calculate
          </span>
          <h2>Exatas</h2>
        </div>
        <div>
          <span className="material-icons-outlined">
            medical_services
          </span>
          <h2>Biomedicas</h2>
        </div>
        <div>
          <span className="material-icons-outlined">
            history_edu
          </span>
          <h2>Humanas</h2>
        </div>

      </CardsNavigation>
    </Container>
  );
}
