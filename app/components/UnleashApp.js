import React from 'react';
import Menu from './Menu';

class UnleashApp extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Menu />
        <div>Hello World</div>
        {children}
      </div>
    )
  }
};

export default UnleashApp;
