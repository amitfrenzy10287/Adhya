import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import moment from 'moment';
import { ProfileDetail, SocialCount, ProfileTab } from '../../components/Profile';
import {fetchTwitterUser} from '../../reducers/profile';
import {Line} from 'react-chartjs-2';
import ProfileChart from '../../components/Charts/ProfileChart';
import ScrollArea from 'react-scrollbar';
import PieChart from '../../components/Charts/PieChart';
import MyChart from '../../components/Charts/MyChart';

@connect(state => ({
  profile: state.profile
}))

export default class Profile extends Component {

  static get propTypes() {
    return {
      dispatch: PropTypes.func,
      twitterUser: PropTypes.object,
      profile: PropTypes.object,
      pathname: PropTypes.string,
      children: PropTypes.node
    };
  }

  componentWillMount() {
    const {dispatch} = this.props;
    this.dispatch = dispatch;
    this.dispatch(fetchTwitterUser({twitter_screen_name: 'narendramodi'}));
  }

  render() {
    const {twitterUser, twitterUserData: {data, pieChartData, barChartData}} = this.props.profile;
    const {pathname} = this.props;
    return(
      <div className="row">

              <div className="col-lg-3 col-md-6  text-left content-left">
              <ScrollArea
                speed={0.8}>
                  <div className="LeftMenu rounded p-2">
                    <ProfileDetail />
                  </div>
                </ScrollArea>
            </div>

          <div className="col-lg-9 col-md-6  content-right">
            <div className="LeftMenu bg-faded">
              <SocialCount twitterUser={twitterUser}/>

              <div className="row mt-3">
                <div className="col-lg-5 col-md-6">
                  <strong>MEDIA POWER RANK (1 PEER)</strong>
                  <PieChart chartData={pieChartData}/>
                </div>

                <div className="col-lg-7 col-md-6">
                  <strong>SOCIAL MEDIA FANS (7 DAYS)</strong>
                  <ProfileChart chartData={barChartData}/>
                </div>

              </div>
              <div className="row mt-3">
                <strong>Chart DC</strong>
                <MyChart chartdata={barChartData}/>
              </div>

            </div>

            <div className="row profile-tab">
            </div>
              {this.props.children}
          </div>
      </div>
    );
  }
}
