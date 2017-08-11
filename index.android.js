/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import rootReducer from './app/reducers';
import App from './app/containers/AppContainer';

const store = createStore(rootReducer);

 const sidemenu = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme({userAgent: (typeof navigator !== 'undefined' && navigator.userAgent) || 'all' })}>
      <App />
    </MuiThemeProvider>
  </Provider>
);

AppRegistry.registerComponent('sidemenu', () => sidemenu);
