import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import OfflinePin from '@material-ui/icons/OfflinePin';

class Offline extends React.PureComponent {
    render() {
        const { offlinePin } = this.props;
        return (
            <IconButton color="secondary" onClick={offlinePin}>
                <OfflinePin />
            </IconButton>
        )
    }
}

export default Offline;