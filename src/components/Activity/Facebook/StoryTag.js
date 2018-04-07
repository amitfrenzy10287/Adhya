import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {fetchFacebookStoryTags} from '../../../reducers/activity';
import TweetText from '../../Mention/TweetText';

@connect(state => ({
  activity: state.activity
}))

export default class StoryTag extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func,
      activity: PropTypes.activity
    };
  }

  componentWillMount() {
    const {dispatch} = this.props;
    //dispatch(fetchFacebookStoryTags());
  }

  render() {
    const {facebookStoryTags} = this.props.activity;
    return(
      <div className="body-box col-md-12">
          <div className="tweetBody">
            {facebookStoryTags && facebookStoryTags.map((i, key)=> <TweetText key={key} {...i} facebook={1} />)}
          </div>
      </div>
    );
  }
}
