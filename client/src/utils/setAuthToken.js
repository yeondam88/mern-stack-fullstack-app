import axios from 'axios';
import {
  SET_CURRENT_USER
} from '../actions/actionTypes';

const setAuthToken = token => {
  if (token) {
    // Apply to every requests
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth headers
    delete axios.defaults.headers.common['Authorization'];
  }
}

// Set Logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
};

// Log user out
export const logoutUSer = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}))
}

export default setAuthToken;