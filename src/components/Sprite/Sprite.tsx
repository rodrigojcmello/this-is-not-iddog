import * as React from 'react';
import styled from '../../assets/styled-components';
import * as sprite1x from './sprite@1x.png';
import * as sprite2x from './sprite@2x.png';
import * as sprite3x from './sprite@3x.png';

interface Props {
  icone: string;
}

const definirDensidade = () => {
  if (window.devicePixelRatio <= 1.2) {
    return `url('${sprite1x}')`;
  }
  if (window.devicePixelRatio <= 2.4) {
    return `url('${sprite2x}')`;
  }
  return `url('${sprite3x}')`;
};

const CaixaIcone = styled.div<Props>`
  background-size: 48px 176px;
  background-image: ${definirDensidade()};
  background-repeat: no-repeat;
  &.icone_mais {
    background-position: 0 0;
    height: 48px;
    width: 48px;
  }
  &.icone_etiquetas {
    background-position: 0 -48px;
    height: 32px;
    width: 32px;
  }
  &.icone_lista_tarefas {
    background-position: 0 -80px;
    height: 32px;
    width: 32px;
  }
  &.icone_calendario {
    background-position: 0 -112px;
    height: 32px;
    width: 32px;
  }
  &.icone_menu_homem {
    background-position: 0 -144px;
    height: 32px;
    width: 32px;
  }
`;

const Sprite = React.memo((props: Props) => {
  return <CaixaIcone className={`icone_${props.icone}`} icone={props.icone} />;
});

export default Sprite;
