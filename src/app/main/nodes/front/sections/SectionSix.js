import React,{useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import * as Actions from './store/actions';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';

import {
        AppCarousel
      } from '@localpkg';

const useStyle = makeStyles( theme => ({
   carouselContainer:{
     [theme.breakpoints.up('md')]: {
       padding: '40px 100px 40px 100px',
       '& .prevBtn':{
         left: '-50px',
         float: 'left',
       },
       '& .nextBtn':{
         right: '-50px',
         float: 'right',
       },
     },
     [theme.breakpoints.down('md')]: {
       padding: '40px 50px 40px 8px',
       '& .prevBtn':{
         left: '-2px',
         float: 'left',
       },
       '& .nextBtn':{
         right: '-2px',
         float: 'right',
       },
     },
     '& .sliderTitle':{
       display:'flex',
       justifyContent: 'center',
     },
     '& .subTitlesWrapper':{
       display:'flex',
       justifyContent: 'center',
       '& .text':{
         margin: '20px',
       }
     },
     '& .navBtn':{
       position: 'relative',
       top: '-190px',
       background: 'orange',
       padding: '10px',
       borderRadius: '50px',
     },
     '& .magazine': {
       width: '80%',
       margin: 'auto'
     }
   },
   container: {
     display: 'flex',
     flexDirection: 'column',
     marginBottom: 50,
     padding: 0,
     [theme.breakpoints.up('lg')]:{
       flexDirection: 'row',
     }
   },
   section: {
     minHeight: 100,
     width: '100%',
     '&.first-col':{
       [theme.breakpoints.up('lg')]:{
       }
     },
     [theme.breakpoints.up('md')]: {

     },
     [theme.breakpoints.up('lg')]: {

     }
   },
 })
)

const SectionSix = ()=>{

  const classes = useStyle();

  const dispatch = useDispatch();
  const supplements = useSelector( ({data}) => data.home.supplementsState  );

  const [supplementsData, setSupplementsData] = useState(supplements);

  useEffect(()=>{
   dispatch(Actions.getSupplements({category:'supplements'}))
  },[dispatch])

  useEffect(()=>{
    setSupplementsData(supplements)
  },[supplements])

  if( !supplementsData ){
    return null
  }

  return(
      <div className={clsx(classes.container)}>
        <div className={clsx(classes.section, "first-col")}>
        {supplementsData.length > 0 && (
          <AppCarousel
            slideData={supplementsData}
            slidesToShow={4}
            classes={classes}
            type={"cover"}
            longTitleLength={true}
            sliderTitle={"recruiter supplements"}
            />
          )}
        </div>
      </div>
  )
}

export default SectionSix
