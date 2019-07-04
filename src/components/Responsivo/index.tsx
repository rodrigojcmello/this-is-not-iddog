import React, { memo } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, Props } from './tipos';

function Responsivo(props: Props): JSX.Element {
  const { alvo, children, larguraJanela } = props;
  if (
    (larguraJanela <= Number(process.env.LARGURA_MOBILE) &&
      alvo === 'mobile') ||
    (larguraJanela > Number(process.env.LARGURA_MOBILE) && alvo === 'desktop')
  ) {
    return <>{children}</>;
  }
  return <></>;
}

export default connect(mapStateToProps)(memo(Responsivo));
