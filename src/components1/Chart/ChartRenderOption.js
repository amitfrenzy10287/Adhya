import React, {Component} from 'react';

export default class ChartRenderOption extends Component {
  render() {
    return(
      <div className="px-4 content-center chart-render-option">

      <form className="form-inline mt-1">

        <div className="form-group mx-sm-1">
          <label><b>Start:</b></label>
          <select className="custom-select">
            <option></option>
            <option>Small select</option>
          </select>
        </div>

        <div className="form-group mx-sm-1">
          <label><b>End:</b></label>
          <select className="custom-select">
            <option></option>
            <option>Small select</option>
          </select>
        </div>

        <div className="form-group mx-sm-1">
          <label><b>Plot by:</b></label>
          <select className="custom-select">
            <option></option>
            <option>Small select</option>
          </select>
        </div>

        <div className="form-group mx-sm-1">
          <button className="btn btn-dark btn-sm">UPDATE</button>
        </div>

        </form>
      </div>
    );
  }
}
