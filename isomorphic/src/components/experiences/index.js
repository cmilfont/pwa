import React from 'react';
import Inspiration from '../inspiration';

class Experiences extends React.PureComponent {
  render() {
    const { match } = this.props;
    return (
      <div>
        <h3>Experiences/{match.params.experienceSlug}</h3>
        <Inspiration />
      </div>
    )
  }
}

export default Experiences;
