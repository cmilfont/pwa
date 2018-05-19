import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Attend from './attend';

const styles = theme => ({
    root: {
      height: '100%',
    },
  });
  

class Place extends React.PureComponent {

    componentDidMount() {
        const { place, loadPlace, match: { params: { placeSlug: slug } } } = this.props
        if (!place.id) {
            loadPlace(slug)
        }
    }

    render() {
        const { classes, place } = this.props;
        return (
            <div className={classes.root}>
                {place.name}

                <Attend />
            </div>
        );
    }
}

export default withStyles(styles)(Place);

// this.props.match.params.placeSlug