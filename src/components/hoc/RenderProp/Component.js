// Contrived example for simplicity
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Caffeinate extends Component {
	propTypes = { children: PropTypes.func.isRequired };

	state = { coffee: "Americano" };

	render() {
		return this.props.children(this.state.coffee);
	}
}

export const RenderProp = () =>
	<Caffeinate>
		{(beverage) => <div>Drinking an {beverage}.</div>}
	</Caffeinate>
