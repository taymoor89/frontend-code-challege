import React, { Component } from "react";
import {connect} from 'react-redux';

import Team from './components/Team';

class Teams extends Component {
  render() {
    const tables = this.props.teams.filter(team => team.selected).map(team => (
      <Team team={team} key={team.id} />
    ));

    return (
      <div className="teams-container">
        {tables}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    teams: state.data.teams
  }
};

export default connect(mapStateToProps)(Teams);