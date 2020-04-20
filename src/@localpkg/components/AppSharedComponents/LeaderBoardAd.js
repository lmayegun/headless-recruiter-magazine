import React from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';

export default function LeaderBoardAd(){

  const leaderBoardStyles = makeStyles(theme => ({
      root:{
        display: 'flex',
        flexDirection: 'row',
      },
      adWrapper:{
        textAlign: 'center',
        width: '100%',
        padding: '20px'
      },
    })
  )

  const classes = leaderBoardStyles()

  return(
    <div className={clsx(classes.root)}>
      <div className={clsx(classes.adWrapper)}>
        <img src="https://assets.adnuntius.com/FSAJZrEJUP3r6v_sxRW_OXeEf9rL0scvOgJhEAUG4PU.gif" alt="Leaderboard"/>
      </div>
    </div>
  )
}
