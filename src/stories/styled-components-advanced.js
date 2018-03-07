import React from 'react';
import { storiesOf } from '@storybook/react';

import { Form } from '../components/styled-components/02-advanced/02-Refs';
import { Basic } from '../components/styled-components/02-advanced/04-Media-Query/01-basic';
import { Template } from '../components/styled-components/02-advanced/04-Media-Query/02-Template';
import { ReferringToOtherComponents } from '../components/styled-components/02-advanced/05-Referring-To-Other-Components';

export const Story1 = storiesOf(
  'styled components/02-advanced/02-Refs',
  module
).add('example', () => <Form />);

export const Story2 = storiesOf(
  'styled components/02-advanced/04-Media Query',
  module
)
  .add('01-Basic', () => <Basic />)
  .add('02-Template', () => <Template />);

export const Story3 = storiesOf(
  'styled components/02-advanced/05-Referring-To-Other-Components',
  module
).add('example', () => <ReferringToOtherComponents />);
