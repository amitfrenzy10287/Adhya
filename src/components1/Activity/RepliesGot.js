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
      dispatch: PropTypes.func
    };
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchTwitterRepliesGot());
  }

  render() {
    const {twitterRepliesGot} = this.props.activity;
    return(
      <div className="col-lg-10 col-md-8  content-right ml-2">
      {twitterRepliesGot && twitterRepliesGot.map((i, key)=> <TweetText key={key} {...i}/>) }
      </div>
    );
  }
}
