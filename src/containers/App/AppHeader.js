import React, { Component } from 'react';

class AppHeader extends Component {
  render() {
    return (
      <div className="App-header">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default AppHeader;
