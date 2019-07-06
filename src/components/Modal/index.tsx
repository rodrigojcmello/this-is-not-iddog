import React, {
  memo,
  ReactPortal,
  useCallback,
  useEffect,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import { config, useSpring } from 'react-spring';
import IconeDelete from '../../assets/svg/simple-small/delete.svg';
import {
  Background,
  Close,
  Container,
  Content,
  Header,
  ModalContainer,
  Title
} from './style';
import { Props } from './types';
import { useModalValue } from '../../store/modal/context';

const el = document.createElement('div');

const modalDiv = document.getElementById('modal');

function Modal({ content, id, title, afterClose }: Props): ReactPortal {
  const [close, setClose] = useState(false);
  const [, dispatch] = useModalValue();

  useEffect((): (() => void) => {
    if (modalDiv) modalDiv.appendChild(el);
    return (): void => {
      if (modalDiv) modalDiv.removeChild(el);
    };
  }, []);

  const closeModal = useCallback((): void => {
    afterClose();
    setClose(true);
  }, []);

  const removeModal = useCallback((): void => {
    if (close) {
      dispatch({
        type: 'REMOVE_MODAL',
        modal: id
      });
    }
  }, [close]);

  const propsBG = useSpring({
    opacity: close ? 0 : 1,
    from: {
      opacity: close ? 1 : 0
    },
    config: close ? config.stiff : config.default,
    onRest: removeModal
  });

  const propsContainer = useSpring({
    opacity: close ? 0 : 1,
    transform: close ? 'scale(0.5)' : 'scale(1)',
    from: {
      opacity: close ? 1 : 0,
      transform: close ? 'scale(1)' : 'scale(0.5)'
    },
    config: close ? config.stiff : config.default
  });

  return createPortal(
    <ModalContainer>
      <Container style={propsContainer}>
        <Header>
          <Title>
            {title}
            <Close onClick={closeModal}>
              <IconeDelete />
            </Close>
          </Title>
        </Header>
        <Content>{content}</Content>
      </Container>
      <Background onClick={closeModal} style={propsBG} />
    </ModalContainer>,
    el
  );
}

export default memo(Modal);
