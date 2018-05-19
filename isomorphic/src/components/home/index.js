import React from 'react';
import { isWidthDown } from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import SplitPane from 'react-split-pane';
import { renderRoutes } from 'react-router-config';

import routes from '../../routes';
import Map from '../map';
import styles from './styles';
import withWidth from '../../containers/with-width';

class Home extends React.PureComponent {
  render() {
    const  { classes, width } = this.props;

    const orientation = isWidthDown('sm', width) ? 'horizontal' : 'vertical';
    
    const defaultPanelSizes = ({ size: '50%', minSize: 300, maxSize: -200 });

    const panelSizes = orientation === 'horizontal'
      ? defaultPanelSizes
      : ({ ...defaultPanelSizes, maxSize: -600 });

    return (
      <React.Fragment>
        <SplitPane
          resizerClassName={classes.resizer}
          paneClassName={classes.pane}
          split={orientation}
          {...panelSizes}
        >
            <Map />
            {renderRoutes(routes)}
        </SplitPane>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(withWidth()(Home));