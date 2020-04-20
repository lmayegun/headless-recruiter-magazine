import React from 'react';
import {makeStyles} from '@material-ui/styles';
// import clsx from 'clsx';

export default function AppArticle( props ){

  const style = makeStyles(theme=>({
    contentWrapper: {
      '& p': {
        marginBottom: 20,
        color: 'black',
      }
    }
  }))

  const classes = style()

  return(
    <div style={{paddingRight: '50px'}}>
      <div> News / Knowledge / Latency </div>
      <br />
      <div dangerouslySetInnerHTML={{__html: '<h1>'+ props.article[0].title +'</h1>' }} />
      <br />
      <div> { props.article[0].author } | { props.article[0].created } </div>
      <br />
      <div>
        <img src={props.article[0].image ? props.article[0].image.src : ''} width="100%" alt="App Article src"/>
      </div>
      <div dangerouslySetInnerHTML={{__html: '<div class="font-14px" style="font-size: 20px; font-weight:bold; margin-top:20px;">' + props.article[0].summary + '</div>'}} />
      <br />
      <div  className={ classes.contentWrapper } dangerouslySetInnerHTML={{__html: '<div class="font-18px" style="font-size: 16px;">' + props.article[0].body + '</div>'}} />
    </div>
  )
}
