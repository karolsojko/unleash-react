import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../actions/UserActions';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import * as Colors from 'material-ui/lib/styles/colors';

export class Path extends React.Component {
  componentDidMount() {
    this.props.actions.userGet(this.props.params.username);
  }
  render() {
    const { users } = this.props;
    const cards = users[this.props.params.username] ? users[this.props.params.username].cards : [];
    const path = [];
    for (const id in cards) {
      path.push(
          <ListItem
            key={id}
            primaryText={cards[id].type}
            secondaryText={cards[id].task}
            secondaryTextLines={2}
            style={{backgroundColor: cards[id].achieved ? Colors.green200 : null}}
            leftAvatar={
              <Avatar
                color={Colors.pinkA200} backgroundColor={Colors.transparent}
                style={{left: 8}}
              >
                {cards[id].level}
              </Avatar>
            }
          />
      );
    }
    return (
      <List>
        {path}
      </List>
    )
  }
};

Path.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Path);
