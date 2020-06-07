import React from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';

export function AppTags({tags}){

  const useStyles = makeStyles( theme =>
    ({
      tag: {
        color     : 'red !important',
        textTransform: 'uppercase',
        fontSize: '11px',
        fontWeight: '800'
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
    return <h6> no tags </h6>
  }

  const tag = tags.split(",").slice(0,3);

  return(
    <div className={clsx(classes.tagsWrapper)}>
      { tag.map(function(key, index){
        if (tag.length === index + 1) {
          return (
            <a href="/" key={index} className={clsx(classes.tag)}> {key} </a>
          )
        } else {
          return (
            <a href="/" key={index} className={clsx(classes.tag)}> {key} , </a>
          )
        }
        })
      }
    </div>
  )
}

AppTags.defaultProps = {}
