import React, {
  memo,
  ReactPortal,
  useCallback,
  useEffect,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import { FormattedMessage } from 'react-intl';
import { useSpring, config,  } from 'react-spring';
import IconeDelete from '../../assets/svg/simple-small/delete.svg';
import {
  Background,
  Close,
  Container,
  Header,
  ModalContainer,
  Title
} from './style';
import { Props } from './types';
import { useModalValue } from '../../store/modal/context';

const el = document.createElement('div');

const modalDiv = document.getElementById('modal');

function Modal({ content, id, title }: Props): ReactPortal {
  const [close, setClose] = useState(false);
  const [, dispatch] = useModalValue();

  useEffect((): (() => void) => {
    if (modalDiv) modalDiv.appendChild(el);
    return (): void => {
      if (modalDiv) modalDiv.removeChild(el);
    };
  }, []);

  const closeModal = useCallback((): void => {
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

  const props = useSpring({
    opacity: close ? 0 : 1,
    from: { opacity: close ? 1 : 0 },
    config: close ? config.gentle : config.slow,
    onRest: removeModal
  });

  return createPortal(
    <ModalContainer style={props}>
      <Container>
        <Header>
          <Title>
            <FormattedMessage id={title} />
            <Close onClick={closeModal}>
              <IconeDelete />
            </Close>
          </Title>
        </Header>
        {content}
      </Container>
      <Background />
    </ModalContainer>,
    el
  );
}

export default memo(Modal);
