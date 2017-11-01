import React, { Component } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectTeam} from '../../../../../actions/teams';

class Team extends Component {
  render() {
    const {team} = this.props;
    return (
      <li onClick={this.props.selectTeam.bind(this, team)} 
        className={`team-item ${team.selected ? 'selected': ''}`}>
        {team.name} ({team.members.length})
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectTeam: bindActionCreators(selectTeam, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(Team);