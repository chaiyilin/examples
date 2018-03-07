import React from 'react';
import { storiesOf } from '@storybook/react';

import { Basic } from '../components/styled-components/02-advanced/01-Theming/01-basic';
import { FunctionThemes } from '../components/styled-components/02-advanced/01-Theming/02-Function-Themes';
import { GettingTheThemeWithoutStyledComponents } from '../components/styled-components/02-advanced/01-Theming/03-Getting-The-Theme-Without-Styled-Components';
import { TheThemeProp } from '../components/styled-components/02-advanced/01-Theming/04-The-Theme-Prop';

export const stories = storiesOf(
  'styled components/02-advanced/01-Theming',
  module
)
  .add('01-Basic', () => <Basic />)
  .add('02-Function Themes', () => <FunctionThemes />)
  .add('03-Getting The Theme Without Styled Components', () => (
    <GettingTheThemeWithoutStyledComponents />
  ))
  .add('04-The Theme Prop', () => <TheThemeProp />);
