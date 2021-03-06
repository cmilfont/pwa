import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import SearchIcon from '@material-ui/icons/Search';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';

import UserMenu from '../user-menu';
import Gps from '../gps';
import PushNotificationButton from '../push-notification-button';
import Offline from '../offline';

const styles = theme => ({
  searchToolbar: {
    position: 'relative',
    background: '#fff',
    borderRadius: '2px',
    margin: '16px',
    width: '392px',
    maxHeight: '48px',
    minHeight: '48px',
    borderBottom: '1px solid transparent',
    transitionProperty: 'background,box-shadow',
    transitionDuration: '0.3s',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2), 0 -1px 0px rgba(0,0,0,0.02)',
    zIndex: 1000,
  },
  [theme.breakpoints.down('sm')]: {
    searchToolbar: {
      width: '100%',
    },
  },
});

class SearchToolbar extends React.PureComponent{
  render() {
    const {
      classes,
    } = this.props;

    return (
      <Toolbar className={classes.searchToolbar}>
        <TextField
          color="default"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            disableUnderline: true,
            inputProps: {
              style: { width: '100%' },
            },
          }}
          fullWidth
        />
        <Gps />
        <PushNotificationButton />
        <Offline />
        <UserMenu />
      </Toolbar>
    );
  }
}

export default withStyles(styles)(SearchToolbar);
