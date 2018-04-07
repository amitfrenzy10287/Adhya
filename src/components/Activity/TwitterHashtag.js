import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {fetchTwitterHashtags} from '../../reducers/activity';
import TweetText from '../Mention/TweetText';

@connect(state => ({
  activity: state.activity
}))

export default class TwitterHashtag extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func,
      activity: PropTypes.object
    };
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchTwitterHashtags());
  }

  render() {
    const {hashTags} = this.props.activity;
    return(
      <div className="body-box col-lg-12">
        <div className="tweetBody">
            {hashTags && hashTags.map((i, key)=> <TweetText key={key} {...i}/>)}
        </div>
      </div>
    );
  }
}
