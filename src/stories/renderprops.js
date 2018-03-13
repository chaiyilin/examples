import React from 'react';
import { storiesOf } from '@storybook/react';
import { Basic } from '../components/RenderProp/01-basic';

export const stories = storiesOf('Render Props', module).add('basic', () => (
  <Basic />
));
