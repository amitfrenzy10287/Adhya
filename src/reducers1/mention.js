import {API_HOST, token, twitter_screen_name} from '../config';
import {push} from 'react-router-redux';
import toastr from 'toastr';
const LOAD = 'mention/LOAD';
const LOAD_FAIL = 'mention/LOAD_FAIL';
const RESET_ERRORS = 'mention/RESET_ERRORS';
const LOAD_MENTIONS = 'mention/LOAD_MENTIONS';
import {fetchTwitterUser} from './profile';
const initialState = {
  loading: false,
  errors: {},
  mentions: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return { ...state, loading: true };
    case LOAD_FAIL:
      return { ...state, loading: false, errors: action.error };
    case RESET_ERRORS:
      return { ...state, errors: {} };
    case LOAD_MENTIONS:
      return { ...state, mentions: action.result};
    default:
      return state;
  }
}

export function resetErrors() {
  return dispatch => dispatch({ type: RESET_ERRORS });
}

export function fetchFacebookMentions() {
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    dispatch(resetErrors());
    dispatch({ type: LOAD });
    fetch(`${API_HOST}/facebook_mentions?facebook_screen_name=${"Accenture"}&_token=${token}`)
      .then(response => {
        if(response.status >= 400) {
          throw new Error(response.statusText || 'Internal server error');
        }
        return response.json();
      })
      .then(result => {
        console.log('THIS IS RESULT', result);
        if (result.status === 0 && result.message) {
          dispatch({
            type: LOAD_FAIL,
            error: result.message
          });
          return resolve();
        }
        dispatch({ type: LOAD_MENTIONS, result: [result.message] });
        return resolve(result.message);
      })
      .catch(error => {
        toastr.error(error);
        dispatch({ type: LOAD_FAIL, error });
        reject(error);
      });
  });
}

export function fetchFacebookPosts() {
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    dispatch(resetErrors());
    dispatch({ type: LOAD });
    fetch(`${API_HOST}/facebook_posts?facebook_screen_name=${twitter_screen_name}&_token=${token}`)
      .then(response => {
        if(response.status >= 400) {
          throw new Error(response.statusText || 'Internal server error');
        }
        return response.json();
      })
      .then(result => {
        console.log('THIS IS RESULT', result);
        if (result.status === 0 && result.message) {
          dispatch({
            type: LOAD_FAIL,
            error: result.message
          });
          return resolve();
        }
        dispatch({ type: LOAD_MENTIONS, result: result.message });
        return resolve(result.message);
      })
      .catch(error => {
        toastr.error(error);
        dispatch({ type: LOAD_FAIL, error });
        reject(error);
      });
  });
}

export function fetchRetweets() {
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    dispatch(resetErrors());
    dispatch({ type: LOAD });

    dispatch(fetchTwitterUser())
      .then(data => {
        const {twitterUser: {twitter_user_id}} = getState().profile;
        fetch(`${API_HOST}/twitter_tweet_quoted?twitter_screen_name=${twitter_screen_name}&_token=${token}`)
          .then(response => {
            if(response.status >= 400) {
              throw new Error(response.statusText || 'Internal server error');
            }
            return response.json();
          })
          .then(result => {
            console.log('THIS IS RESULT', result);
            if (result.status === 0 && result.message) {
              dispatch({
                type: LOAD_FAIL,
                error: result.message
              });
              return resolve();
            }
            dispatch({ type: LOAD_MENTIONS, result: result.message });
            return resolve(result.message);
          })
          .catch(error => {
            toastr.error(error);
            dispatch({ type: LOAD_FAIL, error });
            reject(error);
          });
      })
      .catch(error => {
        toastr.error(error);
      });
  });
}

