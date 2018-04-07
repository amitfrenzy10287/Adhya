import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {fetchTwitterEngages} from '../../reducers/activity';
import EngageLink from '../common/EngageLink';
import DonutChart from '../Charts/DonutChart';
import EmotionChart from '../Charts/EmotionChart';
import SentimentsChart from '../Charts/SentimentsChart';
import bgblue from '../../assets/images/bg_image.png';


@connect(state => ({
  activity: state.activity
}))

export default class Engage extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func,
      activity: PropTypes.object
    };
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchTwitterEngages());
  }

  render() {
    const {twitterEngages} = this.props.activity;
    return(
      <div className="body-box mention_margin_top col-md-12">
          <div className="innerChart">
          <div className="EngageProfile">
              <p><strong>NarendraModi</strong><br/>
              <small>@narendramodi</small></p>
          </div>
          <div className="banner-top banner-chart" style={{backgroundImage: `url(${bgblue})`,backgroundRepeat:"repeat"}}></div>
            <div className="header-top chartTop">
              <div className="row padd-top-10 col-md-12">
            
                <div className="col-md-4">
                    <strong>30,000</strong><br/>
                    <small>TWEETS</small>
                </div> 
                <div className="col-md-4">
                    <strong>7,131</strong><br/>
                    <small>FOLLOWERS</small>
                </div>
                <div className="col-md-4">
                    <strong>45,000</strong><br/>
                    <small>FOLLOWINGS</small>
                </div> 
          </div>  
        </div>
            <div className="allCharts">
                <DonutChart/>
                <EmotionChart/>
                <SentimentsChart/>
            </div>
          </div>
      </div>
    );
  }
}
