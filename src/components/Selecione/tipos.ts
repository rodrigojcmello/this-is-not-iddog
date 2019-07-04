import { SyntheticEvent } from 'react';

// Componentes

export interface Props {
  rotulo: string;
  id: string;
  value: string;
  onChange: (evento: SyntheticEvent<HTMLSelectElement, Event>) => void;
  desativado: boolean;
  opcoes: JSX.Element;
}
