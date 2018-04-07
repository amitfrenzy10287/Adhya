import React, {Component} from 'react';

export default class ChartCompare extends Component {
  render() {
    return(
      <div className="px-4 content-center">

      <form className="form-inline mt-1">
        <div className="form-group">
          <label>Compare vs</label>
        </div>

        <div className="form-group mx-sm-2">
          <select className="custom-select">
            <option></option>
            <option>Small select</option>
          </select>
        </div>

        <div className="form-group mx-sm-3">
          <select className=" custom-select">
            <option></option>
            <option>Small select</option>
          </select>
        </div>

        <div className="form-group mx-sm-3">
          <select className="custom-select">
            <option></option>
            <option>Small select</option>
          </select>
        </div>

        </form>
      </div>
    );
  }
}
