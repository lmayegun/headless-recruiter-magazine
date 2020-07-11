import React,{useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import * as Actions from './store/actions';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import {
        CenterTeaserThumb,
        AppIconHeader,
      } from '@localpkg';
const useStyles = makeStyles( theme => ({
   container: {
     display: 'flex',
     flexDirection: 'column',
     padding: 20,
     [theme.breakpoints.up('lg')]:{
       flexDirection: 'row',
     }
   },
   sectionOneCol: {
     minHeight: 300,
     width: '100%',
     marginBottom: 20,
     [theme.breakpoints.up('md')]: {

     },
     [theme.breakpoints.up('lg')]: {

     }
   },

   columns: {
     display: 'flex',
     flexDirection: 'column',
     [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
     },
     '& .column':{
       [theme.breakpoints.up('lg')]: {
         width: '100%',
         padding: '20px',
       },
     }
   }
 })
);

const SectionTwelve = ()=> {
  const dispatch = useDispatch();

  const eventsTopThree = useSelector( ({data}) => data.home.eventsTopThreeState );
  const [eventsData, setEventsData] = useState(eventsTopThree);

  useEffect(()=>{
    dispatch(Actions.getEventsTopThree({category:'sport'}))
  },[dispatch])

  useEffect(()=>{
    setEventsData(eventsTopThree)
  },[eventsTopThree])

  const classes = useStyles();

  if ( !eventsData )
  {
    return null;
  }

  return(
      <div className={clsx(classes.container)}>
        <div className={clsx(classes.sectionOneCol)}>
            <AppIconHeader title={'events'} />
            <div className={clsx(classes.columns)}>
              {
                eventsData.map(function(key, index){
                  return (
                    <div className="column"  key={index}>
                      <CenterTeaserThumb content={key} imgHeight={"210px"}/>
                    </div>
                  )
                })
              }
            </div>
        </div>
      </div>
  )
}

export default SectionTwelve;
