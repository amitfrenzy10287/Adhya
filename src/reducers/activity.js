import {API_HOST, token, twitter_screen_name, API_HOST_SP} from '../config';
import {push} from 'react-router-redux';
import toastr from 'toastr';
import {fetchTwitterUser} from './profile';
const LOAD = 'mention/LOAD';
const LOAD_FAIL = 'mention/LOAD_FAIL';
const RESET_ERRORS = 'mention/RESET_ERRORS';
const LOAD_MENTIONS = 'activity/LOAD_MENTIONS';
const LOAD_TWEET = 'activity/LOAD_TWEET';
const LOAD_TWITTER_HASH_TAG = 'activity/LOAD_TWITTER_HASH_TAG';
const LOAD_TWITTER_ENGAGE = 'activity/LOAD_TWITTER_ENGAGE';
const LOAD_TWITTER_REPLIES_GOT = 'activity/LOAD_TWITTER_REPLIES_GOT';
const LOAD_POSTS = 'activity/LOAD_POSTS';
const LOAD_FACEBOOK_ENGAGE_BY = 'activity/LOAD_FACEBOOK_ENGAGE_BY';
const LOAD_FACEBOOK_COMMENTS = 'activity/LOAD_FACEBOOK_COMMENTS';
const LOAD_FACEBOOK_STORY_TAG = 'activity/LOAD_FACEBOOK_STORY_TAG';
const LOAD_TUMBLR_POSTS = 'activity/LOAD_TUMBLR_POSTS';
const LOAD_TUMBLR_ENGAGE_WITH = 'activity/LOAD_TUMBLR_ENGAGE_WITH';
const LOAD_TUMBLR_REPLIES = 'activity/LOAD_TUMBLR_REPLIES';
const LOAD_TUMBLR_HASH_TAG = 'activity/LOAD_TUMBLR_HASH_TAG';
const initialState = {
  loading: false,
  errors: {},
  mentions: [],
  tweets: [],
  hashTags: [],
  twitterEngages: [],
  twitterRepliesGot: [],
  posts: [],
  facebookEnagage: [
    {"facebook_engaged_users":"Bobby Phillaurwala"},{"facebook_engaged_users":"Laxmi Narayan Dixit"},{"facebook_engaged_users":"Lalita Mogla"},{"facebook_engaged_users":"Sunil Khoje"},{"facebook_engaged_users":"Dinesh H Bunker"},{"facebook_engaged_users":"Vishal Kumbhar"},{"facebook_engaged_users":"Prince Sathish Singh"},{"facebook_engaged_users":"Rahul Prakash Tiwari"},{"facebook_engaged_users":"Dil Nawaz"},{"facebook_engaged_users":"Lata Vasvani"},{"facebook_engaged_users":"Sohan Patel"},{"facebook_engaged_users":"Vaishali Shah Phanse"},{"facebook_engaged_users":"Natushih Thakor"},{"facebook_engaged_users":"Ram Bhargava"},{"facebook_engaged_users":"Chhoker Shab"},{"facebook_engaged_users":"Nem Singh Daksh"}],
   facebookComments: [{
			"comment_message": "idiotiv",
			"facebook_handle": "narendramodi",
			"like_count": "58124",
			"love_count": "1785",
			"haha_count": "179",
			"wow_count": "845",
			"sad_count": "4",
			"angry_count": "43",
			"comment_count": "1622",
			"share_count": "6385",
			"sentiment": "neutral"
		},
		{
			"comment_message": "Villas gando thyo",
			"facebook_handle": "narendramodi",
			"like_count": "58124",
			"love_count": "1785",
			"haha_count": "179",
			"wow_count": "845",
			"sad_count": "4",
			"angry_count": "43",
			"comment_count": "1622",
			"share_count": "6385",
			"sentiment": "neutral"
		},
		{
			"comment_message": "Keep it up Sirji",
			"facebook_handle": "narendramodi",
			"like_count": "58124",
			"love_count": "1785",
			"haha_count": "179",
			"wow_count": "845",
			"sad_count": "4",
			"angry_count": "43",
			"comment_count": "1622",
			"share_count": "6385",
			"sentiment": "neutral"
		},
		{
			"comment_message": "GOOD",
			"facebook_handle": "narendramodi",
			"like_count": "58124",
			"love_count": "1785",
			"haha_count": "179",
			"wow_count": "845",
			"sad_count": "4",
			"angry_count": "43",
			"comment_count": "1622",
			"share_count": "6385",
			"sentiment": "neutral"
		}],
    facebookStoryTags: [
      {
           "story_tag_name": "Narendra Modi",
           "message": "Stunning glimpses of the Akshardham Temple...next time you are in Gujarat, do visit.",
           "story": "Narendra Modi added 4 new photos.",
           "like_count": "54724",
           "love_count": "1545",
           "haha_count": "26",
           "wow_count": "877",
           "sad_count": "3",
           "angry_count": "11",
           "comment_count": "616",
           "share_count": "2449",
           "sentiment": "positive"
       },
       {
            "story_tag_name": "Narendra Modi",
            "message": "Delighted to attend the 25th anniversary celebrations at Gandhinagar's iconic Akshardham Temple. Here is my speech.",
            "story": "Narendra Modi was live.",
            "like_count": "46577",
            "love_count": "8168",
            "haha_count": "331",
            "wow_count": "404",
            "sad_count": "104",
            "angry_count": "221",
            "comment_count": "10740",
            "share_count": "3372",
            "sentiment": "positive"
        },
        {
            "story_tag_name": "Narendra Modi",
            "message": "Interacted with officer trainees of the 92nd Foundation Course at the Lal Bahadur Shastri National Academy of Administration in Mussoorie. \n\nWe had good discussions on administration, good governance, technology and policy-making. \nhttp://nm-4.com/72k5",
            "story": "Narendra Modi added 3 new photos.",
            "like_count": "54868",
            "love_count": "833",
            "haha_count": "35",
            "wow_count": "190",
            "sad_count": "6",
            "angry_count": "21",
            "comment_count": "529",
            "share_count": "1576",
            "sentiment": "neutral"
        }
    ],
    tumblrPosts: [
      {
           "post_url": "https://csapda.tumblr.com/post/167551926963/mór-ti-jöttök-jegyek-itt",
           "post_title": "MÓR, ti jöttök! Jegyek ITT.",
           "post_author_name": "",
           "post_type": "photo",
           "note_count": "0",
           "publisher": ""
       },
       {
            "post_url": "https://csapda.tumblr.com/post/167454866253/dunakeszi-köszönjük-ez-erős-volt-folytatás",
            "post_title": "Dunakeszi, köszönjük! Ez erős volt. Folytatás: 1117 Mór 1118 Salgótarján 1123 Kolozsvár, Románia 1124 Marosvásárhely, Románia...",
            "post_author_name": "",
            "post_type": "photo",
            "note_count": "2",
            "publisher": ""
        }
    ],
    tumblrEngagewiths: [
        {
            "tumblr_engaged_users": "sharmilabhatt"
        },
        {
            "tumblr_engaged_users": "csagnik"
        },
        {
            "tumblr_engaged_users": "beenab"
        },
        {
            "tumblr_engaged_users": "puneetjpr"
        },
        {
            "tumblr_engaged_users": "chh810"
        }
    ],
    tumblrReplies: [
      {
            "reply_text": "I am coming one Sunday soon",
            "reply_user_name": "uparekh71",
            "reply_parent_post_url": "http://srbachchan.tumblr.com/post/169726353641",
            "reply_parent_post_title": "DAY 3583",
            "reply_parent_post_note_count": "96",
            "post_image_url": null,
            "photo_caption": null
        },
        {
            "reply_text": "Ethics being nicely defined 💝",
            "reply_user_name": "uttamkr",
            "reply_parent_post_url": "http://srbachchan.tumblr.com/post/169726353641",
            "reply_parent_post_title": "DAY 3583",
            "reply_parent_post_note_count": "96",
            "post_image_url": null,
            "photo_caption": null
        }
    ],
    tumblrHashTag: [
      {
            "hashtags_metric": "ausveng",
            "count": "1"
        },
        {
            "hashtags_metric": "nzvpak",
            "count": "1"
        },
        {
            "hashtags_metric": "cricket",
            "count": "2"
        }
    ]
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
    case LOAD_TWEET:
      return {...state, loading: false, tweets: action.result};
    case LOAD_TWITTER_HASH_TAG:
      return {...state, loading: false, hashTags: action.result};
    case LOAD_TWITTER_ENGAGE:
      return {...state, loading: false, twitterEngages: action.result};
    case LOAD_TWITTER_REPLIES_GOT:
      return {...state, loading: false, twitterRepliesGot: action.result};
    case LOAD_POSTS:
      return {...state, loading: false, posts: action.result};
    case LOAD_FACEBOOK_ENGAGE_BY:
      return {...state, loading: false, facebookEnagage: action.result};
    case LOAD_FACEBOOK_COMMENTS:
      return {...state, loading: false, facebookComments: action.result};
    case LOAD_FACEBOOK_STORY_TAG:
      return {...state, loading: false, facebookStoryTags: action.result};
    case LOAD_TUMBLR_POSTS:
      return {...state, loading: false, tumblrPosts: action.result};
    case LOAD_TUMBLR_ENGAGE_WITH:
      return {...state, loading: false, tumblrEngagewiths: action.result};
    case LOAD_TUMBLR_REPLIES:
      return {...state, loading: false, tumblrReplies: action.result};
    case LOAD_TUMBLR_HASH_TAG:
      return {...state, loading: false, tumblrHashTag: action.result};
    default:
      return state;
  }
}

