import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import {AppIconHeader, AppIcon } from '@localpkg';

export default function SubscribeMag({data}){

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
      subLink:{
        display: 'flex',
      },
      title:{
        fontWeight: '1000',
      }
    })
  )

  const featuredMagImg  = 'https://www.recruiter.co.uk/sites/default/files/styles/medium/public/rec_junjul20_linkedversion.jpg?itok=us_k97eC';
  const featuredMagDesc = data[0].description;

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
        <div className={clsx(classes.subLink)}>
          <div className='float-left'><AppIcon iconPos={'0 -2454px'}/></div>
          <h3 style={{marginTop:5}}>
            <Link to='/'> SUBSCRIBE TO PRINT</Link>
          </h3>
        </div>
        <div>{featuredMagDesc}</div>
      </div>
     </div>
  )
}
