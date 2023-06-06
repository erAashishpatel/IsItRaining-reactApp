import React, { Component } from 'react';

class IsItRaining extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itsRaining: false,
    };
  }

  render() {
    const { itsRaining } = this.state;
    return (
      <div>
        <h2>Is it Raining today? {itsRaining ? 'No' : 'Yes'}</h2>
      </div>
    );
  }
}

export default IsItRaining;