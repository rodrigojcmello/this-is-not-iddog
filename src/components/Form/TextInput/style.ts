import { animated } from 'react-spring';
import styled from '../../../assets/styled-components';

export const TextInputContainer = styled.div`
  height: 66px;
  margin-bottom: 4px;
  position: relative;
`;

export const Input = styled(animated.input)`
  background-color: ${({ theme }): string => theme.colors.contrast[0].bg};
  border-radius: ${({ theme }): number => theme.sizes.borderRadius.small}px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  color: ${({ theme }): string => theme.colors.contrast['4'].text};
  font-size: ${({ theme }): number => theme.font.size.medium}px;
  height: ${({ theme }): number => theme.sizes.input}px;
  line-height: 32px;
  margin-top: 1px;
  outline: none;
  padding: 0 12px;
  width: 100%;
`;

export const Label = styled.label`
  color: ${({ theme }): string => theme.colors.contrast['3'].text};
  display: block;
  font-size: ${({ theme }): number => theme.font.size.small}px;
  left: 0;
  line-height: ${({ theme }): number => theme.font.lineHeight.small}px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const TextHelper = styled(animated.span)`
  bottom: 0;
  display: block;
  font-size: ${({ theme }): number => theme.font.size.small}px;
  left: 0;
  line-height: ${({ theme }): number => theme.font.lineHeight.small}px;
  position: absolute;
`;
