import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {fetchFacebookPosts} from '../../../reducers/activity';
import TweetText from '../../Mention/TweetText';

@connect(state => ({
  activity: state.activity
}))

export default class Post extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func,
      activity: PropTypes.object
    };
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchFacebookPosts());
  }

  render() {
    const {posts} = this.props.activity;
    return(
      <div className="body-box col-md-12">
          <div className="tweetBody">
              {posts && posts.map((i, key)=> <TweetText key={key} {...i} facebook={1} />)}
          </div>
      </div>
    );
  }
}
