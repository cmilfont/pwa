import React from 'react';
import Inspiration from '../inspiration';

class Destinations extends React.PureComponent {
  render() {
    const { match } = this.props;

    return (
      <div>
        <h3>Destinations/{match.params.destinationSlug}</h3>
        <Inspiration />
      </div>
    )
  }
}

export default Destinations;
