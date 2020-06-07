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
     background: theme.palette.secondary.light,
     [theme.breakpoints.up('md')]: {
       padding: '40px 100px 40px 100px',
     },
     [theme.breakpoints.down('md')]: {
       padding: '40px 50px 40px 50px',
     },
     '& .sliderTitle':{
       display:'flex',
       justifyContent: 'center'
     },
     '& .subTitlesWrapper':{
       display:'flex',
       justifyContent: 'center',
       '& .text':{
         margin: '20px',
         color: '#f37920',
         font: '1.6em Euclid Flex,Helvetica,Arial,sans-serif',
       }
     },
     '& .navBtn':{
       position: 'relative',
       top: '-180px',
       background: 'orange',
       padding: '10px',
       borderRadius: '50px',
     },
     '& .prevBtn':{
       left: '-50px',
       float: 'left',
     },
     '& .nextBtn':{
       right: '-50px',
       float: 'right',
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

const SectionFive = ()=>{

  const classes = useStyle();

  const dispatch = useDispatch();
  const magazineCarousel = useSelector( ({data}) => data.magazine.magazineCarouselState );

  const [magazineCarouselData, setMagazineCarouselData] = useState(magazineCarousel);

  useEffect(()=>{
    dispatch(Actions.getMagazineIssueCarousel())
  },[dispatch])

  useEffect(()=>{
    setMagazineCarouselData(magazineCarousel);
  },[magazineCarousel])

  if(!magazineCarouselData){
    return null
  }

  return(
    <div className={clsx(classes.container)}>
      <div className={clsx(classes.section, "first-col")}>
      {magazineCarouselData.length > 0 && (
        <AppCarousel
          slideData={magazineCarouselData}
          slidesToShow={4}
          classes={classes}
          type={"cover"}
          longTitleLength={false}
          sliderTitle={"recruiter magazine"}
          />
        )}
      </div>
    </div>
  )
}

export default React.memo(SectionFive)
