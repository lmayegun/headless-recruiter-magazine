import React from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';

export default function ThreeByTwoAd( props ){
  const initImg = "https://assets.adnuntius.com/7s0GfaoVHAF0LFYR2hNO6XKc98m6KkRgAp8rCeIcpe4.png";
  const {imgPath = initImg } = props 
  const threeByTwoStyles = makeStyles(theme => ({
      root:{
        flexDirection: 'column',
        paddingBottom: 20,
        marginBottom: 20,
      },
      adSpace:{
        width: '100%',
      },
      adImg:{
        margin: 'auto',
        textAlign: 'center',
      }
    })
  )

  const classes = threeByTwoStyles()

  return(
    <div className={clsx(classes.root)}>
      <div className={clsx(classes.adSpace)}>
        <div className={clsx(classes.adImg)}>
          <img src={imgPath} width={props.width} alt="three by two ads space"/>
        </div>
      </div>
    </div>
  )
}

ThreeByTwoAd.defaultProps = {
  width: '100%'
}
