import {
  REGISTER_USER
} from './actionTypes';

// Register user
export const registerUser = (userData) => ({
  type: 'REGISTER_USER',
  payload: userData
});