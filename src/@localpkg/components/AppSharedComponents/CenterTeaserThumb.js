import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Typography} from '@material-ui/core';
import {withRouter, Link} from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';

import {AppPremIcon} from './AppPremIcon';

function CenterTeaserThumb({content, type, imgHeight, descrLength}){

  const centerThumbStyles = makeStyles(theme => ({
      root:{
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 0,
        marginBottom: 50,
      },

      thumbImg:{
        width: '100%',
        position: 'relative',
        marginBottom: '0px',
        overflow: 'hidden',
      },
      image:{
        cursor: 'pointer',
        width: '100%',
        '&:hover':{
            transform: 'scale(1.2)',
            transition: 'all .4s',
          }
      },
      thumbContent:{
        width: '100%',
        textAlign: 'center',
      },
      title:{
        color: '#4d4d4f !important',
        marginTop: '20px',
        marginBottom: '15px',
        fontWeight: 'bold',
        fontSize: '1.45rem',
        fontFamily: 'Euclid Flex,Helvetica,Arial,sans-serif',
        cursor: 'pointer',
        line: '1.4',
      },
      type:{
        width: '65%',
        background: '#fafafa',
        textAlign: 'center',
        position: 'absolute',
        bottom: '0',
        left: '15%',
        padding: 10
      },
      typeText:{

      },
      postOn:{
        color: '#000 !important',
        fontWeight: 'bold',
        marginTop: 10
      }
    })
  )

  function link(){
    const contentType = content.category ? content.category.toLowerCase() : 'none';
    const title = content.title ? content.title.replace(/\s|\?|\\%+/g, '-').toLowerCase() : 'noTitle';
    const id = content.id ? content.id : '50344';
    return(
      '/article/'+ contentType +'/'+  title +'/'+ id
    )
  }

  const classes = centerThumbStyles();
  const category = content.source ? content.source.name : null

  return(
    <div className={clsx(classes.root)}>
      { type === 'featured' && (
        <React.Fragment>
          <div className={clsx(classes.thumbImg)}>
            {content.gated === true && (
                <AppPremIcon />
            )}

            <Link to={ link() } >
              <img className={clsx(classes.image)} src={content.urlToImage} title={content.imageTitle}  alt="center teaser"/>
            </Link>

            <div className={clsx(classes.type)}>
                <Typography
                  variant='h5'
                  className={clsx(classes.typeText, (type === 'featured' ? 'text-red' : 'text-black'))}>
                  {type === 'featured' && ("The Big Story")}
                </Typography>
            </div>
          </div>

          <div className={clsx(classes.thumbContent)}>
            <Link to={ link() } >
              <div className={clsx(classes.title)}>
                <Typography
                  variant={(type === 'featured' ? 'h4' : 'h6')}
                  className={clsx(classes.title)}
                  >
                  {content.title}
                </Typography>
              </div>
            </Link>

            <div dangerouslySetInnerHTML={{__html: content.description.substring(0, descrLength) + '...'}} />
            <div className={clsx(classes.postOn)}> {moment(`${content.publishedAt}`).format('D MMMM YYYY, hh:mm')} </div>
          </div>
        </React.Fragment>
      )}
      { type === 'normal' && (
        <React.Fragment>
          <div className={clsx(classes.thumbImg)}>
            {content.gated === true && (
                <AppPremIcon />
            )}

            <Link to={ link() } >
              <img className={clsx(classes.image)} src={content.urlToImage} title={content.imageTitle} alt="center teaser" height={imgHeight}/>
            </Link>

            <div className={clsx(classes.type)}>
              <Typography
                variant='h6'
                className={clsx(classes.typeText)}>
                {category}
              </Typography>
            </div>
          </div>

          <div className={clsx(classes.thumbContent)}>
            <Link to={ link() } >
              <div className={clsx(classes.title)}>
                <Typography
                  variant={'h3'}
                  className={clsx(classes.title)}
                  >
                  {content.title}
                </Typography>
              </div>
            </Link>
            <div dangerouslySetInnerHTML={{__html: content.description.substring(0, descrLength) + '...'}} />
            <div className={clsx(classes.postOn)}> {moment(`${content.publishedAt}`).format('D MMMM YYYY, hh:mm')} </div>
          </div>
        </React.Fragment>
      )}
    </div>
  )
}
CenterTeaserThumb.defaultProps = {
  descrLength: 200,
  type   : 'normal',
  content:    {
    "id": 0,
    "image": "https://www.recruiter.co.uk/sites/default/files/web-boris-wins-election-pa-48997440.jpg",
    "imageTitle": "shorter working week works",
    "title": "aliquip amet cupidatat ipsum",
    "summary": "ullamco consectetur ea Lorem consectetur labore pariatur incididunt ipsum sint in enim aute ut ex nulla exercitation irure elit in",
    "body": "Mollit anim est laborum aliqua adipisicing. Voluptate consequat eu ex qui eiusmod minim occaecat. Aliqua non aliquip voluptate aliquip dolor exercitation ipsum adipisicing nulla commodo incididunt exercitation.\r\n",
    "contentType": "news",
    "publishedOn": "06 January 2019",
    "published": false,
    "featured": true,
    "gated": false,
    "type": "Financials",
    "tags": [
      "hr",
      "ssk",
      "sales"
    ]
  }
}

export default withRouter(CenterTeaserThumb)
