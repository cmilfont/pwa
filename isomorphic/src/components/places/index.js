import React from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      height: '100%',
    },
  });
  

class Places extends React.PureComponent {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                Places
                <Link to="/places/cervejaria-5-elementos">
                    Cervejaria 5 Elementos
                </Link>
            </div>
        );
    }
}

export default withStyles(styles)(Places);