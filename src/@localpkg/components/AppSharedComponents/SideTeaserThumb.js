import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link, withRouter} from 'react-router-dom';
import clsx from 'clsx';

import {AppPremIcon} from './AppPremIcon';
import {AppTags} from './AppTags';

function SideTeaserThumb( props ){

  const sideThumbStyles = makeStyles(theme => ({
      root:{
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 20,
        marginBottom: 50,
        borderBottom: '1px solid #7d7d7d',
        minHeight: props.minHeight
      },
      thumbImg:{
        position: 'relative',
        marginBottom: '20px',
        overflow: 'hidden',
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
        width: '65%',
        paddingLeft: 20,
      },
      title:{
        color: '#4d4d4f !important',
        textTransform: 'capitalize',
        cursor: 'pointer',
        fontWeight:'900',
        marginBottom: '10px',
      },
      postOn:{
        color: '#000 !important',
        fontWeight: 'bold'
      }
    })
  )

  const classes = sideThumbStyles();

  function link(){

    const contentType = props.content.contentType ? props.content.contentType.toLowerCase() : 'none';
    const title = props.content.title ? props.content.title.replace(/\s|\?+/g, '-').toLowerCase() : 'noTitle';
    const id = props.content.id ? props.content.id : '50344';
    return(
      '/article/'+ contentType +'/'+  title +'/'+ id
    )
  }

  return(
    <div className={clsx(classes.root)}>
      <div className={clsx(classes.thumbImg)}>
        {props.content.gated === true && (
            <AppPremIcon />
        )}
        <Link to={link()}>
          <img className={clsx(classes.image)} src={props.content.field_img.src} title={props.content.imageTitle} alt="SideTeaserThumb"/>
        </Link>
      </div>
      <div className={clsx(classes.thumbContent)}>
        <Link to={link()}>
          <h3 className={clsx(classes.title)}>
            {props.content.title}
          </h3>
        </Link>
        <div dangerouslySetInnerHTML={{__html: props.content.summary }} />

        <div>
          <br />
          <AppTags tags={props.content.tags} />
          <span className={clsx(classes.postOn)}> {props.content.publishedOn}</span>
        </div>
      </div>
     </div>
  )
}

export default withRouter(SideTeaserThumb)

SideTeaserThumb.defaultProps = {
    minHeight: 250,
    content:{
     id        : 1,
     title     : 'Employe Confidence At lowest level in two years, Reports gartner',
     image     : 'https://www.recruiter.co.uk/sites/default/files/web-boris-wins-election-pa-48997440.jpg',
     imgTitle  : 'shorter working week works',
     summary   : 'Employee confidence in UK business conditions and economic prospects stayed at their lowest level in two years during the third quarter of the year, according to global research and advisory firm Gartner.',
     body      : 'According to the ‘3Q19 Gartner Talent Report’, people management ranked as the top reason employees decide to leave an organisation (35.2%) in the UK. This is followed by work-life balance (34.7%) and manager quality (34.1%). Compensation ranked as a lesser driver of attrition, with only 27.4% of employees reporting that as the reason they left their employer, significantly lower than the global average of 36.6%. Meanwhile, when considering a new job, work-life balance (59.5%), location (53.6%) and respect (32.7%) were the top considerations for UK employees.',
     publishedOn : '13 December 2019',
     terms     : 'news'
    }
 }
