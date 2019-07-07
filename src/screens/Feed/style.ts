import { animated } from 'react-spring';
import styled from '../../assets/styled-components';

export const Menu = styled.ul`
  display: flex;
  margin: 0 auto 32px auto;
  max-width: 400px;
  padding: 0;
`;

export const MenuList = styled.li<{ activeCategory: boolean }>`
  flex: 1;
  line-height: 42px;
  list-style: none;
  text-align: center;
  a {
    color: ${({ theme, activeCategory }): string =>
      activeCategory
        ? theme.colors.primary.text
        : theme.colors.contrast[5].text};
    text-decoration: none;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 760px;
  padding-left: 2vw;
  padding-right: 2vw;
`;

export const InfinityScrollWrapper = styled.div`
  position: relative;
`;

export const InfinityScroll = styled(animated.div)`
  display: grid;
  grid-column-gap: 2vw;
  grid-row-gap: 2vw;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: ${({ theme }): number => theme.sizes.mobile}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Thumb = styled.div`
  background-color: ${({ theme }): string => theme.colors.contrast[5].bg};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${({ theme }): number => theme.sizes.borderRadius.small}px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.11);
  height: 150px;
`;

export const ModalContent = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  @media (min-width: ${({ theme }): number => theme.sizes.mobile}px) {
    background-size: inherit;
  }
`;
