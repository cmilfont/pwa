import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';

class Gps extends React.PureComponent {
    render() {
        const { locate } = this.props;
        return (
            <IconButton color="default" onClick={locate}>
                <GpsFixedIcon />
            </IconButton>
        )
    }
}

export default Gps;