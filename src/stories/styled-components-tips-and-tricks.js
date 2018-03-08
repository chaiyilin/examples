import React from 'react';
import { storiesOf } from '@storybook/react';

import { Mixin } from '../components/styled-components/03-tips-and-tricks/mixin';

export const stories = storiesOf(
  'styled components/03-tips-and-tricks',
  module
).add('01-mixin', () => <Mixin />);
