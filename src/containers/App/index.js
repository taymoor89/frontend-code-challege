import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../../actions/teams';

import AppHeader from './AppHeader';
import AppContainer from './AppContainer';
import AppLoading from './AppLoading';

class App extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="App">
        <AppHeader title={'Some unremarkable IT-Team'}/>
        {this.props.loading? <AppLoading/> : <AppContainer />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.data.loading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: bindActionCreators(fetchData, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
