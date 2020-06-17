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

function Term(){

  const dispatch = useDispatch();

  const knowledgeTerms = useSelector( ({terms}) => terms.knowledge.knowledgeTermsState  );
  const termTopThree = useSelector( ({terms}) => terms.knowledge.knowledgeTopThreeState  );
  const termTopSix = useSelector( ({terms}) => terms.knowledge.knowledgeTopSixState  );

  const [knowledgeTermsData, setKnowledgeTermsData] = useState(knowledgeTerms);
  const [termTopThreeData, setTermTopThreeData] = useState(termTopThree);
  const [termTopSixData, setTermTopSixData] = useState(termTopSix);

  useEffect(()=>{
   dispatch(Actions.getKnowledgeTerms())
   dispatch(Actions.getKnowledgeTopThree())
   dispatch(Actions.getKnowledgeTopSix())
  },[dispatch])

  useEffect (()=>{
    setKnowledgeTermsData(knowledgeTerms);
    setTermTopThreeData(termTopThree);
    setTermTopSixData(termTopSix);
  },[knowledgeTerms, termTopThree, termTopSix])

  const classes = useStyles();

  if(!termTopThreeData || !termTopSixData || !knowledgeTermsData ){
    return <h1> Loading... </h1>
  }

  return(
    <div>
      {knowledgeTermsData.length > 0 && (
        <AppSubNav terms={knowledgeTermsData} />
      )}
      <FusePageSimple
        featuredContents={
          <div>
            <AppIconHeader title={"knowledge"}/>
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
          <div>
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

 export default withReducer('terms', reducer)(Term)
