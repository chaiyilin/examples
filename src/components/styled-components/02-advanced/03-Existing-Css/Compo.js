import React from 'react';
import styled from 'styled-components';

// Styling normal React components
class MyComponent extends React.Component {
  render() {
    // Attach the passed-in className to the DOM node
    return <div className={this.props.className} />;
  }
}

class MyComponent1 extends React.Component {
  render() {
    // Attach the passed-in className to the DOM node
    return <div className={`some-global-class ${this.props.className}`} />;
  }
}

// Issues with Specificity
// MyComponent.js
const MyComponent2 = styled.div`
  background-color: green;
`;

// my-component.css
/* .red-bg {
  background-color: red;
} */

// For some reason this component still has a green background,
// even though you're trying to override it with the "red-bg" class!
<MyComponent2 className="red-bg" />;
