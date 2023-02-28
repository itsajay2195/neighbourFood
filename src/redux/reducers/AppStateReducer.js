const initialState = {
  loading: false,
  isDarkThemed: true,
};

let appStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME_ACTION':
      let newState = {...state};
      newState = {...initialState, isDakThemed: action.payload.isDakThemed};
      return newState;

    default:
      return state;
  }
};


export default appStateReducer;