import '@local-db';
import React from 'react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@material-ui/core';

import AppContext from './AppContext';
import history from '@history';
import store from './store';
import routes from './configs/routesConfig';
import {defaultMuiTheme} from './configs/themeConfig';
import { ReactRouterConfig } from './route-system';

import '../firebase/firebase';

const App = () =>  {
  return (
    <AppContext.Provider
      value={{routes}}
    >
      <Provider store={store}>
        <ThemeProvider theme={defaultMuiTheme()}>
          <Router history={history}>
            <ReactRouterConfig />
          </Router>
        </ThemeProvider>
      </Provider>
    </AppContext.Provider>
  );
}

export default App;
