import React, {Component} from 'react';

export default class LeftBar extends Component {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}
