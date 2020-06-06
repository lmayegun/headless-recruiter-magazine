import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {withRouter} from 'react-router-dom';
import clsx from 'clsx';

function AppMostPopular( props ){

  const useStyles = makeStyles(theme => ({
      root:{
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 20,
        marginBottom: 20,
      },
      ul:{
        listStyle: 'none',
        marginLeft: '-40px',
      },
      li:{
        float: 'left',
        height: '100px',
        marginBottom: '30px',
        width: '100%',
        [theme.breakpoints.up('lg')]:{
          width: '50%',
        },
        '&.width-full':{
          width: '100%',
        },
        '& .numbered' : {
          fontSize: '4em',
          marginRight: '20px',
          marginTop:'10px',
          float: 'left',
          fontFamily: 'Kommissar Cond Web,Helvetica,Arial,sans-serif',
        },
        '& .colored1':{
          color: '#3fac49',
        },
        '& .colored2':{
          color: '#eb3014',
        },
        '& .colored3':{
          color: '#f37920',
        },
        '& .colored4':{
          color: '#7581bf',
        },
        '& .colored5':{
          color: '#19bdc9',
        },
        '& .colored6':{
          color: '#929497',
        },
        '& .title':{
          marginLeft: '50px',
          marginRight: '50px',
          minHeight: '65px',
          borderBottom: '1px solid #7d7d7d',
        },
        '&.title-mr-none .title':{
          marginRight: '0px',
        }
      },
    })
  )

  const classes = useStyles()

  function handleClick(e){
    alert(e.id)
    props.history.push(e.contentType +'/'+ e.title.replace(/\s+/g, '-').toLowerCase() +'/'+ e.id)
  }

  return (
    <div>
      <ul className={clsx(classes.ul)}>
      { props.content &&
        (
          props.content.map((key, index)=>{
            return(
              <React.Fragment key={index}>
                <li className={clsx(classes.li, props.liClasses)}>
                  <div className={`numbered colored${index+1}`}>{index+1}</div>
                  <div className="title"><h4 onClick={ event => handleClick(key)}>{key.title}</h4></div>
                </li>
              </React.Fragment>
            )
          })
        )
      }
      </ul>
    </div>
  )
}

AppMostPopular.defaultProps = {

}

export default withRouter(AppMostPopular)
