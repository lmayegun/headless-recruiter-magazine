import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

export default function AppIcon( props ){

  const useStyles = makeStyles( theme => ({
      root: {

      },
      title:{
        color: '#4d4d4f',
        letterSpacing: '1px',
        padding: '2px 5px 20px 45px',
        marginLeft: '0px',
        overflow: 'hidden',
        textTransform: 'uppercase',
        background: 'url(assets/images/icons/icons.png) no-repeat 0 0',
        minHeight: 20,
      }
    })
  )

  const classes = useStyles();

  return(
    <Link
      to={props.url}
    >
      <p className={clsx(classes.title)} style={{backgroundPosition: props.iconPos }} />
    </Link>
  )
}
AppIcon.defaultProps = {
  url: '/',
  iconPos: '0 -144px'
}
