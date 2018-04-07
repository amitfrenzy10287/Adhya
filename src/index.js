import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import Routes from './routes';
import { ConnectedRouter } from 'react-router-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/dc/dc.css';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/react-datepicker/dist/react-datepicker.css';
import './styles/styles.css';

const history = createHistory();
const store = configureStore(history);

render(
  <Provider store={store}>
    <Routes  history={history} ConnectedRouter={ConnectedRouter}/>
  </Provider>,
  document.getElementById("app")
);
