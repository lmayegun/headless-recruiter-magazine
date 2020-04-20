import React from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';

export function AppPremIcon(){

  const useStyles = makeStyles( theme=>({
      premIcon:{
        width: '25px',
        position: 'absolute',
        top: '5px',
        left: '5px',
        zIndex: '1'
      }
    })
  );

  const classes = useStyles()

  return(
    <img className={clsx(classes.premIcon)} src="https://www.recruiter.co.uk/sites/all/themes/recruiter/img/p-icon-premium_gold.png" alt="App Prem Icon" />
  )
}
