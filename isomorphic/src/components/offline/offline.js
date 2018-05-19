import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import OfflinePin from '@material-ui/icons/OfflinePin';

class Offline extends React.PureComponent {
    render() {
        const { offlinePin, offline } = this.props;
        const color = offline? "secondary" : "default";
        return (
            <IconButton color={color} onClick={offlinePin}>
                <OfflinePin />
            </IconButton>
        )
    }
}

export default Offline;