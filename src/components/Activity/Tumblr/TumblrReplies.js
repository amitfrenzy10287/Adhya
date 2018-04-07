import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {fetchTumblrReplies} from '../../../reducers/activity';
import TweetText from '../../Mention/TweetText';

@connect(state => ({
  activity: state.activity
}))

export default class TumblrReplies extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func,
      activity: PropTypes.object
    };
  }

  componentWillMount() {
    const {dispatch} = this.props;
    //dispatch(fetchTumblrReplies());
  }

  render() {
    const {tumblrReplies} = this.props.activity;
    return(
      <div className="col-lg-10 col-md-8  content-right ml-2">
        {tumblrReplies && tumblrReplies.map((i, key)=> <TweetText key={key} {...i} facebook={1} />)}
      </div>
    );
  }
}
