import {API_HOST} from '../config';
import toastr from 'toastr';
import {push} from 'react-router-redux';
const LOAD = 'auth/LOAD';
const LOAD_FAIL = 'auth/LOAD_FAIL';
const RESET_ERRORS = 'auth/RESET_ERRORS';

export const initialState = {
  loading: false,
  errors: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return { ...state, loading: true };
    case LOAD_FAIL:
      return { ...state, loading: false, errors: action.error };
    case RESET_ERRORS:
      return {...state, errors: {}};
    default:
      return state;
  }
}

export function resetErrors() {
  return dispatch => dispatch({ type: RESET_ERRORS });
}
