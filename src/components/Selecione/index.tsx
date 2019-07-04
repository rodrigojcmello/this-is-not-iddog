import React, { memo } from 'react';
import { Props } from './tipos';
import { Select, Rotulo, Icone } from './estilo';
import SVGSeta from '../../assets/svg/simple-small/expand_arrow.svg';

function Selecione(props: Props): JSX.Element {
  const { rotulo, id, opcoes, desativado = true, ...resto } = props;
  return (
    <Rotulo htmlFor={id} desativado={desativado}>
      {rotulo}
      <Select id={id} desativado={desativado} disabled={desativado} {...resto}>
        {opcoes}
      </Select>
      <Icone desativado={desativado}>
        <SVGSeta />
      </Icone>
    </Rotulo>
  );
}

export default memo(Selecione);
