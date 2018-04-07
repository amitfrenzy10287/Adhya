import React, {Component} from 'react';
import d3 from 'd3';
import dc from 'dc';
import crossfilter from 'crossfilter';
import {BarChart} from 'react-dc';

export default class BarChartReact extends Component {
  componentDidMount() {
    const {chartData} = this.props;
    this.chart = dc.barChart("#barchart");
  }

  calc_domain = (chart) => {
    var min = d3.min(chart.group().all(), function(kv) {
      console.log(kv);
       return kv.key; }),
        max = d3.max(chart.group().all(), function(kv) { return kv.key; });
    max = d3.time.month.offset(max, 1);
    chart.x().domain([min, max]);
  }

  render() {
    const {chartData} = this.props;
    if(chartData && chartData.length) {
      const data = crossfilter(chartData)
      const dimension = data.dimension(record => record.date)
      const group = dimension.group().reduceSum(record => record.follower_lifetime)
      this.chart
      .dimension(dimension)
      .group(group)
      .renderLabel(true)
      .elasticY(true)
      .x(d3.scale.ordinal())
      .xUnits(dc.units.ordinal)
      this.chart.render();
    }

    return(
      <div id="barchart" />
    );
  }
}
