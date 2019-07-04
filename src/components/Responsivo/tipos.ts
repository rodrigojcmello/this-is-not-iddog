import { LarguraJanela } from '../../store/navegador/tipos';
import { AppState } from '../../store';

// Componente

type Alvo = 'mobile' | 'tablet' | 'desktop';

export interface Props extends StateToProps {
  children: JSX.Element;
  alvo: Alvo[] | Alvo;
}

// Connect

type StateToProps = LarguraJanela;
export function mapStateToProps(state: AppState): StateToProps {
  return {
    larguraJanela: state.navegador.larguraJanela
  };
}
