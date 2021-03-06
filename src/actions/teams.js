import _fetchData from '..//utils/backend-mock';

export const fetchData = () => {
  return dispatch => {
    dispatch({type: 'DATA_FETCH_PENDING'});
    _fetchData.then(data => {
      dispatch({
        type: 'DATA_FETCHED',
        payload: data
      });
    });
  };
};

export const selectTeam = (team) => {
  return dispatch => {
    dispatch({
      type: 'TEAM_SELECTED',
      payload: team
    });
  };
};

export const removeMember = (team, member) => {
  return dispatch => {
    dispatch({
      type: 'REMOVE_MEMBER',
      payload: { team, member }
    });
  };
};

export const addMember = (team, member) => {
  return dispatch => {
    dispatch({
      type: 'ADD_MEMBER',
      payload: { team, member }
    });
  };
};