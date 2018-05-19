import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { amber, blue } from '@material-ui/core/colors';

class Theme extends React.Component {
  render() {
    const { children, others } = this.props;

    const theme = createMuiTheme({
      palette: {
        primary: amber,
        secondary: blue,
        accent: blue,
        type: 'light',
      },
    });
    return (
      <MuiThemeProvider theme={theme} {...others}>
        {children}
      </MuiThemeProvider>
    );
  }
};

export default Theme;
