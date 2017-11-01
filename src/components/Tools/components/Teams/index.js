import React, { Component } from "react";
import {connect} from 'react-redux';

import Team from './components/Team';

class Teams extends Component {
  render() {
    return (
      <div className="teams">
        <h3>Teams</h3>
        <ul className="list">
          {this.props.teams.map(team => <Team key={team.id} team={team}/>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.data.teams
  }
};

export default connect(mapStateToProps, null)(Teams);