export function resetErrors() {
  return dispatch => dispatch({ type: RESET_ERRORS });
}

export function fetchTumblrHashTag() {
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    dispatch(resetErrors());
    dispatch({ type: LOAD });
    const myInit = { method: 'GET',
                   mode: 'no-cors',
                   cache: 'default',
                   headers: {
                    'content-type': 'application/json'
                  }
                };

    fetch(`${API_HOST_SP}/tumblr_user_hashtags?tumblr_screen_name=${twitter_screen_name}&_token=${token}`, myInit)
      .then(response => {
        if(response.status >= 400) {
          throw new Error(response.statusText || 'Internal server error');
        }
        return response.json();
      })
      .then(result => {
        console.log("result", result);
        if (result.status === 0 && result.message) {
          dispatch({
            type: LOAD_FAIL,
            error: result.message
          });
          return resolve();
        }
        dispatch({ type: LOAD_TUMBLR_HASH_TAG, result: result.message});
        return resolve(result.message);
      })
      .catch(error => {
        toastr.error(error);
        dispatch({ type: LOAD_FAIL, error });
        reject(error);
      });
  });
}

export function fetchTumblrReplies() {
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    dispatch(resetErrors());
    dispatch({ type: LOAD });
    const myInit = { method: 'GET',
                   mode: 'no-cors',
                   cache: 'default',
                   headers: {
                    'content-type': 'application/json'
                  }
                };

    fetch(`${API_HOST_SP}/tumblr_user_got_replies?tumblr_screen_name=${twitter_screen_name}&_token=${token}`, myInit)
      .then(response => {
        if(response.status >= 400) {
          throw new Error(response.statusText || 'Internal server error');
        }
        return response.json();
      })
      .then(result => {
        console.log("result", result);
        if (result.status === 0 && result.message) {
          dispatch({
            type: LOAD_FAIL,
            error: result.message
          });
          return resolve();
        }
        dispatch({ type: LOAD_TUMBLR_REPLIES, result: result.message});
        return resolve(result.message);
      })
      .catch(error => {
        toastr.error(error);
        dispatch({ type: LOAD_FAIL, error });
        reject(error);
      });
  });
}

