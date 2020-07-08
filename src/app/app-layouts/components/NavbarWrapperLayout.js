import React from 'react';
import {Paper, Hidden, createMuiTheme} from '@material-ui/core';
import {makeStyles, ThemeProvider} from '@material-ui/styles';

import NavbarLayout from './NavbarLayout';
import NavMobile from './NavMobile';
import {colorDark} from '@localpkg/app-colors'

const useStyles = makeStyles(theme => ({
    navbar      : {
        display   : 'flex',
        minHeight : 110,
        alignItems: 'center',
        zIndex    : 6,
    }
}));

const NavbarWrapperLayout = (props) => {

  const classes = useStyles(props);
  const theme = createMuiTheme({
    palette:{
      primary:{
        main:colorDark[900]
      },
      secondary:{
        main:colorDark['A400']
      },
      background:{
        paper:colorDark[900],
      },
      text:{
        primary:'white',
        secondary: colorDark[900]
      },
      action:{
        active:colorDark[50],
      },
    },
    typography:{
      fontSize:12,
      fontFamily: ['Euclid Flex','Roboto','"Helvetica"','Arial','sans-serif'].join(','),
      body1:{
        fontFamily : ['Euclid Flex','Roboto','"Helvetica"','Arial','sans-serif'].join(','),
      },
      h1:{
        fontFamily : ['Euclid Flex','Roboto','"Helvetica"','Arial','sans-serif'].join(','),
      },
      h2:{
        fontFamily : ['Euclid Flex','Roboto','"Helvetica"','Arial','sans-serif'].join(','),
      },
      h3:{
        fontFamily : ['Kommissar Cond Web','Roboto','"Helvetica"','Arial','sans-serif'].join(','),
        fontSize: '1.7em',
      },
      h4:{
        fontFamily : ['Euclid Flex','Roboto','"Helvetica"','Arial','sans-serif'].join(','),
      },
      h5:{
        fontFamily : ['Euclid Flex','Roboto','"Helvetica"','Arial','sans-serif'].join(','),
      },
      h6:{
        fontFamily : ['Kommissar Cond Web','Roboto','"Helvetica"','Arial','sans-serif'].join(','),
      }
    },
    status: {
      danger: 'red',
    },
  })
  return(
    <ThemeProvider theme={theme}>
      <Hidden mdDown>
        <Paper className={classes.navbar} square={true}>
          <NavbarLayout />
        </Paper>
      </Hidden>
      <Hidden lgUp>
        <Paper className={classes.navbar} square={true}>
          <NavMobile />
        </Paper>
      </Hidden>
    </ThemeProvider>
  )
}

export default NavbarWrapperLayout;
