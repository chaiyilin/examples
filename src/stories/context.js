import React from 'react';
import { storiesOf } from '@storybook/react';
import { ContextExample } from '../components/context';

export const stories = storiesOf('context', module).add('example', () => (
  <ContextExample />
));
