import React, { Component } from 'react';
import { ChartFilter, ChartCompare, ChartRenderOption } from '../../components/Chart';

export default class Chart extends Component {
  render() {
    return(
      <div className="row">
          <div className="col-lg-2 col-md-6  text-left content-left">
            <div className="LeftMenu rounded p-2">
              <ChartFilter />
            </div>
          </div>
          <div className="col-lg-8 col-md-6  content-right ml-2">
            <div className="LeftMenu bg-faded">
              <div className="row chart-compare content-center">
                <ChartCompare />
              </div>

              <div className="row">
                <ChartRenderOption />
              </div>

              <div className="row mt-3">
                <div className="col-lg-12 col-md-12 border-gray">
                  <img src="http://blog.timmonsandcompany.com/wp-content/uploads/2013/05/Lead-Generation-Lessons-From-4000-Businesses-19.gif" className="image"/>
                </div>
              </div>

            </div>
          </div>
      </div>
    );
  }
}
