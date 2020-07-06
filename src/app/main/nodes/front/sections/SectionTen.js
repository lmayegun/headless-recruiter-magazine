import React,{useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import * as Actions from './store/actions';
import withReducer from 'app/store/withReducer';
import {reducer} from './store/reducers';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';

import { SideTeaserThumb, AppIconHeader} from '@localpkg';

const useStyles = makeStyles( theme => ({
   container: {
     display: 'flex',
     flexDirection: 'column',
     marginBottom: 50,
     padding: 20,
     [theme.breakpoints.up('lg')]:{
       flexDirection: 'row',
     }
   },
   sectionTenCol: {
     minHeight: 500,
     width: '100%',
     '&.first-col':{
       [theme.breakpoints.up('lg')]:{
         marginRight: 20,
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

const SectionTen = ()=>{
  const classes = useStyles();

  const dispatch = useDispatch();
  const opinionTopThree = useSelector( ({data}) => data.home.opinionTopThreeState );
  const indepthTopThree = useSelector( ({data}) => data.home.indepthTopThreeState );
  const lighterSideTopThree = useSelector( ({data}) => data.home.lighterSideTopThreeState );

  const [opinionData, setOpinionData] = useState(opinionTopThree);
  const [indepthData, setIndepthData] = useState(indepthTopThree);
  const [lighterSideData, setLighterSideData] = useState(lighterSideTopThree);

  useEffect(()=>{
    dispatch(Actions.getOpinionTopThree({category:'knowledge', tag:'opinion'}));
    dispatch(Actions.getIndepthTopThree({category:'knowledge', tag:'indepth'}));
    dispatch(Actions.getLighterSideTopThree({category:'knowledge', tag:'lighterside'}));
  },[dispatch])

  useEffect(()=>{
    setOpinionData(opinionTopThree);
    setIndepthData(indepthTopThree);
    setLighterSideData(lighterSideTopThree);
  },[opinionTopThree, indepthTopThree, lighterSideTopThree])

  if( !opinionData || !indepthData || !lighterSideData){
    return <h1> Loading... </h1>
  }
  return(
      <div className={clsx(classes.container)}>
        <div className={clsx(classes.sectionTenCol, "first-col")}>
          <AppIconHeader title={'opinion'}/>
          {opinionData.map((key, index)=>{
            return(
                <SideTeaserThumb key={index} content={key} minHeight="210px" />
            )
          })}
        </div>

        <div className={clsx(classes.sectionTenCol, "second-col")}>
        <AppIconHeader title={'in depth'}/>
        {indepthData.map((key, index)=>{
          return(
              <SideTeaserThumb key={index} content={key} minHeight="210px" />
          )
        })}
        </div>

        <div className={clsx(classes.sectionTenCol, "third-col")}>
        <AppIconHeader title={'lighter side'}/>
        {lighterSideData.map((key, index)=>{
          return(
              <SideTeaserThumb key={index} content={key} minHeight="210px"/>
          )
        })}
        </div>

      </div>
  )
}

export default  withReducer('data', reducer)(React.memo(SectionTen))
