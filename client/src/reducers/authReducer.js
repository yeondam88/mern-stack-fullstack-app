const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      }
    default:
      return state;
  }
}