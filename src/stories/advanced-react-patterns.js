import React from 'react';
import { storiesOf } from '@storybook/react';
import { App } from '../components/advanced-react-patterns/01-intro-to-react-toggled/App';

export const stories = storiesOf('advanced-react-patterns', module).add(
  '01-intro-to-react-toggled',
  () => <App />
);
