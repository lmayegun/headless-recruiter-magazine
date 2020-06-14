import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link, withRouter} from 'react-router-dom';
import clsx from 'clsx';

import {AppPremIcon} from './AppPremIcon';
import {AppTags} from './AppTags';
import moment from 'moment';

function SideTeaserThumb( {content, minHeight, descrLength} ){

  const sideThumbStyles = makeStyles(theme => ({
      root:{
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 20,
        marginBottom: 50,
        borderBottom: '1px solid #7d7d7d',
        minHeight: minHeight
      },
      thumbImg:{
        position: 'relative',
        marginBottom: '20px',
        overflow: 'hidden',
      },
      summary:{
        marginTop: 15,
        marginBottom: 15,
      },
      image:{
        width: '115px',
        height: '100px',
        cursor: 'pointer',
        '&:hover':{
            transform: 'scale(1.2)',
            transition: 'all .4s',
          }
      },
      thumbContent:{
        display: 'flex',
        flexDirection: 'column',
        width: '65%',
        paddingLeft: 20,
      },
      title:{
        color: '#4d4d4f !important',
        textTransform: 'capitalize',
        cursor: 'pointer',
        fontWeight:'900',
        marginTop: '0px',
        marginBottom: '10px',
      },
      postOn:{
        fontWeight: 'bold'
      }
    })
  )

  const classes = sideThumbStyles();

  function link(){
    const contentType = content.contentType ? content.contentType.toLowerCase() : 'none';
    const title = content.title ? content.title.replace(/\s|\?|\%+/g, '-').toLowerCase() : 'noTitle';
    const id = content.id ? content.id : '50344';
    return(
      '/article/'+ contentType +'/'+  title +'/'+ id
    )
  }

  return(
    <div className={clsx(classes.root)}>
      <div className={clsx(classes.thumbImg)}>
        {content.gated === true && (
            <AppPremIcon />
        )}
        <Link to={link()}>
          <img className={clsx(classes.image)} src={content.urlToImage} title={content.imageTitle} alt="SideTeaserImg"/>
        </Link>
      </div>
      <div className={clsx(classes.thumbContent)}>
        <Link to={link()}>
          <h3 className={clsx(classes.title)}>
            {content.title.substring(0, 60) + '...'}
          </h3>
        </Link>
        <div className={clsx(classes.summary)} dangerouslySetInnerHTML={{__html: content.description.substring(0, descrLength) + '...' }} />
        <div>
          <AppTags tags={content.source} />
        </div>
        <div className={clsx(classes.postOn)}> {moment(`${content.publishedAt}`).format('D MMMM YYYY, hh:mm')} </div>
      </div>
     </div>
  )
}

export default withRouter(SideTeaserThumb)

SideTeaserThumb.defaultProps = {
  descrLength: 120
}
