import styled, { keyframes } from '../../../assets/styled-components';
import { LabelFocus } from './types';
import { convertHex } from '../../../utils';

export const SwitchContainer = styled.div`
  border-color: ${({ theme }): string => theme.colors.contrast[1].bg};
  border-style: solid;
  border-width: 1px 0 1px 0;
  display: grid;
  grid-template-columns: auto 44px;
  margin-bottom: 10px;
  padding-bottom: 8px;
  padding-top: 8px;
`;

export const Legend = styled.div`
  color: ${({ theme }): string => theme.colors.contrast[3].text};
  font-size: ${({ theme }): number => theme.font.size.small}px;
  line-height: 32px;
`;

export const Container = styled.div`
  padding-top: 4px;
  width: 44px;
`;

export const Checkbox = styled.input`
  margin-left: -9999px;
  position: absolute;
`;

export const Label = styled.label<LabelFocus>`
  border-radius: 24px;
  cursor: pointer;
  display: block;
  height: 24px;
  outline: none;
  position: relative;
  user-select: none;
  width: 44px;
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
  }
  &:before {
    background-color: ${({ checked, theme, focus }): string => {
      const focusColor = !focus
        ? theme.colors.contrast[4].bg
        : theme.colors.primary.bg;
      return checked ? focusColor : theme.colors.contrast[1].bg;
    }};
    border-radius: 24px;
    bottom: 1px;
    left: 1px;
    right: 1px;
    top: 1px;
    transition-duration: 0.3s;
    transition-property: background, box-shadow;
    transition-timing-function: ease-out;
  }
  &:after {
    background-color: ${({ theme, focus, checked }): string =>
      !checked && focus
        ? theme.colors.primary.bg
        : theme.colors.contrast[0].bg};
    border-radius: 40px;
    bottom: 4px;
    box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.02);
    left: 4px;
    margin-left: ${({ checked }): string => (checked ? '20px' : '0')};
    top: 4px;
    transition: all 0.3s ease-out;
    width: 16px;
  }
`;
