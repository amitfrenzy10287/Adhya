import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {fetchTwitterRepliesGot} from '../../reducers/activity';
import TweetText from '../Mention/TweetText';

@connect(state => ({
  activity: state.activity
}))

export default class RepliesGot extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func,
      activity: PropTypes.object
    };
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchTwitterRepliesGot());
  }

  render() {
    const {twitterRepliesGot} = this.props.activity;
    console.log("twitterRepliesGot:",twitterRepliesGot);

    return(
      <div className="body-box col-lg-12">
        <div className="tweetBody">
              {twitterRepliesGot && twitterRepliesGot.map((i, key)=> <TweetText key={key} {...i}/>)}
        </div>
      </div>
    );
  }
}
