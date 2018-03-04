import React from 'react';
import { Div } from './Div';
import { Toggle } from './Toggle';

export const Compo = () => (
  <Div>
    <Toggle onToggle={on => console.log('toggle', on)} />
  </Div>
);
