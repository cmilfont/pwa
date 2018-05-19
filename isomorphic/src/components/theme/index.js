import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';

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