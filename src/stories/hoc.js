import React from 'react';
import { storiesOf } from '@storybook/react';
import { RenderProp } from '../components/hoc/RenderProp';
import { CurriedHoc } from '../components/hoc/curry';
import { ReusedHoc } from '../components/hoc/02-reuse';

export const stories = storiesOf('hoc', module)
  .add('render props', () => <RenderProp />)
  .add('01-hoc', () => <CurriedHoc />)
  .add('02-reuse hoc', () => <ReusedHoc />);
