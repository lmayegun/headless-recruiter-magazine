import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';

import { CenterTeaserThumb, FusePageSimple } from '@localpkg';

const styles = makeStyles( ( theme ) =>{
  return ({
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
  }
);


function Example( props ){
  const classes = styles();
  return (
    <div className={clsx(classes.container, 'container')}>
      <FusePageSimple
        content={
          <CenterTeaserThumb />
        }
      />

    </div>
  )

}

export default Example;
