import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {fetchFacebookComments} from '../../../reducers/activity';
import TweetText from '../../Mention/TweetText';

@connect(state => ({
  activity: state.activity
}))

export default class ReplyComment extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func,
      activity: PropTypes.object
    };
  }

  componentWillMount() {
    const {dispatch} = this.props;
    //dispatch(fetchFacebookComments());
  }

  render() {
    const {facebookComments} = this.props.activity;
    return(
      <div className="body-box col-md-12">
          <div className="tweetBody">
        {facebookComments && facebookComments.map((i, key)=> <TweetText key={key} {...i} facebook={1} />)}
      </div>
      </div>
    );
  }
}
