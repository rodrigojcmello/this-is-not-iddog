import styled, { keyframes } from '../assets/styled-components';

// Estilo Mobile

const avancarEntradaMobile = keyframes`
  from {
    opacity: 0;
    transform: translate3d(50%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const avancarSaidaMobile = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-30%, 0, 0);
  }
`;

const voltarEntradaMobile = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-50%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const voltarSaidaMobile = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(30%, 0, 0);
  }
`;

// Estilo Desktop

const entradaDesktop = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Componente

interface TelaProps {
  animacao: boolean;
}

const Tela = styled.div<TelaProps>`
  background-color: white;
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  &.tela-enter {
    z-index: 1;
    animation: ${props =>
        props.animação ? avancarEntradaMobile : voltarEntradaMobile}
      0.3s forwards;
    @media (min-width: 426px) {
      animation: ${entradaDesktop} 0.3s ease-out forwards;
    }
  }
  &.tela-exit {
    @media (max-width: 425px) {
      animation: ${props =>
          props.animação ? avancarSaidaMobile : voltarSaidaMobile}
        0.3s forwards;
    }
  }
`;

export default Tela;
