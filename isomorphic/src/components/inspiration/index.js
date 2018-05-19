import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import List from './list';
import Tile from './tile';
import Card from './card';

const styles = theme => ({
  root: {
    height: '100%',
  },
  cardWrapper: {
    display: 'block',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      overflowX: 'scroll',
      whiteSpace: 'nowrap',
    },
  },
});

class Inspiration extends React.PureComponent {
  componentWillMount() {
    this.packages = Array(10)
      .fill(null)
      .map((_, index) => (
        <Tile
          key={`tile-${index}`}
          imageUrl={`https://picsum.photos/640/480?image=${Math.floor(Math.random() * 200)}`}
          title={`Title${index}`}
          subtitle={`Subtitle${index}`}
          description={`Description${index}`}
        />
      ));
  }

  render() {
    const { classes, packages } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.cardWrapper}>
          <Card title="Experiências" imageUrl={`https://picsum.photos/640/480`} />
          <Card title="Lugares" imageUrl={`https://picsum.photos/640/480`} />
          <Card title="Destinos" imageUrl={`https://picsum.photos/640/480`} />
        </div>
        <List>
          {packages || this.packages}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(Inspiration);
