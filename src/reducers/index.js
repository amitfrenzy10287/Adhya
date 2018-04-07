import {combineReducers} from 'redux';
import profile from './profile';
import auth from './auth';
import mention from './mention';
import activity from './activity';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  auth,
  profile,
  mention,
  activity
});

export default rootReducer;
