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
   section: {
     minHeight: 600,
     marginBottom: 20,
     marginTop: 20,
     '&.big-story':{
       [theme.breakpoints.up('lg')]:{
         flex:3.5,
         order: '1',
         marginRight: 20,
         padding: '0 12px',
       }
     },
     '&.news-col':{
       [theme.breakpoints.up('lg')]:{
         flex:2.4,
         order: '0',
         marginRight: 20,
         paddingRight: 0
       }
     },
     '&.knowledge-col':{
       [theme.breakpoints.up('lg')]:{
         flex:2,
         order: '2',
         paddingLeft: 0
       }
     },
     [theme.breakpoints.up('md')]: {

     }
   },
 })
);

const SectionOne = ()=>{
  const dispatch = useDispatch();

  const newsTopThree = useSelector( ({data}) => data.home.newsTopRecentState );
  const featuredArticle = useSelector( ({data}) => data.home.featuredArticleState );
  const articleMostRecent = useSelector( ({data}) => data.home.articleMostRecentState );
  const featuredMagazine = useSelector( ({data}) => data.home.featuredMagazineState );

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

  if( !featuredArticleData || !newsData || !knowledgeData || !featuredMagazine){
    return (<h1> Loading... </h1>);
  }

  return(
    <div className={clsx(classes.container)}>
      <div className={clsx(classes.section, "big-story")}>
        {
          featuredArticleData.articles.map(function(key, index){
            return (
              <CenterTeaserThumb content={key} type={"featured"}  key={key}/>
            )
          })
        }

        <Hidden mdDown>
          <ThreeByTwoAd width="60%" />
        </Hidden>

        <Hidden mdDown>
          <SubscribeMag data={featuredMagazine.articles}/>
        </Hidden>

        <Hidden mdDown>
          <ThreeByTwoAd width="60%" />
        </Hidden>
      </div>

      <div className={clsx(classes.section, "news-col")}>
        <AppIconHeader />
        {
          newsData.articles.map(function(key, index){
            return (
              <SideTeaserThumb content={key} key={index}/>
            )
          })
        }
      </div>

      <div className={clsx(classes.section, "knowledge-col")}>
        <AppIconHeader title={'knowledge'} />
        {
          knowledgeData.articles.map(function(key, index){
            return (
              <CenterTeaserThumb content={key} type={"normal"}  key={index}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default  withReducer('data', reducer)(React.memo(SectionOne));
