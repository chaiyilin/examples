import styled from 'styled-components';
import { css } from 'styled-components';

const handheld = (...args) => css`
  @media (min-width: 420px) {
    ${css(...args)};
  }
`;

// Make the text smaller on handheld devices
export const Compo = styled.div`
  font-size: 16px;
  ${handheld`
    font-size: 14px;
    background:black;
    height:10em;
    width:10em;
  `};
`;
