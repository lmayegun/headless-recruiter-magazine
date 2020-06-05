import React from 'react';
import {makeStyles} from '@material-ui/styles';
import { Typography, Body1 } from '@material-ui/core';
import clsx from 'clsx';

export default function AppIconHeader( props ){

  const useStyles = makeStyles( theme => ({
      root: {

      },
      title:{
        color: '#4d4d4f',
        padding: '2px 5px 0px 45px',
        marginLeft: '0px',
        marginBottom: '10px',
        overflow: 'hidden',
        textTransform: 'uppercase',
        height: '45px',
        letterSpacing: '2px',
        background: 'url(assets/images/icons/icons.png) no-repeat 0 0',
      }
    })
  )
  var iconPos = '0px 0px';
  switch( props.title ){
    case 'knowledge':
      iconPos = '0 -73px';
      break;
    case 'most popular':
      iconPos = '0 -369px';
      break;
    case 'promoted':
      iconPos = '0 -556px';
      break;
    case 'recruiter magazine':
      iconPos = '0 -660px';
      break;
    case 'recruiter supplements':
      iconPos = '0 -660px';
      break;
    case 'opinion':
      iconPos = '0 -861px';
      break;
    case 'in depth':
      iconPos = '0 -3480px';
      break;
    case 'lighter side':
      iconPos = '0 -2872px';
      break;
    case 'events':
      iconPos = '0 -1237px';
      break;
    case 'FAST50':
      iconPos = '0 -5756px';
      break;
    case 'HOT100':
      iconPos = '0 -5708px';
      break;
    case 'influential11':
      iconPos = '0 -5804px';
      break;
    default:
      iconPos = '0 0px';
  }

  const classes = useStyles();

  return(
    <Typography className={clsx(classes.title)} style={{backgroundPosition: iconPos }} variant="h3" >
      {props.title}
    </Typography>
  )
}
AppIconHeader.defaultProps = {
  title     : 'news',
}