export function fetchTumblrEngageWith() {
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    dispatch(resetErrors());
    dispatch({ type: LOAD });
    const myInit = { method: 'GET',
                   mode: 'no-cors',
                   cache: 'default',
                   headers: {
                    'content-type': 'application/json'
                  }
                };

    fetch(`${API_HOST_SP}/tumblr_user_engaged_with?tumblr_screen_name=${twitter_screen_name}&_token=${token}`, myInit)
      .then(response => {
        if(response.status >= 400) {
          throw new Error(response.statusText || 'Internal server error');
        }
        return response.json();
      })
      .then(result => {
        console.log("result", result);
        if (result.status === 0 && result.message) {
          dispatch({
            type: LOAD_FAIL,
            error: result.message
          });
          return resolve();
        }
        dispatch({ type: LOAD_TUMBLR_ENGAGE_WITH, result: result.message});
        return resolve(result.message);
      })
      .catch(error => {
        toastr.error(error);
        dispatch({ type: LOAD_FAIL, error });
        reject(error);
      });
  });
}

export function fetchTumblrPosts() {
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    dispatch(resetErrors());
    dispatch({ type: LOAD });
    const myInit = { method: 'GET',
                   mode: 'no-cors',
                   cache: 'default',
                   headers: {
                    'content-type': 'application/json'
                  }
                };

    fetch(`${API_HOST_SP}/tumblr_user_posts?tumblr_screen_name=${twitter_screen_name}&_token=${token}`, myInit)
      .then(response => {
        if(response.status >= 400) {
          throw new Error(response.statusText || 'Internal server error');
        }
        return response.json();
      })
      .then(result => {
        console.log("result", result);
        if (result.status === 0 && result.message) {
          dispatch({
            type: LOAD_FAIL,
            error: result.message
          });
          return resolve();
        }
        dispatch({ type: LOAD_TUMBLR_POSTS, result: result.message});
        return resolve(result.message);
      })
      .catch(error => {
        toastr.error(error);
        dispatch({ type: LOAD_FAIL, error });
        reject(error);
      });
  });
}

