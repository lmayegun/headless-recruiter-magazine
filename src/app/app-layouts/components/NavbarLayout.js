import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles, Icon} from '@material-ui/core';
import clsx from 'clsx';

import Logo from './Logo';
import {AppIcon} from '@localpkg'

const useStyles = makeStyles( theme =>{
  return({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    logoWrapper:{
      flexGrow: 1,
    },
    navigationLinksWrapper:{
      flexGrow: 10,
      display: 'flex',
      justifyContent: 'center',
    },
    secondaryNavsWrapper:{
      flexGrow: 10,
      display: 'flex',
    },
    links:{
      fontSize: '1.15em',
      fontWeight: '700',
      paddingBottom: '10px',
      marginRight: '20px',
      color: 'white',
      textDecoration: 'none',
      textTransform: 'uppercase',
      letterSpacing: '0px',
      '&.last':{
        margin: 0
      }
    }
  })
});

const NavbarLayout = () => {

  const classes = useStyles();
  return(
    <div className={clsx(classes.root, 'container')}>
      <div className={classes.logoWrapper}>
        <Link to='/'>
          <Logo/>
        </Link>
      </div>

      <div className={classes.navigationLinksWrapper}>
        <div>
          <Link to="/homes" className={clsx(classes.links)}>News</Link>
          <Link to="/about" className={clsx(classes.links)}>Knowledge</Link>
          <Link to="/dashboard" className={clsx(classes.links)}>Jobs</Link>
          <Link to="/example" className={clsx(classes.links)}>Events</Link>
          <Link to="/example" className={clsx(classes.links)}>Directory</Link>
          <Link to="/example" className={clsx(classes.links, 'last')}>Rec</Link>
        </div>
      </div>

      <div className={classes.secondaryNavsWrapper}>
        <AppIcon iconPos={'0 -5708px'} url={"/knowledge/HOT100/70"}/>
        <AppIcon iconPos={'0 -5756px'} url={"/knowledge/FAST50/69"}/>
        <AppIcon iconPos={'0 -5804px'} url={"/knowledge/influential11/198"}/>
        <AppIcon iconPos={'0 -5852px'}/>
        <AppIcon iconPos={'0 -5899px'}/>
        <AppIcon iconPos={'0 -5946px'}/>
      </div>

    </div>
  )
}

export default NavbarLayout;
