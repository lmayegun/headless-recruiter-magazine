import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles, Icon, Fade} from '@material-ui/core';
import clsx from 'clsx';

import Logo from './Logo';
import {AppIcon} from '@localpkg';
import SearchToggleBtn from './search/SearchToggleBtn';
import Navigation from '../shared-components/Navigation';

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
      '& div':{
        borderBottom: '1px solid white',
        paddingBottom: 10,
      }
    },
    secondaryNavsWrapper:{
      flexGrow: 10,
      display: 'flex',
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
    }
  })
});

const NavbarLayout = () => {

  const classes = useStyles();
  const theRef = React.useRef()
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(prev =>{
        return(
          !prev
        )
      }
    )
  };

  React.useEffect(()=>{
    if( checked ){
      theRef.current.classList.add("show")
    }else if( !checked ){
      theRef.current.classList.remove("show")
    }
  },[checked])

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
          <Link to="/knowledge" className={clsx(classes.links, "knowledge")}>Knowledge</Link>
          <Link to="/jobs" className={clsx(classes.links, "jobs")}>Jobs</Link>
          <Link to="/events" className={clsx(classes.links, "events")}>Events</Link>
          <Link to="/directory" className={clsx(classes.links, "directory")}>Directory</Link>
          <Link to="/rec" className={clsx(classes.links, "rec last")}>Rec</Link>
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
        <Icon className={clsx(classes.burgerMenuIcon,"text-5xl")} style={{width:'35px'}} onClick={handleChange}>menu</Icon>
        {checked && (
          <div className={classes.closeBurgerMenu}>
            <h2 style={{color:'#000', letterSpacing:'-1px', fontWeight:'1000'}}> DISCOVER <Icon className="float-right relative" onClick={handleChange}>close</Icon> </h2>
          </div>
         )}
        <Fade in={checked} ref={theRef} className="burger-menu">
          <div style={{background:'#000000', fontWeight:'1000'}}>
            <div >

            </div>
          </div>
        </Fade>
      </div>

    </div>
  )
}

export default NavbarLayout;
