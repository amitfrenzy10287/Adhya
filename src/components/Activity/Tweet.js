import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {fetchTwitterTweets} from '../../reducers/activity';
import TweetText from '../Mention/TweetText';

@connect(state => ({
  activity: state.activity
}))

export default class Tweets extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func,
      activity: PropTypes.object
    };
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchTwitterTweets());
  }

  render() {
    const {tweets} = this.props.activity;
    return(
      <div className="body-box col-md-12">
        <div className="tweetBody">
              {tweets && tweets.map((i, key)=> <TweetText key={key} {...i}/>)}
        </div>
      </div>
    );
  }
}
