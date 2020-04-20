import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import {AppIconHeader, AppIcon } from '@localpkg';

export default function SubscribeMag(props){

  const subsMagStyles = makeStyles(theme => ({
      root:{
        background: '#efece6',
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        marginBottom: 20,
      },
      thumbImg:{

      },
      thumbContent:{
        width: '85%',
        paddingLeft: 20
      },
      title:{
        fontWeight: '1000',
      }
    })
  )

  const featuredMagImg  = props.data[0].field_cover.src;
  const featuredMagDesc = props.data[0].termdescription;

  const classes = subsMagStyles()

  return (
    <div className={clsx(classes.root)}>
      <div className={clsx(classes.thumbImg)}>
        <Link to='/'>
          <img src={featuredMagImg} alt="subscribe magazine"/>
        </Link>
      </div>
      <div className={clsx(classes.thumbContent)}>
        <AppIconHeader title={'recruiter magazine'}/>
        <div className='float-left'><AppIcon iconPos={'0 -2454px'}/></div>
        <h3>
          <Link to='/'> SUBSCRIBE TO PRINT</Link>
        </h3>
        <div style={{marginTop:'25px'}}>{featuredMagDesc}</div>
      </div>
     </div>
  )
}
