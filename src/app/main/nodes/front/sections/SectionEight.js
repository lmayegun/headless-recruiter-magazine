import React,{useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import * as Actions from './store/actions';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import { CenterTeaserThumb, ThreeByTwoAd, AppIconHeader} from '@localpkg';

const useStyle = makeStyles( theme => ({
   container: {
     flexDirection: 'row',
     marginBottom: 50,
     padding: 20,
     [theme.breakpoints.up('lg')]:{
       flexDirection: 'row',
     }
   },
   sectionEightCol: {
     minHeight: 500,
     width: '100%',
     '&.first-col':{

       [theme.breakpoints.up('lg')]:{
         marginRight: 20,
         width: '100%',
         flexDirection: 'row',
         display: 'flex'
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

     }
   },
 })
);

const SectionEight = ()=>{

  const classes = useStyle();

  const dispatch = useDispatch();
  const articleProfiles = useSelector( ({data}) => data.contents.articleProfilesState );

  const [articleProfilesData, setArticleProfilesData] = useState(articleProfiles);

  useEffect(()=>{
    dispatch(Actions.getArticleProfiles())
  },[dispatch])

  useEffect(()=>{
    setArticleProfilesData(articleProfiles)
  },[articleProfiles])

  if( !articleProfilesData ){
    return <h1> Loading... </h1>
  }
  return(
    <div>
      <div className={clsx(classes.container)}>
        <AppIconHeader title="profiles" />
        <div className={clsx(classes.sectionEightCol, "first-col")}>
            {articleProfilesData.map((key, index)=>{
              return(
                <div style={{flex:1}} key={index}>
                  <CenterTeaserThumb content={key} />
                </div>
              )
            })}
            <div style={{flex:1}} >
              <ThreeByTwoAd width={'75%'}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(SectionEight)
