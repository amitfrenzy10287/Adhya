import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import d3 from 'd3';
import dc from 'dc';
import crossfilter from 'crossfilter';
import {PieChart} from 'react-dc';

export default class SentimentsChartReact extends Component {
   
  render() {
    
    var chart = dc.pieChart("#sentimentsChart");
    var data          = [ 
      { 'Expt': 1, 'Run': 1, 'Speed': 33, 'title': 'Neutral'  }, 
      { 'Expt': 1, 'Run': 2, 'Speed': 33, 'title': 'Negetive'  },
      { 'Expt': 1, 'Run': 3, 'Speed': 34, 'title': 'Positive'  }
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
        .ordinalColors(["#33ff61", "#ff0018","#ddd"])
        .slicesCap(3)
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
       
          <div className="singleChart" id="sentimentsChart" />
      
    );
  }
}
