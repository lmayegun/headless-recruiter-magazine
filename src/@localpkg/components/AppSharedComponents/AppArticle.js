import React from 'react';
import {makeStyles} from '@material-ui/styles';
// import clsx from 'clsx';

export default function AppArticle( {article} ){

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
      <div dangerouslySetInnerHTML={{__html: '<h1>'+ article.title +'</h1>' }} />
      <br />
      <div> { article.author } | { article.publishedAt } </div>
      <br />
      <div>
        <img src={article.urlToImage ? article.urlToImage : ''} width="100%" alt="App Article src"/>
      </div>
      <div dangerouslySetInnerHTML={{__html: '<div class="font-14px" style="font-size: 20px; font-weight:bold; margin-top:20px;">' + article.description + '</div>'}} />
      <br />
      <div  className={ classes.contentWrapper } dangerouslySetInnerHTML={{__html: '<div class="font-18px" style="font-size: 16px;">' + article.content + '</div>'}} />
    </div>
  );
}
