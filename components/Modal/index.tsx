import { ReactNode } from 'react';
import Button from '../Button';
import { Container, WrapperModal, HeaderModal } from './style';

interface IProps {
  children: ReactNode;
  show: boolean;
  title: string;
  onClose: () => void;

}

export default function Modal({
  children, show, onClose, title,
}: IProps) {
  const handleOutsideClick = () => {
    onClose();
  };
  if (!show) {
    return null;
  }

  return (
    <WrapperModal onClick={handleOutsideClick}>
      <Container onClick={(event: { stopPropagation: () => any; }) => event.stopPropagation()}>
        <HeaderModal>
          <h1>{title}</h1>
          <Button link onClick={() => onClose()}>
            <span className="material-icons-outlined">clear</span>
          </Button>
        </HeaderModal>
        {children}
      </Container>
    </WrapperModal>
  );
}
