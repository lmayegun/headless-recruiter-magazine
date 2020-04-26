import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import {
        FusePageSimple,
        CenterTeaserThumb,
        AppIconHeader,
        AppCarousel
      } from '@localpkg';

import * as Actions from 'app/main/nodes/store/actions';
import withReducer from 'app/store/withReducer';
import {reducer} from 'app/main/nodes/store/reducers';
import {useDispatch, useSelector} from 'react-redux';


const useStyles = makeStyles( theme => ({
    carouselContainer:{
      background: '#efece6',
      padding: '40px 100px 40px 100px',
      '& .sliderTitle':{
        display:'flex',
        justifyContent: 'center'
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
     [theme.breakpoints.up('lg')]:{
       flexDirection: 'row',
     }
   },
   sectionThreeCol: {
     minHeight: 200,
     width: '100%',
     marginRight: 20,
     '&.first-col':{
       [theme.breakpoints.up('lg')]:{

       }
     },
     '&.second-col':{
       [theme.breakpoints.up('lg')]:{

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
);

function Events(){

  const dispatch = useDispatch();
  const eventsMostRecent = useSelector( ({data}) => data.taxonomy.eventsMostRecentState );
  const magazineCarousel = useSelector( ({data}) => data.magazine.magazineCarouselState );

  const [eventsMostRecentData, setEventMostRecentData ] = useState( eventsMostRecent );
  const [magazineCarouselData, setMagazineCarouselData] = useState(magazineCarousel);

  useEffect(()=>{
   dispatch(Actions.getEventsMostRecent())
   dispatch(Actions.getMagazineIssueCarousel())
  },[dispatch])

  useEffect(()=>{
    setEventMostRecentData(eventsMostRecent);
    setMagazineCarouselData(magazineCarousel);
  },[eventsMostRecent, magazineCarousel])

  const classes = useStyles();

  if(!eventsMostRecentData){
    return null
  }

  if(!magazineCarouselData){
    return null
  }

  return(
    <div>
      <br />
      <FusePageSimple
        featuredContents={
          <div>
            <AppIconHeader title={"events"} />
          </div>
        }

        content={
          <div>
            <div className="flex flex-wrap" >
              {
                eventsMostRecentData.map((key, index)=>{
                  return(
                    <div className="w-1/3 pr-24" key={index}>
                      <CenterTeaserThumb content={key}/>
                    </div>
                  )
                })
              }
            </div>

            <div className={clsx(classes.sectionCol, "first-col")}>
            {magazineCarouselData.length > 0 && (
              <AppCarousel
                slideData={magazineCarouselData}
                slidesToShow={4}
                classes={classes}
                type={"cover"}
                sliderTitle={"recruiter magazine"}
                />
              )}
            </div>
            <br />
            <br />
            {/*<AppCarousel slidesToShow={4} type={'cover'}/>*/}
          </div>
        }
      />
    </div>
  )
}

export default withReducer('data', reducer)(Events)
