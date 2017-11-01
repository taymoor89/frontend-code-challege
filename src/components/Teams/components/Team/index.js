import React, { Component } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeMember} from '../../../../actions/teams';
import { Droppable } from 'react-drag-and-drop'
import Member from './components/Member';

class Team extends Component {
  removeMember = (member) => {
    const {team} = this.props;
    this.props.removeMember(team, member);
  }

  onDrop(data) {
    console.log('dropped');
  }

  render() {
    const {team} = this.props

    const members = team.members.map(member => (
      <Member key={member.id} member={member} removeMember={this.removeMember} />
    ));

    return (
      <div className="team-table" key={team.id}>
        <h2>{team.name} ({team.members.length})</h2>
        <Droppable type={['employeee']} onDrop={this.onDrop.bind(this)} className="table">
          {members}
        </Droppable>
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