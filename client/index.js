// socket.io config
import io from 'socket.io-client';

import { HOST } from './helpers/host';

const socket = io.connect(HOST);

window.___SOCKET___ = socket;

import isOnline from 'is-online';
 
setInterval(() => {
  isOnline()
    .then(online => {
      if(!online) {
        window.___SOCKET___ = io.connect(HOST);
      }
    });
}, 5000);

// React + Redux dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

// Material UI dependencies
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// load bootstrap dependencies
import 'bootstrap-loader';

// load all scss styles
import './sass/style.scss';
// load font-awesome icons

import 'font-awesome/css/font-awesome.min.css';

// React router component
import Router from './Router';

// Root Reducer for Redux
import reducers from './reducers';

// variable to determine if webpack is running in production or development
const dev = NODE_ENV === 'development';

// Create store template with redux-promise middle to resolve unfinished promises before sending action.payload to reducers
const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);

// create store and enable redux chrome extension
export const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Set colors for Material UI to use within it's components
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: 'rgb(40, 45, 67)',
    primary2Color: 'rgb(0, 218, 179)',
    primary3Color: 'rgb(0, 218, 179)',
    accent1Color: 'rgb(0, 218, 179)',
    accent2Color: 'rgb(0, 218, 179)',
    accent3Color: 'rgb(0, 218, 179)',
    alternateTextColor: 'rgb(0, 218, 179)',
    canvasColor: 'rgb(40, 45, 67)',
    borderColor: 'rgb(0, 218, 179)',
    disabledColor: 'rgb(0, 218, 179)',
    pickerHeaderColor: 'rgb(0, 218, 179)',
    clockCircleColor: 'rgb(0, 218, 179)',
    shadowColor: 'rgb(0, 0, 0)',
  },
  button: {
    textTransform: 'none' 
  }
});

// Render app in the index.html file attaching to the #app div 
ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider muiTheme={ getMuiTheme(muiTheme) }>
      <Router/>
    </MuiThemeProvider>
  </Provider>, document.querySelector('#app'));
