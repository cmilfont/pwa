import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import SearchToolbar from '../search-toolbar';

const styles = () => ({
  root: {
    display: 'flex',
    width: '100%',
  },
});

class Map extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <SearchToolbar />
      </div>
    );
  }
}

export default withStyles(styles)(Map);
