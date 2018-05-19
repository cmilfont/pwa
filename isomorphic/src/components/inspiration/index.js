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
    display: 'flex',
    textAlign: 'center',
    paddingBottom: '20px',
    [theme.breakpoints.down('md')]: {
      overflowX: 'scroll',
      overflowY: 'hidden',
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
          <Card
            href="/destination"
            title="Onde ir"
            imageUrl={`https://picsum.photos/640/480`}
          />
          <Card
            href="/experiences"
            title="Experiências"
            imageUrl={`https://picsum.photos/640/480`}
          />
          <Card
            href="/places"
            title="Onde beber"
            imageUrl={`https://picsum.photos/640/480`}
          />
        </div>
        <List>
          {packages || this.packages}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(Inspiration);
