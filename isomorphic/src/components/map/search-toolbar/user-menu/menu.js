import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

class UserMenu extends React.PureComponent {
  state = {
    anchorEl: null,
  }
  
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  callWithCloseHandler = (fn) => () => {
    if (fn) fn();
    this.handleClose();
  };

  render() {
    const { classes, user, loginUser, logoutUser } = this.props;
    const { anchorEl } = this.state;

    const menuContent = Boolean(user.email)
      ? (
        <React.Fragment>
          <MenuItem>
            <Avatar src={user.photoURL} />
            <ListItemText inset primary={user.email} />
          </MenuItem>
          <MenuItem onClick={this.callWithCloseHandler(logoutUser)}>Logout</MenuItem>
        </React.Fragment>
      )
      : (
        <React.Fragment>
          <MenuItem onClick={this.callWithCloseHandler(loginUser)}>Login</MenuItem>
        </React.Fragment>
      );

    return (
      <React.Fragment>
        <IconButton
          color="default"
          onClick={this.handleClick}
          >
          { Boolean(user.email)
            ? <Avatar src={user.photoURL} />
            : <MoreVertIcon />
          }
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.callWithCloseHandler()}
        >
          {menuContent}
        </Menu>
      </React.Fragment>
    );
  }
};

export default withStyles(styles)(UserMenu);