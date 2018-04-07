import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {fetchTwitterEngages} from '../../reducers/activity';
import EngageLink from '../common/EngageLink';

@connect(state => ({
  activity: state.activity
}))

export default class Engage extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func
    };
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchTwitterEngages());
  }

  render() {
    const {twitterEngages} = this.props.activity;
    return(
      <div className="col-lg-10 col-md-8  content-right ml-2">
      {twitterEngages && twitterEngages.map((i, key)=> <EngageLink key={key} {...i}/>) }
      </div>
    );
  }
}
