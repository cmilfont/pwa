import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { blue, red } from 'material-ui/colors';

class Theme extends React.Component {
    render() {
        const { children, others } = this.props;
        const theme = createMuiTheme({
            palette: {
                primary: blue,
                accent: red,
                type: 'light'
            }
        });
        return (
            <MuiThemeProvider theme={theme} {...others} >
                {children}
            </MuiThemeProvider>
        );
    }
}

export default Theme;