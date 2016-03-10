import React from 'react';
import Rebase from 're-base';
import { Link } from 'react-router';

const base = Rebase.createClass('https://unleash-app-staging.firebaseio.com/');

class Paths extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    this.init();
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  init() {
    this.ref = base.bindToState('users', {
      context: this,
      asArray: true,
      state: 'users'
    });
  }
  render() {
    return (
      <div>
        <h1>List of paths</h1>
        <ul>
        {this.state.users.map((user, index) => {
          return (
            <li key={user.username}>
              <Link to={'/paths/' + user.username}>{user.username}</Link>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
};

export default Paths;
