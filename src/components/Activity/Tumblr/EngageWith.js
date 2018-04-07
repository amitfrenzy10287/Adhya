import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {fetchTumblrEngageWith} from '../../../reducers/activity';
import EngageUi from '../EngageUi';

@connect(state => ({
  activity: state.activity
}))

export default class EngageWith extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func,
      activity: PropTypes.object
    };
  }

  componentWillMount() {
    const {dispatch} = this.props;
    //dispatch(fetchTumblrEngageWith());
  }

  render() {
    const {tumblrEngagewiths} = this.props.activity;
    return(
      <div className="col-lg-10 col-md-8  content-right ml-2">
        {tumblrEngagewiths && tumblrEngagewiths.map((i, key) => <EngageUi key={key} {...i} />)}
      </div>
    );
  }
}
