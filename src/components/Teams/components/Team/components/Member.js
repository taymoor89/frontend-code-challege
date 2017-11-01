import React, { Component } from "react";

class Member extends Component {
  render() {
    const {member} = this.props;
    
    return (
      <div key={member.id} className="table__row">
        <div className="table__cell">{member.name}</div>
        <div className="table__cell fixed">{member.position.name}</div>
        <div className="table__cell fixed">
          <button onClick={this.props.removeMember.bind(this, member)}>X</button>
        </div>
      </div>
    );
  }
}

export default Member;