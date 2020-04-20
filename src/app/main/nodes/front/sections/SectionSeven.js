import React from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';

import {ThreeByTwoAd } from '@localpkg';
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
   sectionSevenCol: {
     minHeight: 500,
     width: '100%',
     '&.first-col':{
       [theme.breakpoints.up('lg')]:{
         marginRight: 20,
              background: '#c1b49a',
       }
     },
     '&.second-col':{
       [theme.breakpoints.up('lg')]:{
         marginRight: 20,
              background: '#c1b49a',
       }
     },
     '&.third-col':{
       [theme.breakpoints.up('lg')]:{

       }
     },
     [theme.breakpoints.up('md')]: {

     },
     [theme.breakpoints.up('lg')]: {

     }
   },
 })
);

const SectionSeven = () => {
  const classes = useStyles();
  return(
      <div className={clsx(classes.container)}>
        <div className={clsx(classes.sectionSevenCol, "first-col")}>

        </div>

        <div className={clsx(classes.sectionSevenCol, "second-col")}>

        </div>

        <div className={clsx(classes.sectionSevenCol, "third-col")}>
          <ThreeByTwoAd />
        </div>
      </div>
  )
}

export default SectionSeven;
