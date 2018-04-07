import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import { ActivityTab, ActivityFilter } from '../../components/Activity';
import {fetchTwitterUser} from '../../reducers/profile';
import ScrollArea from 'react-scrollbar';

@connect(state => ({
  profile: state.profile
}))

export default class Profile extends Component {

  static get propTypes() {
    return {
      dispatch: PropTypes.func,
      location: PropTypes.object,
      children: PropTypes.node,
      profile: PropTypes.object
    };
  }

  componentWillMount() {
    const {dispatch} = this.props;
    this.dispatch = dispatch;
  }

  handleClick = (e) => {
    const {dispatch} = this.props;
    dispatch(push(`/activity/${e.target.value}`));
  }

  render() {
    const {twitterUser} = this.props.profile;
    const {pathname} = this.props.location;
    return(
      <div className="row col-md-12">

            <div className="col-lg-2 menu-box">
              
                  
                <ActivityFilter handleClick={this.handleClick}/>
                  
              
            </div>

          <div className="col-md-9 content-right border-box">
            <div className="row">
              {this.props.children}
            </div>
          </div>
      </div>
    );
  }
}
