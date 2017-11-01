import React, { Component } from "react";
import { Draggable } from 'react-drag-and-drop'

class Employee extends Component {
  render() {
    const {employee} = this.props;
    return (
      <Draggable type='employeee' data={employee.id}>
        <li className="emp-item" key={employee.id}>
            {employee.name} - <span className="position">{employee.position.name}</span>
        </li>
      </Draggable>
    );
  }
}

export default Employee;