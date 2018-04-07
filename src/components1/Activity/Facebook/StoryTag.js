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
      dispatch: PropTypes.func
    };
  }

  componentWillMount() {
    const {dispatch} = this.props;
    //dispatch(fetchFacebookStoryTags());
  }

  render() {
    const {facebookStoryTags} = this.props.activity;
    return(
      <div className="col-lg-10 col-md-8  content-right ml-2">
      {facebookStoryTags && facebookStoryTags.map((i, key)=> <TweetText key={key} {...i} facebook={true} />) }
      </div>
    );
  }
}
