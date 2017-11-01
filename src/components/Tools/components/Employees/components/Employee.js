import React, { Component } from "react";

class Employee extends Component {
  render() {
    const {employee} = this.props;
    return (
      <li className="emp-item" key={employee.id}>
        {employee.name} - <span className="position">{employee.position.name}</span>
      </li>
    );
  }
}

export default Employee;