import React from 'react';
import { storiesOf } from '@storybook/react';
import { Camelcase } from '../components/camelcase';

export const stories = storiesOf('01-camelcase', module).add('example', () => (
  <Camelcase />
));
