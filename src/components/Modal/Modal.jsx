import ReactDOM from 'react-dom';
import Flex from '../Flex';
import { Background, CloseModalButton, ScrollDisabler, StyledModal } from './StyledModal';
const portalRoot = document.querySelector('#portal-root');

export default function Modal({ isOpen, close }) {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <Background onClick={close}>
        <StyledModal onClick={(e) => e.stopPropagation()}>
          <Flex height='200px'>
            <p>Modal</p>
          </Flex>
          <CloseModalButton onClick={close} />
        </StyledModal>
      </Background>
      <ScrollDisabler />
    </>,
    portalRoot,
  );
}
