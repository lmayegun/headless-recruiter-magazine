import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import {
        FusePageSimple,
        SideTeaserThumb,
        CenterTeaserThumb,
        ThreeByTwoAd,
        AppIconHeader,
        AppMostPopular,
        AppSubNav
      } from '@localpkg';

import * as Actions from 'app/main/nodes/store/actions';
import withReducer from 'app/store/withReducer';
import {reducer} from 'app/main/nodes/store/reducers';
import {useDispatch, useSelector} from 'react-redux';

function Term(){

  const dispatch = useDispatch();

  const newsTerms = useSelector( ({terms}) => terms.news.newsTermsState  );
  const termTopThree = useSelector( ({terms}) => terms.news.newsTopThreeState  );
  const termTopSix = useSelector( ({terms}) => terms.news.newsTopSixState  );

  const [newsTermsData, setNewsTermsData] = useState(newsTerms);
  const [termTopThreeData, setTermTopThreeData] = useState(termTopThree);
  const [termTopSixData, setTermTopSixData] = useState(termTopSix);

  useEffect(()=>{
   dispatch(Actions.getNewsTerms({category:'news'}));
   dispatch(Actions.getNewsTopThree({category:'news'}));
   dispatch(Actions.getNewsTopSix({category:'news'}));
  },[dispatch])

  useEffect (()=>{
    setNewsTermsData(newsTerms);
    setTermTopThreeData(termTopThree);
    setTermTopSixData(termTopSix);
  },[newsTerms, termTopThree, termTopSix])

  const classes = useStyles();

  if(!termTopThreeData || !termTopSixData || !newsTermsData ){
    return <h1> Loading... </h1>
  }

  return(
    <div>
      {newsTermsData.length > 0 && (
        <AppSubNav terms={newsTermsData} />
      )}
      <FusePageSimple
        featuredContents={
          <div>
            <AppIconHeader title="rec"/>
            <div className={clsx(classes.topThree)}>
              {
                termTopThreeData.map((key, index)=>{
                  return(
                    <div style={{flex:1, padding: 15}} key={index}>
                      <CenterTeaserThumb content={key} imgHeight="250px"/>
                    </div>
                  )
                })
              }
            </div>
          </div>
        }

        content={
          <div className={clsx(classes.topSix)}>
            {
              termTopSixData.map((key, index)=>{
                return(
                  <div className="item" key={index}>
                    <SideTeaserThumb content={key} minHeight="260px"/>
                  </div>
                )
              })
            }
          </div>
        }

        rightSidebarContent={
            <div style={{paddingLeft:20}}>
            <ThreeByTwoAd />
            <br />
            <AppIconHeader title="most popular"/>
            <AppMostPopular content={termTopThreeData} liClasses={'width-full'}/>
            <br />
            <ThreeByTwoAd />
          </div>
        }
      />
    </div>
  )
}

const useStyles = makeStyles( theme => ({
   topThree: {
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'space-between',
     marginBottom: 50,
     marginLeft: -15,
     [theme.breakpoints.up('lg')]:{
       flexDirection: 'row',
     }
   },
   topSix: {
     display: 'flex',
     flexDirection: 'column',
     flexWrap: 'wrap',
     justifyContent: 'space-between',
     marginBottom: 50,
     [theme.breakpoints.up('lg')]:{
       flexDirection: 'row',
       '& .item':{
          width: '45%',
          padding: '10px',
       }
     }
   }
 })
);

export default withReducer('terms', reducer)(Term)
