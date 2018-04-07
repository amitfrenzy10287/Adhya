import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

export default class LeftBar extends Component {
  static get propTypes() {
    return {
      children: PropTypes.node
    };
  }
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}
