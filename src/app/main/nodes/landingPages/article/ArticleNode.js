import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import {
        FusePageSimple,
        ThreeByTwoAd,
        AppIconHeader,
        AppLatestJobs,
        AppArticle
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
   sectionOneCol: {
     background: '#c1b49a',
     minHeight: 600,
     width: '100%',
     marginBottom: 20,
     '&.big-story':{
       [theme.breakpoints.up('lg')]:{
         width: '150%',
         order: '1',
         marginRight: 20,
       }
     },
     '&.second-col':{
       [theme.breakpoints.up('lg')]:{
         order: '0',
         marginRight: 20,
         paddingRight: 40
       }
     },
     '&.third-col':{
       [theme.breakpoints.up('lg')]:{
         order: '2',
         paddingLeft: 40
       }
     },
     [theme.breakpoints.up('md')]: {
       background: 'yellow'
     },
     [theme.breakpoints.up('lg')]: {
       background: 'none',
     }
   },
   sectionTwoCol: {
     minHeight: 200,
     width: '100%',
     '&.first-col':{
       [theme.breakpoints.up('lg')]:{
         marginRight: 20,
         width: '80%'
       }
     },
     '&.second-col':{
       [theme.breakpoints.up('lg')]:{
         marginRight: 20,
         width: '80%'
       }
     },
     '&.third-col':{
       [theme.breakpoints.up('lg')]:{
         marginRight: 20,
         width: '80%'
       }
     },
     [theme.breakpoints.up('md')]: {

     },
     [theme.breakpoints.up('lg')]: {

     }
   },
   sectionThreeCol: {
     background: '#c1b49a',
     minHeight: 500,
     width: '100%',
     '&.first-col':{
       [theme.breakpoints.up('lg')]:{
         marginRight: 20,
         width: '200%'
       }
     },
     '&.second-col':{
       [theme.breakpoints.up('lg')]:{

       }
     },
     [theme.breakpoints.up('md')]: {
       background: 'yellow'
     },
     [theme.breakpoints.up('lg')]: {
       background: 'none',
     }
   },
   sectionFourCol: {
     background: '#c1b49a',
     minHeight: 100,
     width: '100%',
     '&.first-col':{
       [theme.breakpoints.up('lg')]:{
       }
     },
     [theme.breakpoints.up('md')]: {
       background: 'yellow'
     },
     [theme.breakpoints.up('lg')]: {
       background: '#c1b49a',
       padding: '70px',
     }
   },
   sectionFiveCol: {
     background: '#c1b49a',
     minHeight: 500,
     width: '100%',
     '&.first-col':{
       [theme.breakpoints.up('lg')]:{

       }
     },
     [theme.breakpoints.up('md')]: {
       background: 'yellow'
     },
     [theme.breakpoints.up('lg')]: {
       background: '#c1b49a',
     }
   },
   sectionSixCol: {
     background: '#c1b49a',
     minHeight: 500,
     width: '100%',
     '&.first-col':{
       [theme.breakpoints.up('lg')]:{

       }
     },
     [theme.breakpoints.up('md')]: {
       background: 'yellow'
     },
     [theme.breakpoints.up('lg')]: {
       background: '#c1b49a',
     }
   },
   sectionSevenCol: {
     background: '#c1b49a',
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
       background: 'yellow'
     },
     [theme.breakpoints.up('lg')]: {
       background: '#c1b49a',
     }
   },
   sectionEightCol: {
     background: '#c1b49a',
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
       background: 'yellow'
     },
     [theme.breakpoints.up('lg')]: {
       background: '#c1b49a',
     }
   },
   sectionNineCol: {
     background: '#c1b49a',
     minHeight: 300,
     width: '100%',
     '&.first-col':{
       [theme.breakpoints.up('lg')]:{

       }
     },
     [theme.breakpoints.up('md')]: {
       background: 'yellow'
     },
     [theme.breakpoints.up('lg')]: {
       background: '#c1b49a',
     }
   },
   sectionTenCol: {
     background: '#c1b49a',
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
       background: 'yellow'
     },
     [theme.breakpoints.up('lg')]: {
       background: '#c1b49a',
     }
   },
   leaderBoard:{
     background:'#c1b49a',
     minWidth: '60%',
     minHeight: 80,
     margin: 'auto',
     display: 'none',
     [theme.breakpoints.up('md')]:{
       display: 'block'
     },
   }
 })
);

function ArticleNode( props ){
  const classes = useStyles();

  const dispatch  = useDispatch();
  const id        = props.match.params.id;
  const category  = props.match.params.contenttype;
  const content   = useSelector( ({content}) => content.content.contentState );

  const [article, setArticle] = useState(content);

   useEffect(()=>{
     dispatch(Actions.getContent({id,category}))
   },[dispatch])

   useEffect(()=>{
     setArticle(content);
   },[content])

   if(!article){
     return <h1> Loading... </h1>
   }

  return(
    <div>
      <div className={clsx(classes.container)} >

      </div>
      <FusePageSimple

        content={
          <div className="flex flex-wrap" >
            <AppArticle article={article}/>
          </div>
        }

        rightSidebarContent={
          <div>
            <ThreeByTwoAd />
            <AppIconHeader title="latest jobs"/>
            <AppLatestJobs />
            <ThreeByTwoAd />
          </div>
        }
      />
    </div>
  )
}

export default withReducer('content', reducer)(ArticleNode)
