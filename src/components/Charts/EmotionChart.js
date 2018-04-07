import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import d3 from 'd3';
import dc from 'dc';
import crossfilter from 'crossfilter';
import {PieChart} from 'react-dc';

export default class DonutChartReact extends Component {
   
  render() {
    
    var chart = dc.pieChart("#emotionChart");
    var data          = [ 
      { 'Expt': 1, 'Run': 1, 'Speed': 25, 'title': 'Highly Emotional'  }, 
      { 'Expt': 1, 'Run': 2, 'Speed': 15, 'title': 'Moderately Emotional'  },
      { 'Expt': 1, 'Run': 3, 'Speed': 10, 'title': 'Low Emotional'  },
      { 'Expt': 1, 'Run': 4, 'Speed': 50, 'title': 'Normal Emotional'  }
    ];
        
        var ndx           = crossfilter(data),
        runDimension  = ndx.dimension(function(d) {
          return d.title;
        });
        var speedSumGroup = runDimension.group().reduceSum(function(d) { 
           return d.Speed;
        });

      chart
        .width(250)
        .height(250)
        .ordinalColors(["#ff72d4", "#31ffc2","#ffef37", "#ff808c"])
        .slicesCap(4)
        .innerRadius(0)
        .dimension(runDimension)
        .group(speedSumGroup) // by default, pie charts will use group.key as the label
        .renderLabel(false)
        .title(function(d){
              return d["key"]+" : "+d["value"]+"%";
        })
        // .label(function (d) { 
        //   // return d.key.toUpperCase()+"%";
        // })
        ;

      chart.render();

    return(
       
          <div className="singleChart" id="emotionChart" />
      
    );
  }
}
