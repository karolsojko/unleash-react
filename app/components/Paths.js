import React from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as UserActions from '../actions/UserActions';

export class Paths extends React.Component {
  componentDidMount() {
    this.props.actions.userList();
  }
  render() {
    const { users } = this.props;
    const paths = [];
    for (const id in users) {
      paths.push(
        <li key={users[id].username}>
          <Link to={'/paths/' + users[id].username}>{users[id].username}</Link>
        </li>
      );
    }

    return (
      <div>
        <h1>List of paths</h1>
        <ul>
          {paths}
        </ul>
      </div>
    )
  }
};

Paths.propTypes = {
  actions: React.PropTypes.object.isRequired,
  users: React.PropTypes.object.isRequired
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
