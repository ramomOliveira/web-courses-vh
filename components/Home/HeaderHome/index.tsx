import { useState } from 'react';
import { useRouter } from 'next/router';
import TitleHome from '../TitleHome';
import Button from '../../Button';
import {
  Container, AsideLeft, AsideRight, WrapperButton,
} from './style';
import Modal from '../../Modal';
import CardSelected from './CardSelected';

export default function HeaderHome() {
  const [showSelectGraduate, setShowSelectGraduate] = useState(false);

  const [numberSelected, setNumberSelected] = useState(0);

  const router = useRouter();

  const handleRegister = (event: string) => {
    if (event === 'Graduação') {
      setNumberSelected(1);
      // router.push('/cursos/graduacao');
    } else {
      setNumberSelected(2);
      // router.push('/cursos/pos-graduacao');
    }
  };

  const onToSave = () => {
    if (numberSelected === 1) {
      router.push('/cursos/graduacao');
    } else {
      router.push('/cursos/pos-graduacao');
    }
  };

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
          <Button onClick={() => setShowSelectGraduate(true)}>Quero fazer minha matricula</Button>
          <Button download>Baixar edital</Button>

        </WrapperButton>
      </AsideLeft>
      <AsideRight />
      {showSelectGraduate && (
        <Modal
          title="Escolha a Formação"
          show={showSelectGraduate}
          onClose={() => {
            setShowSelectGraduate(false);
            setNumberSelected(0);
          }}
        >
          <CardSelected
            selectedNumber={numberSelected}
            optionOne={() => handleRegister('Graduação')}
            optionTwo={() => handleRegister('Pós-Graduação')}
            onToSave={onToSave}
          />

        </Modal>
      )}
    </Container>
  );
}
