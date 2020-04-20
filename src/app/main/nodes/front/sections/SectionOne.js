import React,{useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Hidden} from '@material-ui/core';

import withReducer from 'app/store/withReducer';
import {reducer} from './store/reducers';
import * as Actions from './store/actions';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import {
        SideTeaserThumb,
        CenterTeaserThumb,
        ThreeByTwoAd,
        SubscribeMag,
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
     minHeight: 600,
     width: '100%',
     marginBottom: 20,
     marginTop: 80,
     '&.big-story':{
       [theme.breakpoints.up('lg')]:{
         width: '150%',
         order: '1',
         marginRight: 20,
         padding: '0 12px',
       }
     },
     '&.second-col':{
       [theme.breakpoints.up('lg')]:{
         order: '0',
         marginRight: 20,
         paddingRight: 0
       }
     },
     '&.third-col':{
       [theme.breakpoints.up('lg')]:{
          width: '75%',
         order: '2',
         paddingLeft: 0
       }
     },
     [theme.breakpoints.up('md')]: {

     },
     [theme.breakpoints.up('lg')]: {
       marginTop: 40,
     }
   },
 })
);

const SectionOne = ()=>{
  const dispatch = useDispatch();

  const newsTopThree = useSelector( ({data}) => data.contents.newsTopRecentState );
  const featuredArticle = useSelector( ({data}) => data.contents.featuredArticleState );
  const articleMostRecent = useSelector( ({data}) => data.contents.articleMostRecentState );
  const featuredMagazine = useSelector( ({data}) => data.magazine.featuredMagazineState );

  const [newsData, setNewsData] = useState(newsTopThree);
  const [featuredArticleData, setFeaturedData] = useState(featuredArticle);
  const [knowledgeData, setKnowledgeData] = useState(articleMostRecent);

  useEffect(()=>{
    dispatch(Actions.getTopRecentNews());
    dispatch(Actions.getFeaturedArticle());
    dispatch(Actions.getArticleMostRecent());
    dispatch(Actions.getFeaturedMagazine());
  }, [dispatch])

  useEffect(()=>{
    setNewsData(newsTopThree)
    setFeaturedData(featuredArticle)
    setKnowledgeData(articleMostRecent)
  },[newsTopThree, featuredArticle, articleMostRecent, featuredMagazine])

  const classes = useStyles();

  return(
      <div className={clsx(classes.container)}>
        <div className={clsx(classes.sectionOneCol, "big-story")}>

          {!featuredArticleData ? (
            <h1> Loading... </h1>
          ) : (
            featuredArticleData.map(function(key, index){
              return (
                <CenterTeaserThumb content={key} type={"featured"}  key={key}/>
              )
            })
          )}

          <Hidden mdDown>
            <ThreeByTwoAd width="60%" />
          </Hidden>

          <Hidden mdDown>
            {!featuredMagazine ? (
              <h1> Loading... </h1>
            ) : (
              <SubscribeMag data={featuredMagazine}/>
            )}
          </Hidden>


          <Hidden mdDown>
            <ThreeByTwoAd width="60%" />
          </Hidden>
        </div>

        <div className={clsx(classes.sectionOneCol, "second-col")}>
            <AppIconHeader />
            {!newsData ? (
              <h1> Loading... </h1>
            ) : (
              newsData.map(function(key, index){
                return (
                  <SideTeaserThumb content={key} key={index}/>
                )
              })
            )}
        </div>

        <div className={clsx(classes.sectionOneCol, "third-col")}>
            <AppIconHeader title={'knowledge'} />
            {!knowledgeData ? (
              <h1> Loading... </h1>
            ) : (
              knowledgeData.map(function(key, index){
                return (
                  <CenterTeaserThumb content={key} type={"normal"}  key={index}/>
                )
              })
            )}
        </div>
      </div>
  )
}

export default  withReducer('data', reducer)(React.memo(SectionOne));
