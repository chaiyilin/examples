import React from 'react';
import styled from 'styled-components';

import { primary } from './style.js';

const Button = styled.button`
  ${primary};
`;

const Compo = () => (
  <div>
    <Button primary>A Primary Button</Button>
    <Button secondary>And I am a secondary</Button>
  </div>
);

export default Compo;
