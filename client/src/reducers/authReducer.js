import {} from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      }
    default:
      return state;
  }
}