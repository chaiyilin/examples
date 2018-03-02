import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RenderProp } from '../components/hoc/RenderProp';

export const stories = storiesOf('hoc', module)
	.add('render props', () => (
		<RenderProp />
	));

