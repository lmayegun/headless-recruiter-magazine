import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles(theme=>({
    root:{
      background:'#c1b49a',
      padding:'20px',
      marginBottom: '20px'
    },
    container:{
      width:'1240px',
      margin:'auto',
    },
    ul:{
      listStyle: 'none',
      textAlign: 'center',
    },
    li:{
      display: 'inline',
      paddingRight: '20px',
      textTransform: 'uppercase',
      '& a': {
        color: '#000000 !important'
      }
    }
  })
);

function AppSubNav( {terms} ){

  const classes = useStyles()

  return(
    <div className={clsx(classes.root)}>
      <div className={clsx(classes.container)}>
      <ul className={clsx(classes.ul)}>
        {
          terms.map((term, index)=>{
            return(
              <li className={clsx(classes.li)} key={term.id}>
                <Link to={"/" + term.vocabularyName.toLowerCase() + "/" + term.id }>
                  {term.name}
                </Link>
              </li>
            )
          })
        }
        </ul>
      </div>
    </div>
  )
}

export default AppSubNav
