import React from 'react';
import {Paper, Drawer, Hidden, Menu, MenuItem, Slide, Typography, Icon, createMuiTheme} from '@material-ui/core';
import {makeStyles, ThemeProvider} from '@material-ui/styles';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

import NavbarLayout from './NavbarLayout';

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
      background:{
        paper:'#000',
        default:'#000'
      },
      text:{
        primary:'white',
        secondary: 'blue'
      },
      action:{
        active:'rgba(255,255,255,1)'
      },
    },
    typography:{
      fontFamily: ['Euclid Flex','Roboto','"Helvetica"','Arial','sans-serif'].join(','),
      fontSize:12,
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
    </ThemeProvider>
  )
}

export default NavbarWrapperLayout;
