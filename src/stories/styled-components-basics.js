import React from 'react';
import { storiesOf } from '@storybook/react';

import { GettingStarted } from '../components/styled-components/01-basics/01-Getting-Started';
import { PassedProps } from '../components/styled-components/01-basics/02-Passed-Props';
import { AdaptingBasedOnProps } from '../components/styled-components/01-basics/03-Adapting-Based-On-Props';
import { StylingAnyComponents } from '../components/styled-components/01-basics/04-Styling-Any-Components';
import { ExtendingStyles } from '../components/styled-components/01-basics/05-Extending-Styles';
import { AttachingAdditionalProps } from '../components/styled-components/01-basics/06-Attaching-Additional-Props';
import { Animations } from '../components/styled-components/01-basics/07-Animations';

export const stories = storiesOf('styled components/01-basics', module)
  .add('Getting Started', () => <GettingStarted />)
  .add('Passed Props', () => <PassedProps />)
  .add('Adapting Based On Props', () => <AdaptingBasedOnProps />)
  .add('Styling Any Components', () => <StylingAnyComponents />)
  .add('Extending Styles', () => <ExtendingStyles />)
  .add('Attaching Additional Props', () => <AttachingAdditionalProps />)
  .add('Animations', () => <Animations />);