export function fetchFacebookStoryTags() {
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    dispatch(resetErrors());
    dispatch({ type: LOAD });
    const myInit = { method: 'GET',
                   mode: 'no-cors'
                };

    fetch(`${API_HOST_SP}/facebook_user_storytags?facebook_screen_name=${twitter_screen_name}&_token=${token}`, myInit)
      .then(response => {
        if(response.status >= 400) {
          throw new Error(response.statusText || 'Internal server error');
        }
        return response.json();
      })
      .then(result => {
        console.log("result", result);
        if (result.status === 0 && result.message) {
          dispatch({
            type: LOAD_FAIL,
            error: result.message
          });
          return resolve();
        }
        dispatch({ type: LOAD_FACEBOOK_STORY_TAG, result: result.message});
        return resolve(result.message);
      })
      .catch(error => {
        toastr.error(error);
        dispatch({ type: LOAD_FAIL, error });
        reject(error);
      });
  });
}

export function fetchFacebookComments() {
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    dispatch(resetErrors());
    dispatch({ type: LOAD });
    const myInit = { method: 'GET',
                   mode: 'no-cors',
                   cache: 'default',
                   headers: {
                    'content-type': 'application/json'
                  }
                };

    fetch(`${API_HOST_SP}/facebook_comments?facebook_screen_name=${twitter_screen_name}&_token=${token}`, myInit)
      .then(response => {
        if(response.status >= 400) {
          throw new Error(response.statusText || 'Internal server error');
        }
        return response.json();
      })
      .then(result => {
        console.log("result", result);
        if (result.status === 0 && result.message) {
          dispatch({
            type: LOAD_FAIL,
            error: result.message
          });
          return resolve();
        }
        dispatch({ type: LOAD_FACEBOOK_COMMENTS, result: result.message});
        return resolve(result.message);
      })
      .catch(error => {
        toastr.error(error);
        dispatch({ type: LOAD_FAIL, error });
        reject(error);
      });
  });
}

