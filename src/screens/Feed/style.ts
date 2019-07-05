import styled from '../../assets/styled-components';

export const Content = styled.div`
  display: grid;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  max-width: 760px;
  > div {
    width: 100%;
  }
`;

export const Thumb = styled.div`
  background-color: ${({ theme }): string => theme.colors.contrast[5].bg};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 150px;
`;
