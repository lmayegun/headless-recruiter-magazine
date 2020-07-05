import React, {useEffect, useRef, useState} from 'react';
import {makeStyles, Icon, Fade} from '@material-ui/core';
import clsx from 'clsx';

import {FuseNavigation} from '@localpkg';

const ExtraNav = () => {
  const useStyles = makeStyles( theme =>{
    return({
      root: {
        width: '1px',
        position: 'relative',
      },
      menuIcon:{
        width:'35px',
        fontSize:'50px',
        color:'white',
        marginTop: '6px'
      },
      wrapperMenu:{
         display: 'flex',
         background:'#000',
         flexDirection: 'column',
         fontWeight:'1000',
         position:'absolute',
         zIndex:9,
         left:-265,
         top:-25,
         width: 300,
       }
    })
  });

  const theRef = useRef()
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(prev =>!prev)
  };

  useEffect(()=>{
    if( checked ){
      // theRef.current.classList.add("show")
    }else if( !checked ){
      // theRef.current.classList.remove("show")
    }
  },[checked])

  const classes = useStyles();

  const navigation = [
    {
      'id':'article',
      'type':'collapse',
      'title': 'ARTICLE TYPE',
      'children':[
        {
          'id'      : 'opinion',
          'title'   : 'Opinion',
          'type'    : 'item',
          'url'     : '/knowledge/opinion',
        },
        {
          'id'      : 'uk-ireland',
          'title'   : 'Whitepapers',
          'type'    : 'item',
          'url'     : '/knowledge/whitepapers',
        },
        {
          'id'      : 'contracts',
          'title'   : 'Advice',
          'type'    : 'item',
          'url'     : '/knowledge/advice',
        },
        {
          'id'      : 'financials',
          'title'   : 'Rec',
          'type'    : 'item',
          'url'     : '/knowledge/rec',
        },
        {
          'id'      : 'legislation',
          'title'   : 'Analysis',
          'type'    : 'item',
          'url'     : '/knowledge/analysis',
        }
      ]
    },
    {
      'id':'news',
      'type':'collapse',
      'title': 'NEWS TYPE',
      'children':[
        {
          'id'      : 'lighter-side',
          'title'   : 'Lighter Side',
          'type'    : 'item',
          'url'     : '/news/lighter-side',
        },
        {
          'id'      : 'uk-ireland',
          'title'   : 'UK & Ireland',
          'type'    : 'item',
          'url'     : '/news/uk-ireland',
        },
        {
          'id'      : 'contracts',
          'title'   : 'Contracts',
          'type'    : 'item',
          'url'     : '/news/contracts',
        },
        {
          'id'      : 'financials',
          'title'   : 'Financials',
          'type'    : 'item',
          'url'     : '/news/financials',
        },
        {
          'id'      : 'legislation',
          'title'   : 'Legislation',
          'type'    : 'item',
          'url'     : '/news/legislation',
        }
      ]
    }
  ]

  return(
    <div className={clsx(classes.root)}>
      <Icon className={clsx(classes.menuIcon)}  onClick={handleChange}>menu</Icon>
       <Fade in={checked} ref={theRef} className={clsx(classes.wrapperMenu)} >
         <div>
           <div style={{background:'#c1b49a', fontWeight:'1000', color:'#000'}}>
             <h2 style={{color:'#000', letterSpacing:'-1px', fontWeight:'1000', padding:'20px'}}> DISCOVER <Icon className="float-right relative" onClick={handleChange}>close</Icon> </h2>
           </div>
            <FuseNavigation navigation={navigation}/>
         </div>
       </Fade>
     </div>
  )
}

export default ExtraNav;
