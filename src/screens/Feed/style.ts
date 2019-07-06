import styled from '../../assets/styled-components';

export const Content = styled.div`
  margin: 0 auto;
  max-width: 760px;
  padding-left: 2vw;
  padding-right: 2vw;
`;

export const InfinityScroll = styled.div`
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
  background-size: contain;
  border-radius: ${({ theme }): number => theme.sizes.borderRadius.small}px;
  height: 150px;
`;

export const ModalContent = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
`;
