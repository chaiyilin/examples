// Contrived example for simplicity
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Caffeinate extends Component {
  static propTypes = { children: PropTypes.func.isRequired };

  state = { coffee: 'Americano' };

  render() {
    return this.props.children(this.state.coffee);
  }
}

export const Compo = () => (
  <Caffeinate>{beverage => <div>Drinking an {beverage}.</div>}</Caffeinate>
);
