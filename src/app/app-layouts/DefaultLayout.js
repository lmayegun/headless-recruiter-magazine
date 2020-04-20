import React from 'react';
import AppContext from 'app/AppContext';
import { renderRoutes } from "react-router-config";
import {AppSuspense} from "@localpkg";

import NavbarWrapperLayout from './components/NavbarWrapperLayout';

const DefaultLayout = () => {
  return(
    <AppContext.Consumer>
    {
      ({routes}) => {
        return(
          <div>
            <NavbarWrapperLayout />
            <AppSuspense>
              {renderRoutes(routes)}
            </AppSuspense>
          </div>
        )
      }
    }
    </AppContext.Consumer>
  )
}

export default DefaultLayout;
