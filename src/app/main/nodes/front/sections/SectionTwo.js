import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Hidden} from '@material-ui/core';
import clsx from 'clsx';
import {
        ThreeByTwoAd,
        AppIconHeader,
        AppLatestJobs,
        AppFeaturedRecruiters,
      } from '@localpkg';

const useStyles = makeStyles( theme => ({
   container: {
     display: 'flex',
     flexDirection: 'column',
     marginBottom: 50,
     padding: 20,
     [theme.breakpoints.up('lg')]:{
       flexDirection: 'row',
     }
   },
   sectionTwoCol: {
     minHeight: 500,
     width: '100%',
     '&.first-col':{
       [theme.breakpoints.up('lg')]:{
         marginRight: 20,
       }
     },
     '&.second-col':{
       [theme.breakpoints.up('lg')]:{
         marginRight: 20,
       }
     },
     '&.third-col':{
       [theme.breakpoints.up('lg')]:{

       }
     },
     [theme.breakpoints.up('md')]: {

     },
     [theme.breakpoints.up('lg')]: {
      marginTop: 50,
     }
   },
 })
);

const SectionTwo = () =>{
  const classes = useStyles();
  return(
      <div className={clsx(classes.container)}>
        <Hidden mdDown>
        <div className={clsx(classes.sectionTwoCol, "first-col")}>
          <ThreeByTwoAd width="80%"/>
        </div>
        </Hidden>

        <div className={clsx(classes.sectionTwoCol, "second-col")}>
          <AppIconHeader title="latest jobs" />
          <AppLatestJobs />
        </div>

        <div className={clsx(classes.sectionTwoCol, "third-col")}>
          <AppIconHeader title="featured recruiters" />
          <AppFeaturedRecruiters />
        </div>
      </div>
  )
}

export default SectionTwo;
