import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import d3 from 'd3';
import dc from 'dc'; 
import crossfilter from 'crossfilter';
import {BarChart, PieChart, LineChart,DonutChart } from 'react-dc';


class MyChart extends Component{
	
	componentDidMount() {

	    const {chartData} = this.props; 
	    this.chart = dc.pieChart("#piechart");
	}

	render()
	{ 
		//const data = this.props;
		
		const records = [{x: 0, y: 1}, {x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 1}, {x: 4, y: 2}];
		const data = crossfilter(records);
		const dimension = data.dimension(record => record.x);
		const group = dimension.group().reduceSum(record => record.y);

		return(
			<div className="row engage_by_div"> 
				<div className="col-md-3 panel panel-default">
					<DonutChart  dimension={dimension} group={group} x={d3.scale.linear().domain([3])} /> 
				</div>
				<div className="col-md-3 panel panel-default">
					<PieChart dimension={dimension} group={group} x={d3.scale.linear().domain([4])} /> 
				</div>
				<div className="col-md-3 panel panel-default">
					<PieChart dimension={dimension} group={group} x={d3.scale.linear().domain([5])} /> 
				</div> 
			</div> 
				 
		);
	}
}
export default MyChart; 