import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles, Icon, Fade} from '@material-ui/core';
import clsx from 'clsx';

import Logo from './Logo';
import {AppIcon} from '@localpkg';
import SearchToggleBtn from './search/SearchToggleBtn';
import ExtraNav from '../shared-components/ExtraNav';

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
      flexGrow: 5,
      display: 'flex',
      justifyContent: 'center',
      '& div':{
        borderBottom: '1px solid white',
        paddingBottom: 10,
      }
    },
    secondaryNavsWrapper:{
      flexGrow: 1,
      display: 'flex',
      position: 'relative',
      height: 65,
      alignItems: 'center',
    },
    links:{
      fontSize: '1.45em',
      paddingBottom: '10px',
      marginRight: '20px',
      color: 'white',
      textDecoration: 'none',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontFamily: 'Kommissar Cond Web',
      '&:hover': {
        textDecoration: 'none !important',
        '&.news' : {
          color: 'red !important',
          borderBottom: '5px solid red !important',
        },
        '&.knowledge' : {
          color: '#c1b49a !important',
          borderBottom: '5px solid #c1b49a !important',
        },
        '&.events' : {
          color: '#7581bf !important',
          borderBottom: '5px solid #7581bf !important',
        },
        '&.directory' : {
          color: '#3fac49  !important',
          borderBottom: '5px solid #3fac49 !important',
        },
        '&.rec' : {
          color: '#5974d4 !important',
          borderBottom: '5px solid #5974d4 !important',
        },
        '&.jobs' : {
          color: '#29b8c8 !important',
          borderBottom: '5px solid #29b8c8 !important',
        },
      },
      '&.last':{
        margin: 0
      }
    },
    extraNav:{
      flexGrow: 1,
      display: 'flex',
      height: '65px',
      paddingTop: '40px',
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
          <Link to="/news" className={clsx(classes.links, "news")}>News</Link>
          <Link to="/#" className={clsx(classes.links, "knowledge")}>Knowledge</Link>
          <Link to="/#" className={clsx(classes.links, "jobs")}>Jobs</Link>
          <Link to="/#" className={clsx(classes.links, "events")}>Events</Link>
          <Link to="/#" className={clsx(classes.links, "directory")}>Directory</Link>
          <Link to="/#" className={clsx(classes.links, "rec last")}>Rec</Link>
        </div>
      </div>

      <div className={classes.secondaryNavsWrapper}>
        <AppIcon iconPos={'0 -5708px'} url={"/knowledge/HOT100/70"}/>
        <AppIcon iconPos={'0 -5756px'} url={"/knowledge/FAST50/69"}/>
        <AppIcon iconPos={'0 -5804px'} url={"/knowledge/influential11/198"}/>
        <AppIcon iconPos={'0 -5852px'}/>
        <AppIcon iconPos={'0 -5899px'}/>
        <AppIcon iconPos={'0 -5946px'}/>
        <SearchToggleBtn/>
      </div>

      <div className={classes.extraNav}>
        <ExtraNav />
      </div>

    </div>
  )
}

export default NavbarLayout;
