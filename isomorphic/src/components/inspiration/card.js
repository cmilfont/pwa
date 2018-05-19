import React from 'react';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flex: 1,
    display: 'inline-flex',
    minWidth: '140px',
    //maxWidth: '140px',
    height: '140px',
    margin: '8px',
    // '&:first-child': {
    //   marginLeft: '24px',
    // },
    // '&:last-child': {
    //   marginRight: '24px',
    // },
  },
  media: {
    height: '100px',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: '8px',
    // '&:last-child': {
    //   padding: '8px',
    // },
  },
});

class InspirationCard extends React.PureComponent {
  render() {
    const { classes, imageUrl, title, href } = this.props;
    return (
      <ButtonBase
        disableFocusRipple
        disableRipple
        className={classes.root}
        component={Link}
        to={href}
      >
        <Card>
          <CardMedia
            className={classes.media}
            image={imageUrl}
            />
          <CardContent className={classes.content}>
            <Typography variant="subheading">
              {title}
            </Typography>
          </CardContent>
        </Card>
      </ButtonBase>
    );
  }
}

export default withStyles(styles)(InspirationCard);
