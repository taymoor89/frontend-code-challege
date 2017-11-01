const initialState = {
  loading: false,
  teams: [],
  positions: [],
  employees: []
};

export default function (state = initialState, action) {
  switch(action.type) {

    case 'DATA_FETCH_PENDING': {
      return {
        ...action.payload,
        loading: true
      }
    }

    case 'DATA_FETCHED': {
      return {
        ...action.payload,
        loading: false
      }
    }

    case 'TEAM_SELECTED': {
      const teams = [...state.teams];
      teams.forEach(team => {
        team.selected = (team.id === action.payload.id ? !team.selected : team.selected);
      });
      return {...state, teams};
    }

    case 'REMOVE_MEMBER': {
      const teamId = action.payload.team.id;
      const memberId = action.payload.member.id;
      const teams = state.teams.map((t) => {
        if(t.id !== teamId) return t;
        let members = t.members.filter(m => m.id !== memberId);
        return {...t, members}
      })
      return {...state, teams};
    }

    default:
      return state;
  }
}