import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {withRouter, Link} from 'react-router-dom';
import clsx from 'clsx';

export function AppTags({tags}){

  const useStyles = makeStyles( theme =>
    ({
      tag: {
        color     : 'red !important',
        textTransform: 'uppercase',
      },
      tagsWrapper:{
        float: 'left',
        marginRight: '10px',
        marginBottom: '15px',
      }
    })
  )

  const classes = useStyles()


  if(!tags){
    return null
  }

  return(
    <div className={clsx(classes.tagsWrapper)}>
      {tags.id != null &&
        <Link to="" className={clsx(classes.tag)}>
          {tags.name}
        </Link>
      }
      {tags.id === null &&
        <>
          {tags.name}
        </>
      }
    </div>
  )
}

AppTags.defaultProps = {}
