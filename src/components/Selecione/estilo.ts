import styled from '../../assets/styled-components';

interface Desativado {
  desativado: boolean;
}

export const Select = styled.select<Desativado>`
  height: 32px;
  border-top: 1px solid ${({ theme }): string => theme.preto4};
  border-right: 1px solid ${({ theme }): string => theme.preto4};
  border-left: 1px solid ${({ theme }): string => theme.preto4};
  border-bottom: 1px solid
    ${({ theme, desativado }): string =>
      desativado ? theme.preto4 : theme.preto2};
  color: ${({ theme, desativado }): string =>
    desativado ? theme.preto3 : theme.preto1};
  outline: none;
  border-radius: 4px;
  padding: 0 12px;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 10px;
  appearance: none;
  line-height: 30px;
  font-size: 14px;
  color: ${({ theme, desativado }): string =>
    desativado ? theme.preto3 : theme.preto1};
  &:focus {
    border-bottom-color: ${({ theme }): string => theme.cor2};
  }
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;

export const Rotulo = styled.label<Desativado>`
  font-size: 12px;
  color: ${({ theme, desativado }): string =>
    desativado ? theme.preto3 : theme.preto1};
  line-height: 14px;
  transition: all 0.3s ease-out;
  position: relative;
  display: block;
`;

export const Icone = styled.div<Desativado>`
  height: 16px;
  width: 16px;
  margin: 7px;
  position: absolute;
  bottom: 11px;
  right: 1px;
  pointer-events: none;
  svg {
    fill: ${({ theme, desativado }): string =>
      desativado ? theme.preto3 : theme.preto1};
    transition: fill 0.3s ease-out;
  }
`;
