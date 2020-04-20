import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Typography} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom';
import clsx from 'clsx';

AppMagCover.deafultProps = {
  default: {
    cover: "",
  }
}

function AppMagCover( props ){

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
  const longTitleLength = props.longTitleLength ? true : false;

  function link(){
    const title = props.magazine.name ? props.magazine.name.replace(/\?+/g, '_').toLowerCase() : 'noTitle';
    const id = props.magazine.id ? props.magazine.id : '50344';
    return(
      '/magazine/'+ title +'/'+ id
    )
  }

  const img = props.magazine.field_cover ? props.magazine.field_cover.src : props.magazine.cover;

  return(
    <div>
      <div className={clsx(classes.wrapper)}>
        <div className={clsx(classes.title)}>
          {longTitleLength ? (
            <Link to={link()}>
              <Typography variant='h6' className={clsx(classes.longTitleLength)}>{props.magazine.name}</Typography>
            </Link>
          ): (
            <Link to={link()}>
              <Typography variant='h6' className={clsx(classes.link)}>{props.magazine.name}</Typography>
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

export default withRouter(AppMagCover)
