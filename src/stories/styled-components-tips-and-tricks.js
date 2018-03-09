import React from 'react';
import { storiesOf } from '@storybook/react';

import { Mixin } from '../components/styled-components/03-tips-and-tricks/01-mixin';
import { Content } from '../components/styled-components/03-tips-and-tricks/02-content';
import { SeparateYourCodeWithStyledComponents } from '../components/styled-components/03-tips-and-tricks/03-separate-your-code-with-styled-components';

export const stories = storiesOf('styled components/03-tips-and-tricks', module)
  .add('01-mixin', () => <Mixin />)
  .add('02-content', () => <Content />)
  .add('03-separate your code with styled components', () => (
    <SeparateYourCodeWithStyledComponents />
  ));
