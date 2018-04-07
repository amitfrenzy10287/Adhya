import React, {Component} from 'react';
import d3 from 'd3';
import dc from 'dc';
import crossfilter from 'crossfilter';
import {PieChart} from 'react-dc';


export default class PieChartReact extends Component {
  componentDidMount() {
    const {chartData} = this.props;
    this.chart = dc.pieChart("#piechart");
  }

  render() {
    const {chartData} = this.props;
    if(chartData && chartData.length) {
      const data = crossfilter(chartData)
      const dimension = data.dimension(record => {
        if(record.metric == "Follower") {
          return 'Follower';
        } else {
          return 'Following';
        }
      })
      const group = dimension.group().reduceSum(record => {
        console.log("record", record)
        if(record.metric == "Following") {
          console.log(record.followings);
          return record.followings;
        } else if(record.metric == "Follower") {
          //console.log("followings");
          return record.followers;
        }

      })
      this.chart
      .dimension(dimension)
      .group(group)
      this.chart.render();
    }

    return(
      <div id="piechart" />
    );
  }
}
