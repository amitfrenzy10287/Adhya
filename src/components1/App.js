import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Header} from './common';
import {fetchTwitterUser} from '../reducers/profile';

@connect((state) => ({
  profile: state.profile
}))

export default class App extends Component {
  static get propTypes() {
    return {
      props: PropTypes.object
    };
  }

  render() {
    const {pathname} = this.props.location;
    let pathvalue = '';
    if(pathname) {
      let pathArr = pathname.split("/");
      pathvalue = pathArr[1];
    }
    return(
      <div>
        <Header pathname={pathvalue}/>
        <div className="container  mb-2">
          {this.props.children}
        </div>
      </div>
    );
  }
}
