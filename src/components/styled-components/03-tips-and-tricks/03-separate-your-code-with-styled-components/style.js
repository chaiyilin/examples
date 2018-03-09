import { css } from 'styled-components';

export const primary = css`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: black;
  color: white;
  border: 2px solid white;
  ${props => props.primary && `color: palevioletred;`};
`;

// extend
export const secondary = css`
  ${primary} background: #BADA55;
`;
