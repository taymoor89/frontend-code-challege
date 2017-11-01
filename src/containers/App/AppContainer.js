import React, { Component } from 'react';

import Teams from '../../components/Teams';
import Tools from '../../components/Tools';


class AppContainer extends Component {
  render() {
    return ( 
      <div className="wrapper">
        <Teams />
        <Tools />
      </div>
    );
  }
}

export default AppContainer;
