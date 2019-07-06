import styled from '../../assets/styled-components';

export const Content = styled.div`
  margin: 0 auto;
  max-width: 760px;
`;

export const InfinityScroll = styled.div`
  display: grid;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  grid-template-columns: repeat(3, 1fr);
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
  height: 70vh;
  width: 100%;
`;
