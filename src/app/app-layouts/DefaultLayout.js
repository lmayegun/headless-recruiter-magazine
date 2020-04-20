import React from 'react';
import AppContext from 'app/AppContext';
import { renderRoutes } from "react-router-config";

import NavbarWrapperLayout from './components/NavbarWrapperLayout';

const DefaultLayout = () => {
  return(
    <AppContext.Consumer>
    {
      ({routes}) => {
        return(
          <div>
            <NavbarWrapperLayout />
            {renderRoutes(routes)}
          </div>
        )
      }
    }
    </AppContext.Consumer>
  )
}

export default DefaultLayout;
