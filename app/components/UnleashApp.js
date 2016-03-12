import React from 'react';
import Menu from './Menu';

class UnleashApp extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Menu />
        {children}
      </div>
    )
  }
};

export default UnleashApp;
