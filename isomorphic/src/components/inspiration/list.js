import React from 'react';
import GridList from '@material-ui/core/GridList';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '../../containers/with-width';

const styles = theme => ({

});

class List extends React.PureComponent {
  render() {
    const { children, width } = this.props;
    const colsNumber = ({
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
    })[width];

    return (
      <GridList
        cellHeight={140}
        cols={colsNumber}
      >
        {children}
      </GridList>
    );
  };
}

export default withStyles(styles)(withWidth()(List));
