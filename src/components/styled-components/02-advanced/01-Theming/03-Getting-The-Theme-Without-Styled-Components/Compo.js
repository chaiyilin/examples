import React from 'react';
import { ThemeProvider, withTheme } from 'styled-components';

// Define our `fg` and `bg` on the theme
const theme = {
  fg: 'palevioletred',
  bg: 'white'
};

const Div = withTheme(props => {
  return <div>{props.theme.fg}</div>;
});

export const Compo = () => (
  <ThemeProvider theme={theme}>
    <Div />
  </ThemeProvider>
);
