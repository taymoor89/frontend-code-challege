import React, { Component } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeMember} from '../../../../actions/teams';
import Member from './components/Member';

class Team extends Component {
  removeMember = (member) => {
    const {team} = this.props;
    this.props.removeMember(team, member);
  }

  render() {
    const {team} = this.props

    const members = team.members.map(member => (
      <Member key={member.id} member={member} removeMember={this.removeMember} />
    ));

    return (
      <div className="team-table" key={team.id}>
        <h2>{team.name} ({team.members.length})</h2>
        <div className="table">
          {members}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeMember: bindActionCreators(removeMember, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Team);