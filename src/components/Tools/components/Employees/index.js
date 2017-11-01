import React, { Component } from "react";
import {connect} from 'react-redux';

import Employee from './components/Employee';

class Employees extends Component {
  render() {
    return (
      <div className="devs">
        <h3>Employees</h3>
        <ul className="list">
          {this.props.employees.map(emp => <Employee key={emp.id} employee={emp} />)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.data.employees
  }
};

export default connect(mapStateToProps)(Employees);