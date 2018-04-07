import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {fetchFacebookEngage} from '../../../reducers/activity';
import TweetText from '../../Mention/TweetText';
import EngageUi from '../EngageUi';

@connect(state => ({
  activity: state.activity
}))

export default class EngageBy extends Component {

  static get propTypes() {
    return {
      dispatch: PropTypes.func,
      activity: PropTypes.object
    };
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchFacebookEngage());
  }

  render() {
    const {facebookEnagage} = this.props.activity;
    return(
      <div className="body-box col-md-12">
          <div className="tweetBody">
            {facebookEnagage && facebookEnagage.map((i, key) => <EngageUi key={key} {...i} />)}
          </div>
      </div>
    );
  }
}
