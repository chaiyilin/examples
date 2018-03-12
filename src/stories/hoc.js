import React from 'react';
import { storiesOf } from '@storybook/react';
import { RenderProp } from '../components/hoc/RenderProp';
import { CurriedHoc } from '../components/hoc/curry';

export const stories = storiesOf('hoc', module)
  .add('02-render props', () => <RenderProp />)
  .add('01-hoc', () => <CurriedHoc />);
