import React from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as UserActions from '../actions/UserActions';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

export class Paths extends React.Component {
  componentDidMount() {
    this.props.actions.userList();
  }
  handlePathSelect(username) {
    this.context.router.push('/paths/' + username);
  }
  render() {
    const { users } = this.props;
    const paths = [];
    for (const id in users) {
      paths.push(
          <ListItem
            key={users[id].username}
            primaryText={users[id].google.displayName}
            secondaryText={users[id].google.cachedUserProfile.email}
            leftAvatar={<Avatar src={users[id].google.cachedUserProfile.picture} />}
            onTouchTap={() => this.handlePathSelect(users[id].username)}
          />
      );
    }

    return (
      <List>
        {paths}
      </List>
    )
  }
};

Paths.propTypes = {
  actions: React.PropTypes.object.isRequired,
  users: React.PropTypes.object.isRequired
};

Paths.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Paths);
