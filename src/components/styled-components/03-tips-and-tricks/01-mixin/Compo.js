import styled from 'styled-components';

function truncate(width) {
  return `
    width: ${width};
    height: 10em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}

export const Compo = styled.div`
  ${truncate('250px')};
  background: red;
`;
