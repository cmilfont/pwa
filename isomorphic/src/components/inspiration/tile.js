import React from 'react';
import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  tile: {
    padding: '2px',
  },
  resultImage: {
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: '2px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  resultInformation: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '16px',
  },
});

class Tile extends React.PureComponent {
  render() {
    const { classes, imageUrl, title, subtitle, description, ...others } = this.props;

    return (
      <GridListTile
        classes={{ tile: classes.tile }}
        {...others}
      >
        <ButtonBase
          className={classes.resultImage}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          href={`/experiences/${title}`}
        >
          <div className={classes.resultInformation}>
            <Typography variant="title" color="inherit">{title}</Typography>
            <Typography variant="subheading" color="inherit">{subtitle}</Typography>
            <Typography variant="body1" color="inherit">{description}</Typography>
          </div>
        </ButtonBase>
      </GridListTile>
    );
  }
}
export default withStyles(styles)(Tile);