import {API_HOST, token, twitter_screen_name} from '../config';
import  moment from 'moment';
import {push} from 'react-router-redux';
import toastr from 'toastr';
const LOAD = 'profile/LOAD';
const LOAD_SUCCESS = 'profile/LOAD_SUCCESS';
const LOAD_FAIL = 'profile/LOAD_FAIL';
const RESET_ERRORS = 'profile/RESET_ERRORS';
const LOAD_TWITTER_USER = 'profile/LOAD_TWITTER_USER';
const LOAD_TWIITER_USER_DATA = 'profile/LOAD_TWIITER_USER_DATA';
const initialState = {
  loading: false,
  errors: {},
  twitterUser: {},
  twitterUserData: {data: [], pieChartData: [], barChartData: [] },
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return { ...state, loading: true };
    case LOAD_TWITTER_USER:
      return { ...state, loading: false, twitterUser: action.result };
    case LOAD_FAIL:
      return { ...state, loading: false, errors: action.error };
    case RESET_ERRORS:
      return { ...state, errors: {} };
    case LOAD_TWIITER_USER_DATA:
      return { ...state, twitterUserData: Object.assign({}, state.twitterUserData, action.result), pieChartData: [], barChartData: []};
    default:
      return state;
  }
}

export function resetErrors() {
  return dispatch => dispatch({ type: RESET_ERRORS });
}

export function fetchTwitterUser() {
  return (dispatch, getState, api) => new Promise((resolve, reject) => {
    dispatch(resetErrors());
    dispatch({ type: LOAD });
    fetch(`${API_HOST}/twitter_users?twitter_screen_name=${twitter_screen_name}&_token=${token}`)
      .then(response => {
        if(response.status >= 400) {
          throw new Error(response.statusText || 'Internal server error');
        }
        return response.json();
      })
      .then(result => {
        if (result.status === 0 && result.message) {
          dispatch({
            type: LOAD_FAIL,
            error: result.message
          });
          toastr.error(result.message);
          return resolve();
        }
        dispatch({ type: LOAD_TWITTER_USER, result: (result.message[result.message.length-1]) ? result.message[result.message.length-1] : {} });
        dispatch({ type: LOAD_TWIITER_USER_DATA, result: {data: result.message} });
        const pieChartData = [];
        const barChartData = [];
        let x = 0;
        if(result.message) {
          result.message.forEach(data => {
            pieChartData.push({ metric: "Follower", followers: 3000});
            pieChartData.push({ metric: "Following", followings: data.following_lifetime});
            barChartData.push({x: x, date: moment(data.metric_timestamp).format("MM/DD/YYYY"), follower_lifetime: data.follower_lifetime, following_lifetime: data.following_lifetime, retweet_lifetime: data.retweet_lifetime, newDate: new Date(data.metric_timestamp) });
            x++;
          });
          dispatch({ type: LOAD_TWIITER_USER_DATA, result: {pieChartData: pieChartData} });
          dispatch({ type: LOAD_TWIITER_USER_DATA, result: {barChartData: barChartData} });
        }

        return resolve(result.message);
      })
      .catch(error => {
        toastr.error(error);
        dispatch({ type: LOAD_FAIL, error });
        reject(error);
      });
  });
}
