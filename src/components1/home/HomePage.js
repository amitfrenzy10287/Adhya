import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {TextBox} from '../FormInput';
import {required, email} from '../../validationRules';
import {login, logout} from '../../reducers/user';
import Validation from '../common/Validation';

@connect(state => ({
  user: state.user
}))

export default class HomePage extends React.Component {

  static get propTypes() {
      return {
        dispatch: PropTypes.func,
        user: PropTypes.object
      };
  }

  state = {};

  onChange = ({name, value}) => {
    this.setState({[name]: value});
  }

  handLogout = () => {
    const {dispatch} = this.props;
    dispatch(logout());
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {dispatch} = this.props;
    dispatch(login(this.state));
  }

  render() {
    const { user, errors } = this.props.user;
    console.log('user', user);
    return (
      <div className="jumbotron">
        {errors && <Validation errors={errors}/>}
        {
          user.user_id? (
            <div>
              <strong>Welocome, you are already logged in as {user.uname} </strong>
              <button className="btn btn-primary" onClick={this.handLogout}>Logout</button>
            </div>
          ) : (
            <div>
              <h2>Login</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextBox name="email" type="text" className="form-control" placeholder="Enter email" onChange={this.onChange} validate={[required, email]}/>
                </div>

                  <div className="form-group">
                    <TextBox name="password" type="password" className="form-control" placeholder="Enter password" onChange={this.onChange} validate={[required]}/>
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
              </div>
          )
        }
      </div>
    );

  }
}
