import React from 'react';

class Path extends React.Component {
  render() {
    return (
      <div>Hello {this.props.params.username}</div>
    )
  }
};

export default Path;
