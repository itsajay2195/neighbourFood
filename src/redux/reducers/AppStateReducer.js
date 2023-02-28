const initialState = {
  loading: false,
  isDarkThemed: false,
};

let appStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME_ACTION':
      let newState = {...state};
      newState = {...initialState, isDarkThemed: !state.isDarkThemed};
      return newState;

    default:
      return state;
  }
};


export default appStateReducer;