import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export class Form extends React.Component {
  render() {
    return (
      <Input
        placeholder="Hover here..."
        innerRef={x => {
          this.input = x;
        }}
        onMouseEnter={() => this.input.focus()}
      />
    );
  }
}
