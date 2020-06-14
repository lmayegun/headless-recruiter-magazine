import React,{useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';

import withReducer from 'app/store/withReducer';
import {reducer} from './store/reducers';
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
     },
     [theme.breakpoints.down('md')]: {
       padding: '40px 50px 40px 50px',
     },
     '& .sliderTitle':{
       display:'flex',
       justifyContent: 'center',
       marginBottom: '20px'
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
       top: '-380px',
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

     padding: 0,
     [theme.breakpoints.up('lg')]:{
       flexDirection: 'row',
     }
   },
   sectionCol: {
     minHeight: 100,
     width: '100%',
     '&.first-col':{
       [theme.breakpoints.up('lg')]:{
       }
     },
     [theme.breakpoints.up('md')]: {

     },
     [theme.breakpoints.up('lg')]: {

       // padding: '40px 100px 40px 100px',
     }
   },
 })
)

const SectionFour = ()=>{

  const classes = useStyle();

  const dispatch = useDispatch();
  const articleSponsored = useSelector( ({data}) => data.home.articleSponsoredState );

  const [newsData, setNewsData] = useState(articleSponsored);

  useEffect(()=>{
    dispatch(Actions.getArticleSponsored())
  }, [dispatch])

  useEffect(()=>{
    setNewsData(articleSponsored)
  },[articleSponsored])

  if( !newsData ){
    return <h1> Loading.. </h1>
  }
  return(
      <div className={clsx(classes.container)}>
        <div className={clsx(classes.sectionCol, "first-col")}>
        {newsData.length > 0 && (
          <AppCarousel
            slideData={newsData}
            slidesToShow={3}
            classes={classes}
            type={"content"}
            sliderTitle={"promoted"}
            />
          )}
        </div>
      </div>
  )
}

export default withReducer('data', reducer)(React.memo(SectionFour))
