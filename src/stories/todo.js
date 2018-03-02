import React from 'react';
import { storiesOf } from '@storybook/react';
import { Todo } from '../components/Todo';

export const stories = storiesOf('todo', module)
	.add('example', () => (
		<Todo />
	));
