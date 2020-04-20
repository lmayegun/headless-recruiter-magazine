import React from 'react';
import {Paper, Drawer, Hidden, Menu, MenuItem, Slide, Typography, Icon} from '@material-ui/core';
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
        background: theme.palette.primary[900]
    }
}));

const NavbarWrapperLayout = (props) => {

  const classes = useStyles(props);
  return(
    <ThemeProvider>
      <Hidden mdDown>
        <Paper className={classes.navbar} square={true}>
          <NavbarLayout />
        </Paper>
      </Hidden>
    </ThemeProvider>
  )
}

export default NavbarWrapperLayout;
