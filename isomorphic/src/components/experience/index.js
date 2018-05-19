import React from 'react';
import Inspiration from '../inspiration';

class Experience extends React.PureComponent {
  render() {
    const { match } = this.props;

    return (
      <div>
        <h3>Experience/{match.params.destinationSlug}/{match.params.experienceSlug}</h3>
        <Inspiration />
      </div>
    )
  }
}

export default Experience;
