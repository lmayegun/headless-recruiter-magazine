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
        width:'35px'
      },
      wrapperMenu:{
         display: 'flex',
         flexDirection: 'column',
         background:'#000000',
         fontWeight:'1000',
         color:'#fff',
         position:'absolute',
         zIndex:9,
         left:-270,
         top:-42,
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
      theRef.current.classList.add("show")
    }else if( !checked ){
      theRef.current.classList.remove("show")
    }
  },[checked])

  const classes = useStyles();

  return(
    <div className={clsx(classes.root)}>
      <Icon className={clsx(classes.menuIcon)}  onClick={handleChange}>menu</Icon>
       <Fade in={checked} ref={theRef} className={clsx(classes.wrapperMenu)} >
         <div>
           <div style={{background:'#c1b49a', fontWeight:'1000', color:'#000'}}>
             <h2 style={{color:'#000', letterSpacing:'-1px', fontWeight:'1000', padding:'20px'}}> DISCOVER <Icon className="float-right relative" onClick={handleChange}>close</Icon> </h2>
           </div>
            <FuseNavigation />
         </div>
       </Fade>
     </div>
  )
}

export default ExtraNav;
