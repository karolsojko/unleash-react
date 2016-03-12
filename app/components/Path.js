import React from 'react';

class Path extends React.Component {
  render() {
    return (
      <div>Path of {this.props.params.username}</div>
    )
  }
};

export default Path;
