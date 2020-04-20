import React from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';

export function AppTags( props ){

  const useStyles = makeStyles( theme =>({
      tag: {
        color     : 'red !important',
        textTransform: 'uppercase',
        fontSize: '11px',
        marginBottom: '20px',
        fontWeight: '800'
      },
      tagsWrapper:{
        float: 'left',
        marginRight: '10px',
      }
    })
  )
  const tags = props.tags.split(",").slice(0,3);
  const classes = useStyles()

  return(
    <div className={clsx(classes.tagsWrapper)}>
      { tags.map(function(key, index){
        if (tags.length === index + 1) {
          // last one
          return (
            <a href="/" key={index} className={clsx(classes.tag)}> {key} </a>
          )
        } else {
          // not last one
          return (
            <a href="/" key={index} className={clsx(classes.tag)}> {key} , </a>
          )
        }
        })
      }
    </div>
  )
}

AppTags.defaultProps = {
  tags :""
}
