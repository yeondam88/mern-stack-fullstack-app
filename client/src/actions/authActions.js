import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import {
  SET_CURRENT_USER,
  GET_ERRORS
} from './actionTypes';

// Register user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push('/signin'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get user token
export const loginUser = (userData, history) => dispatch => {
  axios.post('/api/users/login', userData)
    .then(res => {
      // Save to localStorage
      const {
        token
      } = res.data;

      // Set token to localStorage
      localStorage.setItem('jwtToken', token);

      // Set token to Auth Headers
      setAuthToken(token);

      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      history.push('/dashboard');
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}