import { animated } from 'react-spring';
import styled from '../../assets/styled-components';

export const ModalContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Container = styled(animated.div)`
  background-color: ${({ theme }): string => theme.colors.contrast[0].bg};
  border-radius: 6px;
  box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1);
  display: grid;
  grid-template-rows: 38px auto;
  height: 60vh;
  margin: 2vw;
  max-width: 640px;
  width: 100%;
`;

export const Header = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const Content = styled.div`
  display: grid;
  margin: 2vw;
`;

export const Title = styled.h1`
  color: ${({ theme }): string => theme.colors.contrast[5].text};
  font-size: 14px;
  font-weight: 400;
  line-height: 38px;
  margin: 0;
  text-align: center;
`;

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  font-size: 0;
  outline: none;
  padding: 11px;
  position: absolute;
  right: 0;
  top: 0;
  svg {
    fill: ${({ theme }): string => theme.colors.contrast[5].bg};
    height: 16px;
    width: 16px;
  }
`;

export const Background = styled(animated.div)`
  background-color: hsla(0, 0%, 50%, 0.5);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
`;
