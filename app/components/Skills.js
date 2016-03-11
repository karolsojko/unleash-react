import React from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as SkillActions from '../actions/SkillActions';

export class Skills extends React.Component {
  componentDidMount() {
    this.props.actions.skillList();
  }
  render() {
    const { skills } = this.props;
    const skillLinks = [];
    for (const id in skills) {
      skillLinks.push(
        <li key={skills[id].name}>
          <Link to={'/skill/' + skills[id].name}>{skills[id].name}</Link>
        </li>
      );
    }
    return (
      <div>
        <h1>List of skills</h1>
          <ul>
            {skillLinks}
          </ul>
      </div>
    )
  }
};

Skills.propTypes = {
  actions: React.PropTypes.object.isRequired,
  skills: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    skills: state.skills
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SkillActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
