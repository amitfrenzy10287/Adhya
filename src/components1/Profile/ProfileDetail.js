import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';

export default class ProfileDetail extends Component {
  render() {
    return(
          <div>
            <strong>OFFICE:</strong>
            <p className="ml-1">Executive office of president</p>

            <strong>PARTY:</strong>
            <p className="ml-1">Democrat</p>

            <strong>STATE:</strong>
            <p className="ml-1">Ohio</p>

            <strong>RESIDENCE:</strong>
            <p className="ml-1">Washington, DC</p>

            <strong>BORN:</strong>
            <p className="ml-1">August 14, 1961</p>

            <strong>RELIGION:</strong>
            <p className="ml-1">Christanity</p>

            <strong>MARITAL STATUS:</strong>
            <p className="ml-1">Married</p>

            <strong>EDUCATION:</strong>
            <p className="ml-1">Occidental College, columbia</p>

            <strong>PROFESSSION:</strong>
            <p className="ml-1">Senator, Chicago</p>
      </div>
    );
  }
}
