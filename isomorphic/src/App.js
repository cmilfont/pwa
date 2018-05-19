import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Theme from './components/theme';
import Home from './components/home';

class App extends React.Component {
  render() {
    const { initialWidth = 'sm' } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Theme>
          <Home initialWidth={initialWidth} />
        </Theme>
      </React.Fragment>
    );
  }
}

export default App;
