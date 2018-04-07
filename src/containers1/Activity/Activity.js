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
      twitterUser: PropTypes.object
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
      <div className="row">

              <div className="col-lg-2 col-md-3  text-left content-left">
              <ScrollArea
                speed={0.8}>
                  <div className="LeftMenu rounded p-2">
                    <ActivityFilter handleClick={this.handleClick}/>
                  </div>
                </ScrollArea>
            </div>

          <div className="col-lg-10 col-md-9  content-right">
            <div className="row">
              {this.props.children}
            </div>
          </div>
      </div>
    );
  }
}