export function fetchTweetsUserReplies() {
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    dispatch(resetErrors());
    dispatch({ type: LOAD });

    dispatch(fetchTwitterUser())
      .then(data => {
        const {twitterUser: {twitter_user_id}} = getState().profile;
        fetch(`${API_HOST}/twitter_tweet_replies?twitter_user_id=${twitter_user_id}&_token=${token}`)
          .then(response => {
            if(response.status >= 400) {
              throw new Error(response.statusText || 'Internal server error');
            }
            return response.json();
          })
          .then(result => {
            console.log('THIS IS RESULT', result);
            if (result.status === 0 && result.message) {
              dispatch({
                type: LOAD_FAIL,
                error: result.message
              });
              return resolve();
            }
            dispatch({ type: LOAD_MENTIONS, result: result.message });
            return resolve(result.message);
          })
          .catch(error => {
            toastr.error(error);
            dispatch({ type: LOAD_FAIL, error });
            reject(error);
          });
      })
      .catch(error => {
        toastr.error(error);
      });
  });
}

export function fetchTwitterTweets() {
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    dispatch(resetErrors());
    dispatch({ type: LOAD });

    dispatch(fetchTwitterUser())
      .then(data => {
        const {twitterUser: {twitter_user_id}} = getState().profile;
        fetch(`${API_HOST}/twitter_tweets?twitter_screen_name=${twitter_screen_name}&_token=${token}`)
          .then(response => {
            if(response.status >= 400) {
              throw new Error(response.statusText || 'Internal server error');
            }
            return response.json();
          })
          .then(result => {
            console.log('THIS IS RESULT', result);
            if (result.status === 0 && result.message) {
              dispatch({
                type: LOAD_FAIL,
                error: result.message
              });
              return resolve();
            }
            dispatch({ type: LOAD_MENTIONS, result: result.message });
            return resolve(result.message);
          })
          .catch(error => {
            toastr.error(error);
            dispatch({ type: LOAD_FAIL, error });
            reject(error);
          });
      })
      .catch(error => {
        toastr.error(error);
      });
  });
}

export function fetchTwitterMentions() {
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    dispatch(resetErrors());
    dispatch({ type: LOAD });

    dispatch(fetchTwitterUser())
      .then(data => {
        const {twitterUser: {twitter_user_id}} = getState().profile;
        fetch(`${API_HOST}/twitter_tweet_user_mentions?twitter_screen_name=${twitter_screen_name}&_token=${token}`)
          .then(response => {
            if(response.status >= 400) {
              throw new Error(response.statusText || 'Internal server error');
            }
            return response.json();
          })
          .then(result => {
            console.log('THIS IS RESULT', result);
            if (result.status === 0 && result.message) {
              dispatch({
                type: LOAD_FAIL,
                error: result.message
              });
              return resolve();
            }
            dispatch({ type: LOAD_MENTIONS, result: result.message });
            return resolve(result.message);
          })
          .catch(error => {
            toastr.error(error);
            dispatch({ type: LOAD_FAIL, error });
            reject(error);
          });
      })
      .catch(error => {
        toastr.error(error);
      });
  });
}

export function fetchMentions() {
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    dispatch(resetErrors());
    dispatch({ type: LOAD });

    dispatch(fetchTwitterUser())
      .then(data => {
        const {twitterUser: {twitter_user_id}} = getState().profile;
        fetch(`${API_HOST}/twitter_tweet_user_mentions?twitter_screen_name=${twitter_screen_name}&_token=${token}`)
          .then(response => {
            if(response.status >= 400) {
              throw new Error(response.statusText || 'Internal server error');
            }
            return response.json();
          })
          .then(result => {
            console.log('THIS IS RESULT', result);
            if (result.status === 0 && result.message) {
              dispatch({
                type: LOAD_FAIL,
                error: result.message
              });
              return resolve();
            }
            dispatch({ type: LOAD_MENTIONS, result: result.message });
            return resolve(result.message);
          })
          .catch(error => {
            toastr.error(error);
            dispatch({ type: LOAD_FAIL, error });
            reject(error);
          });
      })
      .catch(error => {
        toastr.error(error);
      });
  });
}