export function fetchFacebookEngage() {
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    dispatch(resetErrors());
    dispatch({ type: LOAD });
    const myInit = { method: 'GET',
                   mode: 'no-cors',
                   cache: 'default',
                   headers: {
                    'content-type': 'application/json'
                  }
                };

    fetch(`${API_HOST_SP}/facebook_user_engaged_by?facebook_screen_name=${twitter_screen_name}&_token=${token}`)
      .then(response => {
        if(response.status >= 400) {
          throw new Error(response.statusText || 'Internal server error');
        }
        return response.json();
      })
      .then(result => {
        console.log("facebook engage result", result);
        if (result.status === 0 && result.message) {
          dispatch({
            type: LOAD_FAIL,
            error: result.message
          });
          return resolve();
        }
        dispatch({ type: LOAD_FACEBOOK_ENGAGE_BY, result: result.message});
        return resolve(result.message);
      })
      .catch(error => {
        toastr.error(error);
        dispatch({ type: LOAD_FAIL, error });
        reject(error);
      });
  });
}

export function fetchTwitterRepliesGot() {
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    dispatch(resetErrors());
    dispatch({ type: LOAD });
    const myInit = { method: 'GET',
                   mode: 'no-cors',
                   cache: 'default',
                   headers: {
                    'content-type': 'application/json'
                  }
                };

    fetch(`${API_HOST_SP}/twitter_tweet_replies_got?twitter_screen_name=${twitter_screen_name}&_token=${token}`)
      .then(response => {
        if(response.status >= 400) {
          throw new Error(response.statusText || 'Internal server error');
        }
        return response.json();
      })
      .then(result => {
        console.log("This is Result:", result);
        if (result.status === 0 && result.message) {
          dispatch({
            type: LOAD_FAIL,
            error: result.message
          });
          return resolve();
        }
        console.log("result.message:", result.message);
        const msg = result.message;
        dispatch({ type: LOAD_TWITTER_REPLIES_GOT, result: msg });
        return resolve(msg);
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
        dispatch({ type: LOAD_POSTS, result: result.message });
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

export function fetchTwitterEngages() {
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    dispatch(resetErrors());
    dispatch({ type: LOAD });
    fetch(`${API_HOST}/twitter_user_engaging_with_user?twitter_screen_name=${twitter_screen_name}&_token=${token}`)
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
          return resolve();
        }
        dispatch({ type: LOAD_TWITTER_ENGAGE, result: result.message });
        return resolve(result.message);
      })
      .catch(error => {
        toastr.error(error);
        dispatch({ type: LOAD_FAIL, error });
        reject(error);
      });
  });
}

export function fetchTwitterHashtags() {
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    dispatch(resetErrors());
    dispatch({ type: LOAD });
    fetch(`${API_HOST}/twitter_user_hashtags?twitter_screen_name=${twitter_screen_name}&_token=${token}`)
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
          return resolve();
        }
        dispatch({ type: LOAD_TWITTER_HASH_TAG, result: result.message });
        return resolve(result.message);
      })
      .catch(error => {
        console.log('THIS IS ERROR', error);
        toastr.error(error);
        dispatch({ type: LOAD_FAIL, error });
        reject(error);
      });
  });
}

export function fetchTwitterTweets() {
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    dispatch(resetErrors());
    dispatch({ type: LOAD });
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
        dispatch({ type: LOAD_TWEET, result: result.message });
        return resolve(result.message);
      })
      .catch(error => {
        toastr.error(error);
        dispatch({ type: LOAD_FAIL, error });
        reject(error);
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
