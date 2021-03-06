import React, { Component } from 'react';

export default class RefDom extends React.Component {

	focus = () => {
		// Explicitly focus the text input using the raw DOM API
		this.textInput.focus();
	}

	render() {
		// Use the `ref` callback to store a reference to the text input DOM
		// element in an instance field (for example, this.textInput).
		return (
			<div>
				<input
					type="text"
					ref={(input) => { this.textInput = input; }} />
				<input
					type="button"
					value="Focus the text input"
					onClick={this.focus}
				/>
			</div>
		);
	}
}

