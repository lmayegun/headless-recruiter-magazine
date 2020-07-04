import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Typography} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import clsx from 'clsx';

function AppMagCover( {magazine, longTitleLength} ){

  const useStyles = makeStyles( theme => ({
      wrapper:{
        padding: '0 20px'
      },
      title:{
        paddingBottom: '20px',
        borderBottom: '1px solid #000',
        marginBottom: '20px',
        textAlign: 'center',
        textTransform: 'capitalize'
      },
      link:{
        cursor: 'pointer',
      },
      longTitleLength:{
        cursor: 'pointer',
        fontSize: '12px',
        minHeight: '38px',
      },
      img:{
        width: "100%",
        cursor: 'pointer',
      }
    })
  )

  const classes = useStyles()

  function link(){
    const link = magazine.link ? magazine.link : "https://issuu.com/redactive/docs/rec_junjul20_linkedversion?fr=sMTQyMDY3MzMwMA"
    return(link)
  }

  const img = magazine.field_cover ? magazine.field_cover.src : 'https://www.recruiter.co.uk/sites/default/files/styles/medium/public/rec_junjul20_linkedversion.jpg?itok=us_k97eC';

  return(
    <div>
      <div className={clsx(classes.wrapper)}>
        <div className={clsx(classes.title)}>
          {longTitleLength ? (
            <a href={link()} target="_blank" rel="noopener noreferrer">
              <Typography variant='h3' className={clsx(classes.longTitleLength)}>{magazine.name}</Typography>
            </a>
          ): (
            <a href={link()} target="_blank" rel="noopener noreferrer">
              <Typography variant='h3' className={clsx(classes.link)}>{magazine.name}</Typography>
            </a>
          )}
        </div>
        <div>
          <a href={link()} target="_blank" rel="noopener noreferrer">
            <img className={clsx(classes.img)} src={img} alt="app mag cover"/>
          </a>
        </div>
      </div>
    </div>
  )
}

AppMagCover.deafultProps = {
  default: {
    cover: "",
  }
}

export default withRouter(AppMagCover)
