import React, {useEffect} from 'react';
import AppContext from 'app/AppContext';
import { renderRoutes } from "react-router-config";
import {makeStyles} from '@material-ui/core';

import {AppSuspense, AppScrollbars} from "@localpkg";

import NavbarWrapperLayout from './components/NavbarWrapperLayout';

const useStyles = makeStyles( themes => ({
    root: {
     position     : 'relative',
     display      : 'flex',
     justifyContent: 'center',
     flexDirection: 'row',
     width        : '100%',
     height       : '100%',
     overflow     : 'hidden',
   },
   content:{
     width: '100%'
   }
  })
)

const DefaultLayout = () => {

  const ref = React.useRef();

  function handleYscroll(){
    if( window.innerWidth > 1200 ){
      if( ref.current.scrollTop > 66){
        ref.current.childNodes[2].classList.add("pin-nav")
      }

      if( ref.current.scrollTop < 66){
        ref.current.childNodes[2].classList.remove("pin-nav")
      }
    }
  }

  useEffect(() => {
    // Update the document title using the browser API
    // ref.current.scrollTop = 0
  });

  const classes = useStyles();

  return(
    <AppContext.Consumer>
    {
      ({routes}) => {
        return(
          <div className={classes.root}>
            <AppScrollbars className={classes.content} onScrollY={handleYscroll} ref={ref}>
              <NavbarWrapperLayout />
              <AppSuspense>
                {renderRoutes(routes)}
              </AppSuspense>
            </AppScrollbars>
          </div>
        )
      }
    }
    </AppContext.Consumer>
  )
}

export default DefaultLayout;
