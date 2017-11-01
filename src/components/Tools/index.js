import React, { Component } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectTeam} from '../../actions/teams';

import Teams from './components/Teams';
import Employees from './components/Employees';

class Tools extends Component {
  render() {
    return (
      <div className="tools">
        <Teams />
        <Employees />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.data.teams,
    employees: state.data.employees
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTeam: bindActionCreators(selectTeam, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tools);