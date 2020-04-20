import React from 'react';
import {Icon} from '@material-ui/core';
// import clsx from 'clsx';

export default function ScrollTop( props ){

  return(
    <div style={{ right: '50px',
                  position:'fixed',
                  bottom:'100px',
                  background: 'black',
                  zIndex:'9',
                  padding: '8px 12px'
                }}>
      <Icon style={{ color: 'white'
                    }}>keyboard_arrow_up</Icon>
    </div>
  )
}
