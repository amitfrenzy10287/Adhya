import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {fetchTumblrHashTag} from '../../../reducers/activity';
import HashTag from '../HashTag';

@connect(state => ({
  activity: state.activity
}))

export default class TumblrHashTag extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func
    };
  }

  componentWillMount() {
    const {dispatch} = this.props;
    //dispatch(fetchTumblrHashTag());
  }

  render() {
    const {tumblrHashTag} = this.props.activity;
    return(
      <div className="col-lg-10 col-md-8  content-right ml-2">
        {tumblrHashTag && tumblrHashTag.map((i, key) => <HashTag key={key} {...i}/> )}
      </div>
    );
  }
}
