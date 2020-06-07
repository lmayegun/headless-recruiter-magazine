import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Typography} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom';
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
    const title = magazine.name ? magazine.name.replace(/\?+/g, '_').toLowerCase() : 'noTitle';
    const id = magazine.id ? magazine.id : '50344';
    return(
      '/magazine/'+ title +'/'+ id
    )
  }

  const img = magazine.field_cover ? magazine.field_cover.src : magazine.cover;

  return(
    <div>
      <div className={clsx(classes.wrapper)}>
        <div className={clsx(classes.title)}>
          {longTitleLength ? (
            <Link to={link()}>
              <Typography variant='h3' className={clsx(classes.longTitleLength)}>{magazine.name}</Typography>
            </Link>
          ): (
            <Link to={link()}>
              <Typography variant='h3' className={clsx(classes.link)}>{magazine.name}</Typography>
            </Link>
          )}
        </div>
        <div>
          <Link to={link()}>
            <img className={clsx(classes.img)} src={img} alt="app mag cover"/>
          </Link>
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
