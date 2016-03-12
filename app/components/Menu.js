import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle() {
    this.setState({open: !this.state.open});
  }
  handleClose(path) {
    this.setState({open: false});
    this.context.router.push(path);
  }
  render() {
    return (
      <nav>
        <AppBar
          title="Unleash"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={() => this.handleToggle()}
        />
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem onTouchTap={() => this.handleClose('/')}>Home</MenuItem>
          <MenuItem onTouchTap={() => this.handleClose('/')}>My Path</MenuItem>
          <MenuItem onTouchTap={() => this.handleClose('/paths')}>Paths</MenuItem>
          <MenuItem onTouchTap={() => this.handleClose('/templates')}>Templates</MenuItem>
          <MenuItem onTouchTap={() => this.handleClose('/skills')}>Skills</MenuItem>
        </LeftNav>
      </nav>
    )
  }
};

Menu.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Menu;
