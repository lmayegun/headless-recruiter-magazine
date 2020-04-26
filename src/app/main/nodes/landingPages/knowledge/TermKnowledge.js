import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import {
        FusePageSimple,
        SideTeaserThumb,
        CenterTeaserThumb,
        ThreeByTwoAd,
        AppIconHeader,
        AppLatestJobs,
        AppMostPopular,
        AppFeaturedRecruiters,
        AppSubNav
      } from '@localpkg';

import * as Actions from 'app/main/nodes/store/actions';
import withReducer from 'app/store/withReducer';
import {reducer} from 'app/main/nodes/store/reducers';
import {useDispatch, useSelector} from 'react-redux';


const useStyles = makeStyles( theme => ({
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
 })
);

function Term(props){

  const termTitle = props.match.params.term;

  const dispatch = useDispatch();

  const paramId = props.match.params.id;

  const knowledgeTerms = useSelector( ({data}) => data.taxonomy.knowledgeTermsState  );
  const termTopThree = useSelector( ({data}) => data.taxonomy.termNewsTopThreeState  );
  const termTopSix = useSelector( ({data}) => data.taxonomy.termNewsTopSixState  );

  const [knowledgeTermsData, setKnowledgeTermsData] = useState(knowledgeTerms);
  const [termTopThreeData, setTermTopThreeData] = useState(termTopThree);
  const [termTopSixData, setTermTopSixData] = useState(termTopSix);

  useEffect(()=>{
   dispatch(Actions.getKnowledgeTerms())
   dispatch(Actions.getTermTopThree(paramId))
   dispatch(Actions.getTermTopSix(paramId))
 },[dispatch, paramId])

  useEffect (()=>{
    setKnowledgeTermsData(knowledgeTerms);
    setTermTopThreeData(termTopThree);
    setTermTopSixData(termTopSix);
  },[knowledgeTerms, termTopThree, termTopSix])

  const classes = useStyles();

  if(!termTopThreeData){
    return null
  }

  if(!termTopSixData){
    return null
  }

  if(!knowledgeTermsData){
    return null
  }

  return(
    <div>
      {knowledgeTermsData.length > 0 && (
        <AppSubNav terms={knowledgeTermsData} />
      )}
      <FusePageSimple
        featuredContents={
          <div>
            <AppIconHeader title={termTitle} />
            <div className={clsx(classes.container)}>
              {
                termTopThreeData.map((key, index)=>{
                  return(
                    <div className="lg:w-1/2 sm:w-full pr-24" key={index}>
                      <CenterTeaserThumb content={key}/>
                    </div>
                  )
                })
              }
            </div>
          </div>
        }

        content={
          <div className="flex flex-wrap" >
            {
              termTopSixData.map((key, index)=>{
                return(
                  <div className="w-1/2 pr-24" key={index}>
                    <SideTeaserThumb content={key}/>
                  </div>
                )
              })
            }
          </div>
        }

        rightSidebarContent={
          <div>
            <ThreeByTwoAd />
            <br />
            <ThreeByTwoAd />
            <br />
            <ThreeByTwoAd />
            <br />
            <AppIconHeader title="most popular"/>
            <AppMostPopular liClasses={'width-full'}/>
            <br />
            <ThreeByTwoAd />
            <br />
            <AppIconHeader title="latest jobs"/>
            <AppLatestJobs />
            <br />
            <br />
            <br />
            <AppIconHeader title="featured recruiters"/>
            <AppFeaturedRecruiters />
          </div>
        }
      />
    </div>
  )
}

export default withReducer('data', reducer)(Term)
